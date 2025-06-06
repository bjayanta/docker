FROM node:22-alpine3.21

WORKDIR /app

RUN npm install nodemon -g

COPY . .

RUN npm install

EXPOSE 5000

CMD [ "npm", "run", "dev" ]