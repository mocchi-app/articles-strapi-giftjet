FROM node:14.5

WORKDIR /usr/app

COPY ./package*.json ./

RUN yarn install --production

COPY ./ ./

RUN yarn run build

RUN npm rebuild

EXPOSE 1337

CMD [ "yarn", "run", "start" ]
