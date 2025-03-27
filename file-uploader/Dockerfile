ARG NODE_VERSION=20.13.1

FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

# RUN npm install

# Use npm ci when you have not already run npm install
RUN npm ci

COPY . .

# CMD npm run dev
CMD ["sh", "-c", "npm run db:deploy && npm run dev"]

