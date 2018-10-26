#!/bin/bash
echo "Restarting the web by stopping and rebuilding it"
docker-compose stop web
docker-compose up -d --build