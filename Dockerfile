FROM node:8-alpine

WORKDIR app/src

COPY . .
RUN npm install && npm run build

EXPOSE 8080

CMD [ "npm", "start" ]