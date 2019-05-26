FROM node:8-alpine AS builder

WORKDIR /usr/src/app

COPY . .

RUN npm install && npm run build --prod

FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /usr/src/app/dist/* /usr/share/nginx/html/
