FROM node:15-alpine AS builder

ENV NODE_ENV production

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

ENV NODE_PATH=/app/node_modules

COPY . /app/

EXPOSE 3000

RUN npm run build

FROM nginx:1.15

WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf *

# Copy static assets from builder stage
COPY --from=builder /app/build /usr/share/nginx/html/
# copy nginx config in the path
COPY --from=builder /app/nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

# Entry point when Docker container has started
ENTRYPOINT ["nginx", "-g", "daemon off;"]
