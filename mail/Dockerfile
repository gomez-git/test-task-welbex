FROM node:18

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

RUN make prepare

CMD ["npm", "start"]
