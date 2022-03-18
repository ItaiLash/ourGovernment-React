from django.db import models


# Create your models here.
class Pav(models.Model):
    result=models.JSONField
    description=models.CharField(max_length=100,default='')
