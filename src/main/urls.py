
from django.urls import path
from . import views
from  rest_framework.views import APIView
from .views import SignUpView, LoginView, TaskList, LogoutView, CreateTaskView, SetCompleted, DeleteTask


urlpatterns = [
    # path('', views.home, name='home'),
    path('login', LoginView.as_view(), name='login'),
    path('sign-up', SignUpView.as_view(), name='sign-up'),
    # path('login', views.login, name='login'),
    path('tasks', TaskList.as_view(), name='tasks'),
    path('add_task', CreateTaskView.as_view(), name='add_task'),
    
    path('logout', LogoutView.as_view(), name='logout'),
    # path('create_task', views.create_task, name='create_task'),

    path('complete_task', SetCompleted.as_view(), name='complete_task'),
    path('delete_task', DeleteTask.as_view(), name='delete_task'),
]

