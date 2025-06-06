FROM node:22-alpine3.21

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 5000

CMD [ "node", "app.js" ]