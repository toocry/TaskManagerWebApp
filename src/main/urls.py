
from django.urls import path
from . import views
from  rest_framework.views import APIView
from .views import SignUpView, LoginView, TaskList


urlpatterns = [
    # path('', views.home, name='home'),
    path('login', LoginView.as_view(), name='login'),
    path('sign-up', SignUpView.as_view(), name='sign-up'),
    # path('login', views.login, name='login'),
    path('display_tasks', TaskList.as_view(), name='display_tasks'),

    # path('create_task', views.create_task, name='create_task'),

    # path('complete_task', views.complete_task, name='complete_task'),
]

