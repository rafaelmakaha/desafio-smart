FROM node:12-alpine

WORKDIR /app

RUN \
  echo "UPDATING SYSTEM" && \
  apk update && \
  apk add --update

COPY package.json /app/

# COPY package-lock.json /app/

RUN npm i react-scripts

RUN npm i

COPY . /app/

EXPOSE 3000

CMD ["npm", "start"]