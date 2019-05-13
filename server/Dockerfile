FROM node:8-alpine

WORKDIR usr/src/app

COPY . .
RUN npm install && npm run build

EXPOSE 3000
