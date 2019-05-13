FROM node:10-alpine

RUN mkdir /dockerbook
COPY ./ /dockerbook
WORKDIR /dockerbook

RUN npm run build-storybook

RUN npm run storybook
