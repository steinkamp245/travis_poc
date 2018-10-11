FROM node:alpine

WORKDIR '/app'

RUN npm i -g typescript

COPY server/package.json .
RUN npm install

COPY server/ .
RUN tsc
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html