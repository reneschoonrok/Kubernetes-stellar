FROM alpine

RUN addgroup -S appgroup && adduser -S appuser -G appgroup && apk add --update nodejs
RUN id -u appuser

RUN mkdir -p /usr/src/app/node_modules

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY public ./public/
COPY router ./router/
COPY views ./views/
COPY node_modules ./node_modules/

USER 100
EXPOSE 8080
CMD [ "node", "./router/server.js" ]