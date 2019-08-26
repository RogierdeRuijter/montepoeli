FROM node:12

WORKDIR /usr/src/app

COPY e2e/package.json e2e/package.json

RUN npm i --prefix=e2e

COPY e2e e2e
COPY tsconfig.json tsconfig.json

WORKDIR /usr/src/app/e2e
