FROM node:18-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build -- --configuration=production

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/* && \
    mkdir -p /usr/share/nginx/html && \
    chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

COPY --from=build /app/dist/school-chess-club.angular/browser /usr/share/nginx/html

EXPOSE 5003

CMD ["nginx", "-g", "daemon off;"]
