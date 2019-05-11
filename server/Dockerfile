FROM node:8-alpine

WORKDIR app/src

COPY . .
RUN npm install && npm run build

EXPOSE 3000

CMD [ "npm", "start" ]