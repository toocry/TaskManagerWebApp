from django.shortcuts import render, redirect
from . forms import TaskForm, RegisterForm
# Create your views here.
from django.contrib.auth.decorators import login_required, permission_required 
from django.contrib.auth import login
from . models import TaskModel, CustomUserModel
#import built-in User model from django.contrib.auth.models
#rom django.contrib.auth.models import User

# from django.contrib.auth.backends


@login_required(login_url='login/')
def home(request):
    posts = TaskModel.objects.all()
    
    return render(request, 'main/home.html', {"posts":posts})


@login_required(login_url='login/')
def create_post(request):
    template = 'main/create_post.html'
    # NOTE: if request is POST(which is submitting the post to db), then get the data from the form and fill the PostForm with the data
    if(request.method == 'POST'):
        form = TaskForm(request.POST)
        if form.is_valid():
            #NOTE: incomplete form -> commit=False
            post = form.save(commit=False)
            #NOTE: add the task creator as the author of Task
            post.author = request.user
            post.save()
            return redirect('home')

    else:
        form = TaskForm()

    return render(request, template, {"form":form})




"""
 NOTE: Login & Logout & Register & Auth is from django.contrib.auth
 which i have already added in AuthUserManagementApp/urls.py
 with include('django.contrib.auth.urls')
"""
def sign_up(request):
    template = 'registration/sign_up.html'
    # NOTE: if request is POST, then get the data from the form and
    # fill the RegisterForm with the data
    if(request.method == 'POST'):
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('home') #! redirect to home page
    else:
        form = RegisterForm()

    return render(request, template, {"form":form})