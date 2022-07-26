from rest_framework import serializers
from .models import Pav, PavFile


class PavSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pav
        fields = ('id', 'result', 'description')


class PavFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = PavFile
        fields = ('file')
