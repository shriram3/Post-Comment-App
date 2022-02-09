# Base image
FROM node:16-alpine

#Setting up work directory
WORKDIR /app

#Copying and installing dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Startup Command
CMD ["npm","start"]