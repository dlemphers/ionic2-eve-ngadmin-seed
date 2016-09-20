build-db-dockerimage:
	docker build --rm -t ionic-eve-seed:db -f db/docker/dockerfile db

build-api-dockerimage:
	docker build --rm -t ionic-eve-seed:api -f api/docker/dockerfile api

build-admin-dockerimage:
	docker build --rm -t ionic-eve-seed:admin -f admin/docker/dockerfile admin

build-ionic2-dockerimage:
	docker build --rm -t ionic-eve-seed:ionic2 -f mobile-client/docker/ionic2 mobile-client/docker

build-dockerimages: build-db-dockerimage build-api-dockerimage build-admin-dockerimage build-ionic2-dockerimage

up-dev:
	xhost +local:docker
	-docker-compose -f dev.docker-compose.yml down
	docker-compose -f dev.docker-compose.yml up

enter-container:
	docker-compose -f dev.docker-compose.yml exec $(container) bash

print-endpoints:
	@echo "\n********* Admin endpoint *********"
	@echo "http://$$(docker-compose -f dev.docker-compose.yml port admin 8000)\n"
	@echo "********* API endpoint *********"
	@echo "http://$$(docker-compose -f dev.docker-compose.yml port api 8888)\n"
