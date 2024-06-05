from django.db import models

class Artist(models.Model):
    lastName = models.CharField(max_length=255)
    firstName = models.CharField(max_length=255)
    patronymic = models.CharField(
        max_length=255,
        blank=True, 
        null=True,
    )
    isArtist = models.BooleanField(default=True)
    birthDate = models.DateField(blank=True, null=True)
    deathDate = models.DateField(blank=True, null=True)
    birthPlace = models.CharField(
        max_length=255,
        blank=True,
        null=True,
    )
    deathPlace = models.CharField(
        max_length=255,
        blank=True,
        null=True,
    )
    artMovements = models.ManyToManyField(
        'ArtMovement',
        related_name='artists',
        blank=True,
    )
    otherInfo = models.TextField(blank=True, null=True)
    wikiUrl = models.TextField(blank=True, null=True)

    def __str__(self):
        return f'{self.lastName} {self.firstName}'
    

class ArtMovement(models.Model):
    title = models.CharField(max_length=255)
    info = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title


class Association(models.Model):
    title = models.CharField(max_length=255)
    workStart = models.IntegerField(blank=True, null=True)
    workEnd = models.IntegerField(blank=True, null=True)
    status = models.CharField(max_length=255, blank=True, null=True)
    city = models.CharField(max_length=255, blank=True, null=True)
    url = models.TextField(blank=True, null=True)
    members = models.ManyToManyField(Artist, related_name='member_associations', blank=True)
    owners = models.ManyToManyField(Artist, related_name='owner_associations', blank=True)

    def __str__(self):
        return self.title

