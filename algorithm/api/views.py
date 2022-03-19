
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from json_convert import *
from .models import Pav
from .serializers import PavSerializer
from django.http import HttpResponse
import json



class PavViewSet(viewsets.ModelViewSet):
    queryset = Pav.objects.all()
    serializer_class = PavSerializer
    @action(detail=True, methods=['GET'])
    def compute_pav(self, request, pk=None):
        try:
            print(request)
            result = start_algo(request.data)
            response = {"massage": 'Success', 'result': json.dumps(result, default=lambda o: o.__dict__)}
            return Response(response, status=status.HTTP_200_OK)
        except:
            return Response("Error", status=status.HTTP_400_BAD_REQUEST)

# def compute_pav(request, pk=None):
#     try:
#         print(request)
#         result = start_algo(request.data)
#         response = {"massage": 'Success', 'result': json.dumps(result, default=lambda o: o.__dict__)}
#         return HttpResponse(response, status=status.HTTP_200_OK)
#     except:
#         return HttpResponse("Error", status=status.HTTP_400_BAD_REQUEST)