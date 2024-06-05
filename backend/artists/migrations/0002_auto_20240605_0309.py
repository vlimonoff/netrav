# Generated by Django 3.1.4 on 2024-06-05 00:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('artists', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='artist',
            name='art_movements',
            field=models.ManyToManyField(blank=True, related_name='artists', to='artists.ArtMovement'),
        ),
        migrations.DeleteModel(
            name='ArtistArtMovement',
        ),
    ]
