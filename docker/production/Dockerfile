FROM node:20-alpine

WORKDIR /src/app

COPY package*.json .

RUN npm install --only=production

COPY . .


RUN npm run dist

EXPOSE 8081

CMD [ "npm", "start" ]