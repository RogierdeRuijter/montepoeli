FROM node:12-alpine AS builder

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build --prod

FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /usr/src/app/dist/* /usr/share/nginx/html/
