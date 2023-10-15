FROM node:20-alpine

RUN yarn global add nodemon

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 8080

CMD ["yarn", "run", "dev"]
