FROM tiangolo/uvicorn-gunicorn:python3.8-slim
RUN mkdir -p /app
RUN pip install --upgrade pip
COPY requirements.txt /app
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install tensorflow_hub
COPY . /app
ENTRYPOINT ["/start-reload.sh"]