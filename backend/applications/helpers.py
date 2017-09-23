from binascii import hexlify
from eventbrite import Eventbrite

from .models import User

import os
import datetime


eventbrite = Eventbrite(os.environ.get("EVENTBRITE_OAUTH_TOKEN"))


def generate_state():
    client_secret = hexlify(os.urandom(32)).decode()
    return client_secret


def generate_access_code(request, user_data):
    """
    Generates unique access code for a user
    It first checks if the access code has already been generated for the user
    by using the 'cn' field.
    It then uses the Eventbrite API to to create an access code for a given
    ticket id for a given event id.
    Args:
        :user_data the data about the user gained from OAuth
    Returns:
        the access code for the user or None in case of an error
    """

    try:
        user = User.objects.get(cn=user_data['cn'])
        return user.code
    except User.DoesNotExist:
        user = User(cn=user_data['cn'])

    event_id = os.environ.get('EVENTBRITE_EVENTID')
    ticket_id = os.environ.get('EVENTBRITE_TICKETID')

    access_code = hexlify(os.urandom(3)).decode()

    req = eventbrite.post('/events/' + str(event_id) + '/access_codes/', {
        'access_code.code': access_code,
        'access_code.ticket_ids': [ticket_id],
        'access_code.quantity_available': 1,  # can only use once
    })

    if 'code' in req:
        user.code = req['code']
        referral_code = hexlify(os.urandom(4)).decode()
        user.referral_code = referral_code

        # if this user was referred
        if "ref" in request.session:
            user.referred_code = request.session["ref"]

        user.save()
        return user.code
    else:
        return None


def count_referrals(cn):
    try:
        user = User.objects.get(cn=cn)
    except User.DoesNotExist:
        return 0

    event_id = os.environ.get('EVENTBRITE_EVENTID')
    req = eventbrite.get("/events/{}/access_codes/".format(event_id))

    access_codes_used = {}

    def add_access_codes(req):
        for code in req["access_codes"]:
            # if acccess code has been used to register on Eventbrite
            if code["quantity_sold"]:
                access_codes_used[code["code"]] = True

    while req.status_code == 200:
        add_access_codes(req)
        if not req["pagination"]["has_more_items"]:
            break
        req = eventbrite.get("/events/{}/access_codes/?continuation={}".format(
            event_id,
            req["pagination"]["continuation"]
        ))

    referrals = 0
    referral_code = user.referral_code

    # lookup all user objects who's refferer_code is this user's referral_code
    for user in User.objects.filter(referrer_code=referral_code):
        # if user has registered on Eventbrite
        if user.code in access_codes_used:
            referrals += 1

    return referrals
