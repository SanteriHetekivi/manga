# Use python as base image.
FROM python:3.10.5

# Make directory /app
RUN mkdir -p /app
# Set to app permission to all allowed for everyone.
RUN chmod 777 /app
# Change directory to app.
WORKDIR /app

# Install manga_searcher.
RUN pip install --upgrade --no-cache-dir manga_searcher==0.0.1