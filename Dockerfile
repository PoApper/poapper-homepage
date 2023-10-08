FROM node:16.20-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .
COPY .env.production .env

RUN npm run build

# serving stage
FROM nginx

EXPOSE 80

COPY --from=builder /usr/src/app/public /usr/share/nginx/html
