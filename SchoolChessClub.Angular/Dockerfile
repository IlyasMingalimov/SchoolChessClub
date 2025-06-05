FROM node:18-alpine as build

WORKDIR /app

COPY package.json ./

RUN npm ci

COPY . .

RUN npm run build -- --configuration=production

FROM nginx:alpine

COPY --from=build /app/dist/school-chess-club.angular /usr/share/nginx/html

EXPOSE 80
