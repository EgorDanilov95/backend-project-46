install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run
lint:
	npx eslint .
test:
	NODE_OPTIONS=--experimental-vm-modules npx jest
test-coverage:
	NODE_OPTIONS=--experimental-vm-modules npx jest --coverage
