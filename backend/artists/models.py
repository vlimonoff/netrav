from django.db import models

class Artist(models.Model):
    last_name = models.CharField(max_length=255)
    first_name = models.CharField(max_length=255)
    patronymic = models.CharField(
        max_length=255,
        blank=True, 
        null=True,
    )
    is_artist = models.BooleanField(default=True)
    birth_date = models.DateField(blank=True, null=True)
    death_date = models.DateField(blank=True, null=True)
    birth_place = models.CharField(
        max_length=255,
        blank=True,
        null=True,
    )
    death_place = models.CharField(
        max_length=255,
        blank=True,
        null=True,
    )
    art_movements = models.ManyToManyField(
        'ArtMovement',
        related_name='artists',
        blank=True,
    )
    other_info = models.TextField(blank=True, null=True)
    wiki_url = models.TextField(blank=True, null=True)

    def __str__(self):
        return f'{self.last_name} {self.first_name}'
    

class ArtMovement(models.Model):
    title = models.CharField(max_length=255)
    info = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title


class Association(models.Model):
    title = models.CharField(max_length=255)
    work_start = models.IntegerField(blank=True, null=True)
    work_end = models.IntegerField(blank=True, null=True)
    status = models.CharField(max_length=255, blank=True, null=True)
    city = models.CharField(max_length=255, blank=True, null=True)
    url = models.TextField(blank=True, null=True)
    members = models.ManyToManyField(Artist, related_name='member_associations', blank=True)
    owners = models.ManyToManyField(Artist, related_name='owner_associations', blank=True)

    def __str__(self):
        return self.title

