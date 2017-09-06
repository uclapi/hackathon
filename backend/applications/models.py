from django.db import models


class User(models.Model):
    cn = models.CharField(primary_key=True, max_length=80)
    code = models.CharField(max_length=80)
