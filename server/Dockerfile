FROM node:13

WORKDIR usr/src/app

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install --frozen-lockfile

COPY . .

RUN npm run build

EXPOSE 3000
