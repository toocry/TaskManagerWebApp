from rest_framework import serializers

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
        fields = "__all__"
