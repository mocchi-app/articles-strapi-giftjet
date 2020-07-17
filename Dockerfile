FROM node:14.5

WORKDIR /usr/app

COPY ./package*.json ./

RUN npm install --production

COPY ./ ./

RUN npm run build

EXPOSE 1337

CMD [ "npm", "run", "start" ]
