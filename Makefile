start-dev:
	docker compose up -d

stop-dev:
	docker compose stop

clean-dev:
	docker compose down