install:
	npm install

lint:
	npx eslint . --ext js,jsx
	npx stylelint **/*.scss

build:
	npm run build

dev-build:
	npm run dev-build

prod:
	npm run build & npm run app

start:
	npm run db & npm run development

test:
	npm run test

test-cov:
	npm run test-cov

.PHONY: test