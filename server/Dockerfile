FROM node:11

WORKDIR usr/src/app

COPY . .
RUN npm install --prod && npm run build

EXPOSE 3000
