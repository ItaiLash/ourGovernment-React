
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
    @action(detail=True, methods=['GET','POST'])
    def compute_pav(self, request, pk=None):
        if 'offices' in request.data and 'candidates' in request.data and 'voters' in request.data:
            if request.data['offices'] and request.data['candidates'] and request.data['voters']:
                try:
                    print(request)
                    print(request.data)
                    result = start_algo(request.data)
                    response = {"massage": 'Success', 'result': json.dumps(result, default=lambda o: o.__dict__)}
                    print(response)
                    return Response(response, status=status.HTTP_200_OK)
                except Exception as e:
                    print(e)
                    return Response("Error", status=status.HTTP_400_BAD_REQUEST)
            else:
                response = {"massage": 'one or more fields missing'}
                return Response(response, status=status.HTTP_400_BAD_REQUEST)
        else:
            response = {"massage": 'one or more fields missing'}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)

# def compute_pav(request, pk=None):
#     try:
#         print(request)
#         result = start_algo(request.data)
#         response = {"massage": 'Success', 'result': json.dumps(result, default=lambda o: o.__dict__)}
#         return HttpResponse(response, status=status.HTTP_200_OK)
#     except:
#         return HttpResponse("Error", status=status.HTTP_400_BAD_REQUEST)