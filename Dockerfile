ARG NODE_VERSION=20.13.1

FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY . .

RUN npm install

WORKDIR /app/frontend

RUN npm install

WORKDIR /app/backend

RUN npm install

WORKDIR /app

CMD ["npm", "run", "dev"]
