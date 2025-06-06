FROM node:18-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY angular.json .
COPY tsconfig.json .
COPY src/ ./src/

RUN npm run build -- --configuration=production

FROM nginx:alpine

EXPOSE 5003
