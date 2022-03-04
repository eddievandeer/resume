FROM node:14

WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:latest

ENV AC_NGINX_PORT=8888 AC_NGINX_DOMAIN=localhost
COPY /config/nginx/default.conf.template /etc/nginx/templates/default.conf.template
COPY --from=0 /app/dist /usr/share/nginx/html