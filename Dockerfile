FROM node:8-alpine

WORKDIR app/src

COPY client client
WORKDIR client
RUN npm install && npm run build && rm -rf node_modules

WORKDIR ..

COPY server server
WORKDIR server
RUN npm install && npm run build

EXPOSE 8080

CMD [ "npm", "start" ]