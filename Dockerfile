FROM node:8-alpine

WORKDIR app/src

COPY server server

WORKDIR server

RUN npm install && npm run build

EXPOSE 8080

CMD [ "npm", "start" ]