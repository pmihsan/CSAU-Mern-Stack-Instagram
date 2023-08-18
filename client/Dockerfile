# Build Stage
FROM node:19.0.0-alpine3.16 as build

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

# Run Stage
FROM nginx:alpine as main

# Copying built assets from build
COPY --from=build /app/build /usr/share/nginx/html

# Copying our nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]