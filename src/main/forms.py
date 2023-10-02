
from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
#from .models import Task, User 
from .models import Post


class RegisterForm(UserCreationForm):
    email = forms.EmailField(required=True)
    
    # NOTE: what is Meta class
    class Meta:
        model = User
        fields = ["username", "email", "password1", "password2"]



#TODO : Create a custom forms for user authentication

    

#NOTE: using ModelForm which is subclas of Form, because it is directly CONNECTED/MAPPED to the database
# otherwise could use forms.Form
class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ["title", "description"]

