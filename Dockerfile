FROM node:10

WORKDIR app/src

# Needed for open shift to insert a random user id
RUN chgrp -R 0 . && \
    chmod -R g=u .

LABEL io.openshift.tags=loopback4,angular
LABEL io.openshift.wants=node
LABEL io.openshift.non-scalable=true
LABEL io.openshift.min-memory=256Mi
LABEL io.openshift.min-cpu=1

COPY client client

COPY server server

WORKDIR client

RUN npm install && npm run build && rm -rf node_modules

WORKDIR ../server

RUN npm install && npm run build

EXPOSE 8080

CMD [ "npm", "start" ]

USER 10001