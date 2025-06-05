FROM node:18-alpine as build

WORKDIR /app

COPY package.json package-lock.json ./

RUN nmp ci

COPY ...

RUN npm run build -- --configuration=production

FROM nginx:alpine

COPY --from=build /app/dist/angularschoolchessclub /usr/share/nginx/html

EXPOSE 80
