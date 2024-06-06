from django.urls import include
from rest_framework import routers
from django.urls import re_path

from api.views import ArtMovementsViewSet, ArtistsViewSet, AssociationViewSet

router_v1 = routers.DefaultRouter()
router_v1.register(r'artmovements', ArtMovementsViewSet, basename='artmovements')
router_v1.register(r'artists', ArtistsViewSet)
router_v1.register(r'associations', AssociationViewSet)

urlpatterns = [
    re_path(r'', include(router_v1.urls)),
]