from binascii import hexlify
from eventbrite import Eventbrite

from .models import User

import os
import datetime


eventbrite = Eventbrite(os.environ.get("EVENTBRITE_OAUTH_TOKEN"))


def generate_state():
    client_secret = hexlify(os.urandom(32)).decode()
    return client_secret


def generate_access_code(user_data):
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

    # now = datetime.datetime.utcnow()
    # end_time = now + datetime.timedelta(minutes=30)  # valid for 30 min
    # end_time = end_time.strftime("%Y-%m-%dT%H:%M:%SZ")

    access_code = hexlify(os.urandom(3)).decode()

    req = eventbrite.post('/events/' + str(event_id) + '/access_codes/', {
        'access_code.code': access_code,
        'access_code.ticket_ids': [ticket_id],
        'access_code.quantity_available': 1,  # can only use once
        # 'access_code.end_date': end_time
    })

    if 'code' in req:
        user.code = req['code']
        user.save()
        return user.code
    else:
        return None
