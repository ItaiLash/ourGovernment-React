from django.contrib import admin
from django.urls import path
from rest_framework import routers
from django.conf.urls import include
from .views import PavViewSet ,PavFileViewSet

router = routers.DefaultRouter()
router.register('pav',PavViewSet)
router.register('pav',PavFileViewSet)
# router.register('compute_pav1',compute_pav)

urlpatterns = [
    path('', include(router.urls)),
    # path('', compute_pav),

]