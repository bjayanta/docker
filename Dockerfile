FROM node:22-alpine3.21

WORKDIR /app

COPY . .

CMD [ "node", "app.js" ]