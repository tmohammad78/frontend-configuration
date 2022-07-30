FROM nginx:1.22.0

WORKDIR /usr/share/nginx/html
# WORKDIR /etc/nginx/conf

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./index.html /usr/share/nginx/html/index.html
COPY ./conf/mime.types /etc/nginx/mime.types
COPY ./error /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
