from django.shortcuts import render, redirect
# import requests
# from django.http import response
# from django.http import HttpResponse
from django.contrib.auth.decorators import login_required, permission_required 
from django.contrib.auth import login, logout
from . models import TaskModel, CustomUserModel
from . serializers import TaskSerializer, UserSerializer, FullTaskSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
# import authentication
from django.contrib.auth import authenticate
#import status
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated



#!WORKING AS EXPECTED
#NOTE: API endpoint to display all tasks in json format 
class TaskList(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        tasks = TaskModel.objects.filter(author=request.user)
        serializer = FullTaskSerializer(tasks, many=True)
        response = Response(serializer.data)
        return response
    

#!WORKING AS EXPECTED
#NOTE: API endpoint to display a sign up form
class SignUpView(APIView):
    def post(self,request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            token, _ = Token.objects.get_or_create(user=user)
            
            response = Response({"token": token.key, "message":"Login Successful"}, status=status.HTTP_200_OK)
            # print(response)
            return response
        else:
            error = serializer.errors
            # print(error)
            return error
        # print(request.data)
        # return Response({"message":"Signup Successful"}, status=status.HTTP_200_OK)





        

#!WORKING AS EXPECTED
#NOTE: API endpoint to display a sign up form
class LoginView(APIView):
    def post(self, request):
        #get the username and password from the request
        username = request.data.get("username")
        password = request.data.get("password")
        #authenticate the user
        user = authenticate(request, username=username, password=password)
        if user is not None:
            #login the user
            login(request, user)
            token, _ = Token.objects.get_or_create(user=user)
            response = Response({"token": token.key, "message":"Login Successful"}, status=status.HTTP_200_OK)
            # print("token is:" + token.key)
            # print(response)
            return response
        else:
            response = Response({"message":"Wrong username or password"}, status=status.HTTP_401_UNAUTHORIZED)
            # print(response)
            return response


class LogoutView(APIView):
    def post(self, request):
        logout(request)
        response = Response({"message":"Logout Successful"}, status=status.HTTP_200_OK)
        return response

   
#TODO: ....
#NOTE: API endpoint to create a task
class CreateTaskView(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        print(request.user)
        serializer = TaskSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid():
            task = serializer.save(author=request.user)
            
            response = Response({"message":"Added Successfully"}, status=status.HTTP_200_OK)
            return response
        else:
            error = serializer.errors
            return error
        # return Response({"message":"Added Successfully"}, status=status.HTTP_200_OK)

class SetCompleted(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        task_id = request.data.get("task_id")
        task = TaskModel.objects.get(pk=task_id)
        if task.completed == True:
            task.completed = False
        else:
            task.completed = True
        task.save()
        response = Response({"message":"Updated Successfully"}, status=status.HTTP_200_OK)
        return response

class DeleteTask(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        task_id = request.data.get("task_id")
        task = TaskModel.objects.get(pk=task_id)
        task.delete()
        response = Response({"message":"Deleted Successfully"}, status=status.HTTP_200_OK)
        return response




















# @login_required(login_url='login/')
# def home(request):
#     tasks = TaskModel.objects.filter(author=request.user)
    
#     return render(request, 'main/home.html', {"tasks":tasks})


# @login_required(login_url='login/')
# def create_task(request):
#     template = 'main/create_task.html'
#     # NOTE: if request is POST(which is submitting the post to db), then get the data from the form and fill the PostForm with the data
#     if(request.method == 'POST'):
#         form = TaskForm(request.POST)
#         if form.is_valid():
#             #NOTE: incomplete form -> commit=False
#             task = form.save(commit=False)
#             #NOTE: add the task creator as the author of Task
#             task.status = False
#             task.author = request.user
#             task.save()
#             return redirect('home')

#     else:
#         form = TaskForm()

#     return render(request, template, {"form":form})


    
    

    
    
    

