FROM python:3.10.5-alpine

COPY Requirements.txt .

RUN python -m pip install --upgrade pip

RUN pip install --no-cache-dir numpy

RUN pip install --no-cache-dir -r Requirements.txt 

COPY . .

EXPOSE $PORT

CMD gunicorn --workers=2 --bind 0.0.0.0:$PORT 'app:app'
