from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from provider.handler import *
from .models import Pav, PavFile
from .serializers import PavSerializer, PavFileSerializer
from django.core.files import File
from django.http import HttpResponse
from pav.settings import MEDIA_ROOT


class PavViewSet(viewsets.ModelViewSet):
    queryset = Pav.objects.all()
    serializer_class = PavSerializer

    @action(detail=True, methods=['GET', 'POST'])
    def compute_pav(self, request, pk=None):
        if 'offices' in request.data and 'candidates' in request.data and 'voters' in request.data:
            if request.data['offices'] and request.data['candidates'] and request.data['voters']:
                try:
                    result = start_algo(request.data)
                    response = {"massage": 'Success', 'result': result}
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


class PavFileViewSet(viewsets.ModelViewSet):
    queryset = PavFile.objects.all()
    serializer_class = PavFileSerializer
    @action(detail=True, methods=['POST'])
    def upload_file(self, request, pk=None):
        file = request.data['pav_file']
        t = PavFile.objects.create(file=file)
        try:
            res = start_algo_uploud(f"files/{str(t.file)}")
            response = {"massage": 'Success', 'result': res}
            if os.path.exists(f"files/{str(t.file)}"):
                os.remove(f"files/{str(t.file)}")
            return Response(response, status=status.HTTP_200_OK)
        except Exception as e:
            print(e)
            if os.path.exists(f"files/{str(t.file)}"):
                os.remove(f"files/{str(t.file)}")
            response = {"massage": str(e), 'result': ""}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['GET'])
    def download_results(self, request=None, pk=None):
        path_to_file = MEDIA_ROOT + '/explanation.html'
        with open(path_to_file, 'rb') as f:
            explanation_file = File(f)
            response = HttpResponse(explanation_file.read())
        response['Content-Disposition'] = 'attachment'
        return response

    @action(detail=True, methods=['GET'])
    def download_results_csv(self, request=None, pk=None):
        path_to_file = MEDIA_ROOT + '/result.csv'
        with open(path_to_file, 'rb') as f:
            explanation_file = File(f)
            response = HttpResponse(explanation_file.read())
        response['Content-Disposition'] = 'attachment'
        return response
