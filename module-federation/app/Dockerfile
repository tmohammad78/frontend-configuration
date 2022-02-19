FROM node:14-alpine

WORKDIR /app

COPY package.json .

RUN npm install 

ENV NODE_PATH=/app/node_modules

COPY . /app/

EXPOSE 8082

CMD [ "npm","run","serve" ]
