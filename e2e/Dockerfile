FROM node:12-slim

WORKDIR /usr/src/app

COPY package.json package.json

RUN yarn install

COPY . .

# WORKDIR /usr/src/app/e2e
