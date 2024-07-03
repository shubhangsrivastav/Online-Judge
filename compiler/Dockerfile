FROM node:18-alpine
WORKDIR /compiler
RUN apk update && apk add --no-cache g++
COPY package.json .
RUN npm i
COPY . .
EXPOSE 8080
CMD [ "node","index.js" ]

