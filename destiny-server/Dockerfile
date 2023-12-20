
FROM node:21-alpine3.18

RUN npm install -g nodemon

WORKDIR /destiny-server

COPY package*.json ./

RUN npm install

COPY  src ./src

CMD ["npm", "run", "start"]



