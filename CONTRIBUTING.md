# Contribution guide

## Environment setup

Please clone this repo to a hexo dir. This means you clone this repo into `yourHexoDir/themes/thisRepo`. This ensure the `purgecss` in the `webpack` works successfully. To the sake of your time, your can use [hexo-cheatsheets-demo](https://github.com/glazec/hexo-cheatsheets-demo) as your hexo dir.

## Lint
Please run `npm run eslint` and `npm run styleling` for linting.

## Commit

Our project is [commitizen friendly](http://commitizen.github.io/cz-cli/). To make github commit, please run `npm run commit`.

## Build

To bundle the sass,scss file, please run `npm run build`. Then it will compile the sass and auto purge it depend on the html in `yourHexoDir/public/`.
