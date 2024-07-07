FROM node:18
WORKDIR /app
RUN npm install --loglevel verbose
EXPOSE 3000
CMD ["node", "index.js"]
