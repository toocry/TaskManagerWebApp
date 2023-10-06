
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('home', views.home, name='home'),
    path('sign-up', views.sign_up, name='sign_up'),
    # path('login', views.login, name='login'),

    path('create_task', views.create_task, name='create_task'),

    path('complete_task', views.complete_task, name='complete_task'),
]

