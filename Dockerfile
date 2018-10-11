FROM node:alpine

WORKDIR '/app'

RUN npm i -g typescript

COPY server/package.json .
RUN npm install

COPY server/ .
RUN tsc
EXPOSE 80

CMD ["npm", "run", "start"]


#FROM nginx
#EXPOSE 80
#COPY --from=builder /app/build /usr/share/nginx/html