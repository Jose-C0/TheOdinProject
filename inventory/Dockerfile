ARG NODE_VERSION=20.13.1

FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD npm start
