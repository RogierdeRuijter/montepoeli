FROM node:8-alpine AS builder

WORKDIR /usr/src/app

COPY . .

RUN npm install && npm run build --prod

FROM nginx:alpine

COPY --from=builder /app/dist/frontend/* /usr/share/nginx/html/
