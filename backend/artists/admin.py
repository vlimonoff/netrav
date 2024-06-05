from django.contrib import admin
from artists.models import Artist, ArtMovement, Association


admin.site.register(Artist)
admin.site.register(ArtMovement)
admin.site.register(Association)
