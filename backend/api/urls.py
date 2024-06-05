from django.urls import include
from rest_framework import routers
from django.conf.urls import url

from api.views import ArtMovementsViewSet, ArtistsViewSet, AssociationViewSet

router_v1 = routers.DefaultRouter()
router_v1.register(r'artmovements', ArtMovementsViewSet, basename='artmovements')
router_v1.register(r'artists', ArtistsViewSet)
router_v1.register(r'associations', AssociationViewSet)

urlpatterns = [
    url(r'', include(router_v1.urls)),
]