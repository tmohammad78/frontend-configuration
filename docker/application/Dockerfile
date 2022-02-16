FROM node:15-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

ENV NODE_PATH=/app/node_modules

COPY . /app/

EXPOSE 3000

CMD ["npm","start"]

