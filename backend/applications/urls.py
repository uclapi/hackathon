from django.conf.urls import include, url
from . import views

urlpatterns = [
    url(r'^$', views.render_home),
    url(r'login/process', views.process_login),
    url(r'callback', views.callback),
    url(r'token/test', views.token_test)
]
