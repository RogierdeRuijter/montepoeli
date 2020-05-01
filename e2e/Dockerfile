FROM node:14-slim

WORKDIR /usr/src/app

COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install

COPY start-up-scripts start-up-scripts
COPY nginx-conf nginx-conf  
COPY protractor.conf.js protractor.conf.js
COPY tsconfig.json tsconfig.json
COPY tsconfig.e2e.json tsconfig.e2e.json

COPY src src
