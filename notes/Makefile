setup: install prepare db-create db-migrate

docker-setup:
	-make db-create
	make db-migrate

install:
	npm ci

prepare:
	-cp -n .env.example .env

start:
	npm start -s

start-dev:
	npx nodemon server.js

db-create:
	npx sequelize db:create

db-drop:
	npx sequelize db:drop

db-migrate:
	npx sequelize db:migrate

lint:
	npx eslint .
