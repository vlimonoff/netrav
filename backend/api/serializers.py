from djoser.serializers import UserSerializer
from rest_framework import relations, serializers

from artists.models import (Artist, ArtMovement,
                            Association)
from users.models import User


class ArtMovementSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArtMovement
        fields = '__all__'


class ArtistSerializer(serializers.ModelSerializer):
    artMovements = serializers.PrimaryKeyRelatedField(
        many=True, queryset=ArtMovement.objects.all()
    )

    class Meta:
        model = Artist
        fields = '__all__'

class AssociationSerializer(serializers.ModelSerializer):
    members = ArtistSerializer(many=True, read_only=True)
    owners = ArtistSerializer(many=True, read_only=True)
    
    class Meta:
        model = Association
        fields = '__all__'