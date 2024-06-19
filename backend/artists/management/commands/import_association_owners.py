import csv
from tqdm import tqdm
from django.core.management.base import BaseCommand, CommandParser
from artists.models import Association, Artist


class Command(BaseCommand):
    help = 'Импорт основателей объединений из .csv файла'

    def add_arguments(self, parser):
        parser.add_argument('csv_file', type=str,
                            help='Путь к .csv файлу с основателями объединений')
    
    def handle(self, *args, **kwargs):
        csv_file = kwargs['csv_file']
        with open(csv_file, newline='', encoding='utf-8') as file:
            reader = csv.DictReader(file)
            for row in tqdm(reader):
                association = Association.objects.get(id=row['association_id'])
                artist = Artist.objects.get(id=row['artist_id'])
                association.owners.add(artist)
        self.stdout.write(self.style.SUCCESS('Основатели объединений успешно импортированы.'))
