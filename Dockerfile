# BUILD ANGULAR APP
FROM node:18.15-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --omit=dev

# NGINX SERVER
FROM nginx:1.23.4-alpine

COPY --from=build /app/dist/devops-frontend /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
