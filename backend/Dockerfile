FROM node:buster

WORKDIR /app
COPY package*json ./
RUN npm install
COPY . .

CMD ["npm", "run", "dev"]