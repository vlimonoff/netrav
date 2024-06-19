import csv
from tqdm import tqdm
from django.core.management.base import BaseCommand
from artists.models import Association


class Command(BaseCommand):
    help = 'Импорт художников из .csv файла'

    def add_arguments(self, parser):
        parser.add_argument('csv_file', type=str,
                            help='Путь к .csv файлу с объединениями')
        
    def handle(self, *args, **kwargs):
        csv_file = kwargs['csv_file']
        with open(csv_file, newline='', encoding='utf-8') as file:
            reader = csv.DictReader(file)
            for row in tqdm(reader):
                Association.objects.update_or_create(
                    id=row['id'],
                    defaults={
                        'title': row['title'],
                        'workStart': row.get('workStart', None),
                        'workEnd': row.get('workEnd', None),
                        'status': row.get('status', None),
                        'city': row.get('city', None),
                        'url': row.get('url', None)
                    }
                )
        self.stdout.write(self.style.SUCCESS('Объединения успешно импортированы.'))
