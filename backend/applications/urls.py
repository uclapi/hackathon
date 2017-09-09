from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.render_home),
    url(r'login/process', views.process_login),
    url(r'callback', views.callback),
]
