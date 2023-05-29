FROM node:16.14-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --ignore-scripts --legacy-peer-deps

COPY . .

RUN npm run build

EXPOSE 4000

CMD ["gatsby", "serve"]
