FROM node:alpine

WORKDIR '/app'

RUN npm i -g typescript

COPY server/package.json .
RUN npm install

COPY server/ .
RUN tsc
EXPOSE 80

CMD ["npm", "run", "start"]