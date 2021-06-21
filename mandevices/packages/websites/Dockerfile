FROM node:14.15.1-alpine as builder

WORKDIR /app

COPY ./package.json ./package.json
RUN yarn

COPY ./public ./public
COPY ./src ./src
COPY ./tsconfig.json ./tsconfig.json
COPY ./codegen.yml ./codegen.yml
COPY ./.eslintrc.js ./.eslintrc.js
COPY ./.eslintignore ./.eslintignore
COPY ./.prettierrc ./.prettierrc
COPY ./babel-plugin-macros.config.js ./babel-plugin-macros.config.js

RUN yarn build

FROM nginx:1.19.6

COPY ./proxy/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/build /usr/share/nginx/html