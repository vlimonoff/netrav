# Используем официальный образ Python
FROM python:3.9

# Устанавливаем зависимости для psycopg2
RUN apt-get update \
    && apt-get install -y gcc postgresql-client \
    && apt-get clean

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файл требований и устанавливаем зависимости
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Копируем весь проект
COPY . .

# Копируем .env файл
COPY .env .env

# Устанавливаем переменные окружения
ENV DJANGO_SETTINGS_MODULE=netrav.settings
ENV PYTHONUNBUFFERED=1

# Запуск gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "netrav.wsgi"]
