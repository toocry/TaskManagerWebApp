from django.contrib.auth.models import AbstractUser
# from django.contrib.auth.models import AbstractUser
from django.db import models

# from django.contrib.admin.models import LogEntry


# Create your models here.

#TODO: Create a custom model for the user profile
#will think about it, maybe i don't need one
#if i can use the default User model from django.contrib.auth.models

"""
    NOTE: inherits all built-in fields from AbstractUser
    idea behind it, to have custom named db table for the users
    + to being able to use auth, login from django.contrib.auth
"""
class CustomUserModel(AbstractUser):
   # only Username and Password are required by default
    pass
        


    
#TODO: Need to find out how to submit a form to my custom generated database, that will have DIFFERENT fields than the default User(django.contrib.auth.models) model, for example:
#  - name
#  - email
#  - password
#  - confirm password
#TODO: Migrating that 2 separate databases, one for the users and one for the TaskModels



#FIXME: no bug, but i want other functionality like, TaskModel manager
#need a little modification to that model, then migration to db
# class Post(models.Model):
#     author = models.ForeignKey(CustomUserModel, on_delete=models.CASCADE)
#     title = models.CharField(max_length=100)
#     description = models.TextField(max_length=1000)
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)

#     def __str__(self) -> str:
#         return self.title + "\n" + self.description + "\n" + str(self.created_at) + "\n" + str(self.updated_at) + "\n" + str(self.author)
    

class TaskModel(models.Model):
    author = models.ForeignKey(CustomUserModel, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=1000)
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        formatted_string = self.title + "\n" +\
            str(self.status) + "\n" + str(self.created_at) + "\n" + \
            str(self.updated_at) + "\n" + str(self.author)
        return formatted_string
