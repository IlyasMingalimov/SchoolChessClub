# Stage 1: Build
FROM node:18-alpine AS build

WORKDIR /app

# 1.
COPY package.json package-lock.json ./

# 2.
RUN npm ci

# 3.
COPY angular.json .
COPY tsconfig.json .
COPY src/ ./src/
COPY projects/ ./projects/  

# 4. 
RUN npm run build -- --configuration=production

# Stage 2: Serve
FROM nginx:alpine

# 5.
COPY --from=build /app/dist/school-chess-club.angular /usr/share/nginx/html

# 6.
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
