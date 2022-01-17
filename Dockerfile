# base image
FROM node:14.18.1-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN yarn install
RUN yarn add @vue/cli@4.5.13 -g

# start app
CMD ["yarn", "run", "serve"]
