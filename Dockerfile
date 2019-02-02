FROM node:10.15-alpine

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm install

COPY . .

EXPOSE 3000

ENV NODE_ENV production
CMD ["node", "app.js"]
