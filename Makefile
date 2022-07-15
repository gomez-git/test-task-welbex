prepare:
	-cp -n .env.example .env

docker-up:
	docker compose up
