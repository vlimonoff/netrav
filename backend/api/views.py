from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet

from api.serializers import ArtMovementSerializer, ArtistSerializer, AssociationSerializer
from artists.models import ArtMovement, Artist, Association
from api.filters import ArtMovementFilter
from api.pagination import CustomPagination


class ArtMovementsViewSet(ReadOnlyModelViewSet):
    queryset = ArtMovement.objects.all()
    serializer_class = ArtMovementSerializer
    pagination_class = None
    filter_backends = (DjangoFilterBackend,)
    filterset_class = ArtMovementFilter


class ArtistsViewSet(ModelViewSet):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer
    pagination_class = CustomPagination


class AssociationViewSet(ModelViewSet):
    queryset = Association.objects.all()
    serializer_class = AssociationSerializer
    pagination_class = CustomPagination
