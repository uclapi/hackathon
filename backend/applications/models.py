from django.db import models


class User(models.Model):
    cn = models.CharField(primary_key=True, max_length=80)
    code = models.CharField(max_length=80)
    # referral code of the user who referred this user
    referrer_code = models.CharField(max_length=80)
    # this user's own unique code used to refer other people
    referral_code = models.CharField(max_length=80)
