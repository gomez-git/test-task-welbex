FROM node:18

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

RUN  mv .env.example .env

CMD ["npm", "start"]
