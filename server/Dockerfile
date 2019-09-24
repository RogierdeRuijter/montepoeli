FROM node:11

WORKDIR usr/src/app

COPY . .
RUN yarn install --frozen-lockfile

RUN npm run build

EXPOSE 3000
