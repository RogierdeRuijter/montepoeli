FROM node:10

WORKDIR app/src

# Needed for open shift to insert a random user id
RUN chgrp -R 0 . && \
    chmod -R g=u .

COPY client client

COPY server server

WORKDIR client

RUN npm install && npm run build && rm -rf node_modules

WORKDIR ../server

RUN npm install && npm run build

EXPOSE 8080

CMD [ "npm", "start" ]

USER 10001