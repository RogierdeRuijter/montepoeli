#!/bin/sh

if docker pull montepoeli.club/montepouli-client-base:latest; then
    echo "Image available"
else
    docker build -t montepoeli.club/montepouli-client-base:test2 . -f Dockerfile.base-prod
    # docker push montepoeli.club/montepouli-client-base:test2
fi