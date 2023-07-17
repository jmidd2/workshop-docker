FROM node:20-alpine3.18
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]