from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_protect, ensure_csrf_cookie
import requests

from .helpers import generate_state, generate_access_code, count_referrals

import os
import json


@ensure_csrf_cookie
def render_home(request):
    if "eventbrite_code" in request.session:
        return render(request, "home.html", {
            "initial_data": {
                "given_name": request.session["given_name"],
                "applied": "True",
                "event_link": os.environ["EVENT_LINK"],
                "eventbrite_code": request.session["eventbrite_code"]
            }
        })

    if "ref" in request.GET:
        request.session["ref"] = request.GET["ref"]

    return render(request, "home.html", {
        "initial_data": {
            "applied": "False",
            "event_link": os.environ["EVENT_LINK"],
        }
    })


@csrf_protect
def process_login(request):
    state = generate_state()
    request.session["state"] = state
    auth_url = os.environ["UCLAPI_URL"] + "/oauth/authorise"
    auth_url += "?client_id=" + os.environ["UCLAPI_CLIENT_ID"]
    auth_url += "&state=" + state

    return redirect(auth_url)


def callback(request):
    """
    Handles the OAuth callback URL.
    After authenticating user, it calls the generate_access_code method
    to get an access code for the user.
    Finally, it renders the homepage again but also passing the user's name
    and access token
    """
    try:
        code = request.GET["code"]
        client_id = request.GET["client_id"]
        state = request.GET["state"]
    except KeyError:
        return render(request, "home.html", {
            "initial_data": {
                "error": "Parameters missing from request."
            }
        })

    try:
        session_state = request.session["state"]
    except KeyError:
        return render(request, "home.html", {
            "initial_data": {
                "error": "There is no session cookie set containing a state"
            }
        })

    url = os.environ["UCLAPI_URL"] + "/oauth/token"
    params = {
        "grant_type": "authorization_code",
        "code": code,
        "client_secret": os.environ["UCLAPI_CLIENT_SECRET"]
    }

    r = requests.get(url, params=params)

    try:
        token_data = r.json()

        if token_data["ok"] is not True:
            return render(request, "home.html", {
                "initial_data": {
                    "error": "An error occurred: " + token_data["error"]
                }
            })

        if token_data["state"] != state:
            return render(request, "home.html", {
                "initial_data": {
                    "error": "The wrong state was returned"
                }
            })

        if token_data["client_id"] != client_id:
            return render(request, "home.html", {
                "initial_data": {
                    "error": "The wrong client ID was returned"
                }
            })

        token_code = token_data["token"]
        scope_data = json.loads(token_data["scope"])
    except KeyError:
        return render(request, "home.html", {
            "initial_data": {
                "error": "Proper JSON was not returned by the token endpoint"
            }
        })

    url = os.environ["UCLAPI_URL"] + "/oauth/user/data"
    params = {
        "token": token_code,
        "client_secret": os.environ["UCLAPI_CLIENT_SECRET"]
    }

    r = requests.get(url, params=params)
    user_data = r.json()

    if not user_data["ok"]:
        return render(request, "home.html", {
            "initial_data": {
                "error": "Error generating user data",
            }
        })

    eventbrite_code = generate_access_code(request, user_data)

    if not eventbrite_code:
        return render(request, "home.html", {
            "initial_data": {
                "error": "Error generating code",
            }
        })

    request.session["given_name"] = user_data["given_name"]
    request.session["eventbrite_code"] = eventbrite_code
    request.session["cn"] = user_data["cn"]

    return redirect("{}?discount={}".format(
        os.environ["EVENT_LINK"],
        eventbrite_code,
    ))


def refer(request):
    # if user's not logged in
    if "cn" not in request.session:
        return redirect("/")

    cn = request.session["cn"]
    referrals = count_referrals(cn)

    return render(request, "refer.html", {
        "initial_data": {
            "referrals": referrals
        }
    })
