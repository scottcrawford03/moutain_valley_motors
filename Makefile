server:
	foreman start -f Procfile.dev -p 3000

console:
	docker-compose run web rails console

db_setup:
	docker-compose run web rake db:setup

db_migrate:
	docker-compose run web rake db:migrate

build:
	docker-compose up --build

build_web:
	docker-compose build web
