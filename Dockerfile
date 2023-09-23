FROM node:16.20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --ignore-scripts

COPY . .

RUN npm run build

EXPOSE 4000

CMD ["gatsby", "serve"]
