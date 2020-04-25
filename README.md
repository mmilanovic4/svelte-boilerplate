<p align="center">
	<img src="static/logo.png" alt="Svelte boilerplate">
</p>

# Overview

A simple boilerplate for creating Svelte applications using Webpack.

## Development

```
# First tab
npm run build:dev

# Second tab
npm run start:dev
```

## Production

```
npm run build:prod
```

Differences between PROD and DEV build:
-  Production files are minimized using `terser-webpack-plugin` (JS files) and `optimize-css-assets-webpack-plugin` (CSS files)
- Webpack is started in watch mode in DEV build
