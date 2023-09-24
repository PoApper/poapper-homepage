FROM node:16.20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .
COPY .env.production .env

RUN npm run build

EXPOSE 9000

CMD ["npm", "run", "serve"]
