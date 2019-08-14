FROM node:11

WORKDIR usr/src/app

COPY . .
RUN npm install

RUN npm test

RUN npm run build

EXPOSE 3000
