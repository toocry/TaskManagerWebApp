from django.shortcuts import render, redirect

# from django.http import HttpResponse
from django.contrib.auth.decorators import login_required, permission_required 
from django.contrib.auth import login
from . models import TaskModel, CustomUserModel
from . serializers import TaskSerializer, UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
# import authentication
from django.contrib.auth import authenticate
#import status
from rest_framework import status



#!WORKING AS EXPECTED
#NOTE: API endpoint to display all tasks in json format 
class TaskList(APIView):
    def get(self, request):
        tasks = TaskModel.objects.all()
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)
    

#NOTE: API endpoint to display a sign up form
class SignUpView(APIView):
    def post(self,request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            login(request, user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
        return Response(serializer.errors)

        


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
            return Response({"message":"Login Successful"}, status=status.HTTP_200_OK)
        else:
            return Response({"message":"Wrong username or password"}, status=status.HTTP_401_UNAUTHORIZED)

   
#NOTE: API endpoint to create a task
class CreateTaskView(APIView):
    def post(self, request):
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            task = serializer.save(commit=False)
            task.author = request.user
            task.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)























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

# #NOTE: i need to save the status of the task in the db as well


# """
#  NOTE: Login & Logout & Register & Auth is from django.contrib.auth
#  which i have already added in AuthUserManagementApp/urls.py
#  with include('django.contrib.auth.urls')
# """
# def sign_up(request):
#     template = 'registration/sign_up.html'
#     # NOTE: if request is POST, then get the data from the form and
#     # fill the RegisterForm with the data
#     if(request.method == 'POST'):
#         form = RegisterForm(request.POST)
#         if form.is_valid():
#             user = form.save()
#             login(request, user)
#             return redirect('home') #! redirect to home page
#     else:
#         form = RegisterForm()

#     return render(request, template, {"form":form})


# @login_required(login_url='login/')
# def delete_task(request):
#     # task = TaskModel.objects.get(pk=task_id)
#     # task.delete()
#     # return redirect('home')
#     pass
# def update_task(request):
#     # task = TaskModel.objects.get(pk=task_id)
#     # form = TaskForm(instance=task)
#     # if(request.method == 'POST'):
#     #     form = TaskForm(request.POST, instance=task)
#     #     if form.is_valid():
#     #         form.save()
#     #         return redirect('home')
#     # return render(request, 'main/update_task.html', {"form":form})
#     pass

# #@login_required(login_url='login/')
# def complete_task(request):
#     # parse body of post request and retrieve the task_id
#     task_id = request.POST.get('task_id')
#     # get the task from db
#     task = TaskModel.objects.get(pk=task_id)
#     # change the status of the task
#     if task.completed == True:
#         task.completed = False
#     else:
#         task.completed = True
#     # save the task
#     task.save()
#     #send success response
#     return JsonResponse({"success":True})



    
    

    
    
    

