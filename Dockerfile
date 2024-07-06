FROM node:18
WORKDIR /app
COPY package.json ./
RUN npm install --loglevel verbose
EXPOSE 3000
