import csv
from tqdm import tqdm
from django.core.management.base import BaseCommand
from artists.models import Artist


class Command(BaseCommand):
    help = 'Импорт художников из .csv файла'

    def add_arguments(self, parser):
        parser.add_argument('csv_file', type=str,
                            help='Путь к .csv файлу с художниками')
        
    def handle(self, *args, **kwargs):
        csv_file = kwargs['csv_file']
        with open(csv_file, newline='', encoding='utf-8') as file:
            reader = csv.DictReader(file)
            for row in tqdm(reader):
                Artist.objects.update_or_create(
                    id=row['id'],
                    defaults={
                        'lastName': row['lastName'],
                        'firstName': row['firstName'],
                        'patronymic': row.get('patronymic', ''),
                        'isArtist': row['isArtist'].lower() in ['true', '1', 'yes'],
                        'birthDate': row.get('birthDate', None),
                        'deathDate': row.get('deathDate', None),
                        'birthPlace': row.get('birthPlace', None),
                        'deathPlace': row.get('deathPlace', None),
                        'otherInfo': row.get('otherInfo', None),
                        'wikiUrl': row.get('wikiUrl', None)
                    }
                )
        self.stdout.write(self.style.SUCCESS('Объединения успешно импортированы.'))
