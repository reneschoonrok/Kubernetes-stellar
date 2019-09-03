FROM node:10-alpine

RUN mkdir -p /usr/src/app/node_modules && chown -R node:node /usr/src/app

# Create app directory
WORKDIR /usr/src/app

USER 1000

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY public ./public/
COPY router ./router/
COPY views ./views/

RUN npm i ejs --production
RUN npm i kubernetes-client --production
RUN npm i express --production
EXPOSE 8080
CMD [ "node", "./router/server.js" ]