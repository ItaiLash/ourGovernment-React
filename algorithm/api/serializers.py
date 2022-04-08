from rest_framework import serializers
from .models import Pav
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

class PavSerializer(serializers.ModelSerializer):
    class Meta:
        model=Pav
        fields = ('id','result','description')