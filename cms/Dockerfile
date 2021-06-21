FROM node:14.15.1-alpine

ENV PORT 1337
ENV HOST 0.0.0.0
ENV NODE_ENV production

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN yarn install

COPY . /usr/src/app
RUN yarn build
EXPOSE 1337

CMD [ "yarn", "start" ]
