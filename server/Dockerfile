# Build Stage
FROM node:19.0.0-alpine3.16 as build

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

# Run Stage
FROM node:19.0.0-alpine3.16 as main

COPY --from=build /app /

CMD ["node", "server.js"]