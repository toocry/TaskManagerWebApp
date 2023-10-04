
from django import forms
# import UsercreationForm
from django.contrib.auth.forms import UserCreationForm
# from django.contrib.auth 
from . models import CustomUserModel, TaskModel



class RegisterForm(UserCreationForm):
    # email = forms.EmailField(required=True)
    
    # NOTE: what is Meta class
    class Meta:
        model = CustomUserModel
        fields = ["username", "password1", "password2"]



#TODO : Create a custom forms for user authentication

    

#NOTE: using ModelForm which is subclas of Form, because it is directly CONNECTED/MAPPED to the database
# otherwise could use forms.Form
# class PostForm(forms.ModelForm):
#     class Meta:
#         model = Post
#         fields = ["title", "description"]


class TaskForm(forms.ModelForm):
    class Meta:
        model = TaskModel
        fields = ["title", "description"]

