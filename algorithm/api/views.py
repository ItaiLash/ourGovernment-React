
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from json_convert import *
from .models import Pav
import json



class PavViewSet(viewsets.ModelViewSet):
    queryset = Pav.objects.all()
    @action(detail=True, methods=['GET'])
    def compute_pav(self, request, pk=None):
        try:
            result = start_algo(request.data)
            response = {"massage": 'Success', 'result': json.dumps(result, default=lambda o: o.__dict__)}
            return Response(response, status=status.HTTP_200_OK)
        except:
            return Response("Error", status=status.HTTP_400_BAD_REQUEST)
