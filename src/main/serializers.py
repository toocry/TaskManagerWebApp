from rest_framework import serializers
from django.contrib.auth import get_user_model

from .models import TaskModel, CustomUserModel


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskModel
        # field: title and description
        fields = ["title", "description"]


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUserModel
        # all fields
        fields = ["username", "password"]
    
    def create(self, validated_data):
        user = get_user_model().objects.create_user(**validated_data)
        return user
