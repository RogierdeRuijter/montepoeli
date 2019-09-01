FROM node:12-alpine AS builder

WORKDIR /usr/src/app

COPY package.json package.json

RUN npm install

COPY src src
COPY angular.json angular.json
COPY tsconfig.json tsconfig.json

RUN npm run build:e2e

RUN ls

RUN rm -rf node_modules/

FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY dynamic-environments usr/dynamic-environments

COPY --from=builder /usr/src/app/dist/ .

COPY --from=builder /usr/src/app/dist/* /usr/share/nginx/html/
