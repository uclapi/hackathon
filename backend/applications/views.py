from django.shortcuts import render, HttpResponse, redirect
from django.http import JsonResponse
from django.core.serializers.json import DjangoJSONEncoder
from django.views.decorators.csrf import csrf_protect
import requests

from .helpers import generate_state, generate_access_code

import os
import json
import requests


def render_home(request):
    return render(request, 'home.html', {
        'initial_data': {
            'applied': "False"
        }
    })


@csrf_protect
def process_login(request):
    state = generate_state()
    request.session["state"] = state
    auth_url = os.environ.get("UCLAPI_URL") + "/oauth/authorise"
    auth_url += "?client_id=" + os.environ.get("UCLAPI_CLIENT_ID")
    auth_url += "&state=" + state

    return redirect(auth_url)


def callback(request):
    try:
        code = request.GET.get("code")
        client_id = request.GET.get("client_id")
        state = request.GET.get("state")
    except KeyError:
        return render(request, 'home.html', {
            'initial_data': {
                "error": "Parameters missing from request."
            }
        })

    try:
        session_state = request.session["state"]
    except KeyError:
        return render(request, 'home.html', {
            'initial_data': {
                "error": "There is no session cookie set containing a state"
            }
        })

    url = os.environ.get("UCLAPI_URL") + "/oauth/token"
    params = {
        'grant_type': 'authorization_code',
        'code': code,
        'client_secret': os.environ.get("UCLAPI_CLIENT_SECRET")
    }

    r = requests.get(url, params=params)

    try:
        token_data = r.json()

        if token_data["ok"] is not True:
            return render(request, 'home.html', {
                'initial_data': {
                    "error": "An error occurred: " + token_data["error"]
                }
            })

        if token_data["state"] != state:
            return render(request, 'home.html', {
                'initial_data': {
                    "error": "The wrong state was returned"
                }
            })

        if token_data["client_id"] != client_id:
            return render(request, 'home.html', {
                'initial_data': {
                    "error": "The wrong client ID was returned"
                }
            })

        token_code = token_data["token"]
        scope_data = json.loads(token_data["scope"])
    except KeyError:
        return render(request, 'home.html', {
            'initial_data': {
                "error": "Proper JSON was not returned by the token endpoint"
            }
        })

    url = os.environ.get("UCLAPI_URL") + "/oauth/user/data"
    params = {
        'token': token_code,
        'client_secret': os.environ.get("UCLAPI_CLIENT_SECRET")
    }

    r = requests.get(url, params=params)

    return render(request, 'home.html', {
        'initial_data': {
            "user_data": str(r.json()),
            "applied": "True"
        }
    })
