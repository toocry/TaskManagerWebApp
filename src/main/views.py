from django.shortcuts import render, redirect
from . forms import RegisterForm
# Create your views here.
from django.contrib.auth import login, logout, authenticate

def home(request):
    return render(request, 'main/home.html')

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