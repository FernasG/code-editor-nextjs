ARG NODE_VERSION=18.15.0
ARG NPM_VERSION=9.6.2

FROM docker.io/node:${NODE_VERSION}

ARG NPM_VERSION
ENV NPM_VERSION ${NPM_VERSION}

RUN npm install --location=global npm@${NPM_VERSION}

WORKDIR /app

COPY package*.json /

RUN npm install

EXPOSE 3000

COPY . .

CMD ["npm", "run", "dev"]