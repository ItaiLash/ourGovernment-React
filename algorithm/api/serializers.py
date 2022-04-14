from rest_framework import serializers
from .models import Pav , PavFile
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

class PavSerializer(serializers.ModelSerializer):
    class Meta:
        model=Pav
        fields = ('id','result','description')
class PavFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = PavFile
        fields = ('file')