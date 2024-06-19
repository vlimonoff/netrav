import csv
import os

from django.conf import settings
from django.core.management.base import BaseCommand, CommandError

from artists.models import Artist


class Command(BaseCommand):
    help = 'Загрузка художников в базу данных'

    def handle(self, *args, **options):
        file_path = os.path.join(
            settings.BASE_DIR,
            'data',
            'artists.csv',
        )

        artists = []

        with open(file_path, 'r', encoding='utf-8') as file:
            try:
                reader = csv.reader(file, delimiter=',')
                for item in reader:
                    