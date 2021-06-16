# Webpack Demo

This repo is inteded as an intro to Webpack. It includes a very basic Typescript React app with a custom webpack config. 

There are separate configs for dev (`webpack.config.dev.js`) and prod (`webpack.config.prod.js`) just for the sake of readability. In the real world, these are often combined into a single file that is composed/configured using runtime environment variables (e.g. `process.env.NODE_ENV`).

## Running in dev mode

To run the webpack dev server, run:

```
yarn start
```

## Building the app in production mode

To build the app, run:

```
yarn build
```

## Serving the production app

To serve the compiled app from `/build`, run:

```
yarn serve
```

(You can run `yarn build && yarn serve` as one step, if you so choose.)