from django_filters.rest_framework import FilterSet, filters

from artists.models import Artist, ArtMovement, Association


class ArtMovementFilter(FilterSet):
    title = filters.CharFilter(lookup_expr='istartswith')

    class Meta:
        model = ArtMovement
        fields = ('title',)