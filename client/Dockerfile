FROM node:8-alpine AS builder

WORKDIR /usr/src/app

COPY . .

RUN npm install --prod && npm run build --prod

FROM nginx:alpine

COPY --from=builder /usr/src/app/dist/frontend/* /usr/share/nginx/html/
