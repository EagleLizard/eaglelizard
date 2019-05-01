
# React Webpack Sass

## Overview
This is a base project for webpack projects set up to use Babel 7, React, and Sass.

The motivation is to create a less cumbersome way of initializing this type of project than `react-create-app`.

## Installation

Must have Node JS v10.x or greater installed (recommended to use `nvm` for versioning). A yarn is fine too.

Install dependencies:
```
$ npm i
```

## Development

To run the dev server and open a browser dev tab, run:
```
$ npm start
```

## Production

To build, run:
```
$ npm run build
```

The production assets will be added to the `/dist` directory.

## Troubleshooting

If you get errors from `node-sass`, `node-gyp`, or sass-related dependencies run:
```
$ rm package-lock.json && rm yarn.lock && rm -rf node_modules && npm i
```

If the problems persist, run:
```
$ npm rebuild
```
