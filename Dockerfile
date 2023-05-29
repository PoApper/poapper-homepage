# Buile Step
FROM node:16.14-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --ignore-scripts --legacy-peer-deps

COPY . .

RUN npm run build
RUN npm prune --production

# Run Step
FROM node:16.14-alpine AS runner

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package*.json ./

EXPOSE 4000

CMD ["gatsby", "serve"]
