from django.db import models


# Create your models here.
def upload_file(instance,file_name):
    return '/'.join(['csv',file_name])
class PavFile(models.Model):
    file=models.FileField(upload_to=upload_file)

class Pav(models.Model):
    result=models.JSONField
    description=models.CharField(max_length=100,default='')
