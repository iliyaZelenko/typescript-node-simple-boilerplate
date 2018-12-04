### Features

- full support for imports with `~` prefix for `src` folder (`@` causes a warning in the TypeScript)
- ECMAScript 2015, 2016, 2017, 2018 + Node.js support
- TSLint (TypeScript static analysis tool that checks code)
- ESLint (Linting utility for JavaScript)
    - ECMAScript 2018 syntax + node env
    - typescript-eslint-parser
    - `eslint-plugin-typescript` with `eslint-config-typescript`
    - `eslint-plugin-standard` with `eslint-config-standard`
    
    ... (other important plugins)
- [nodemon](https://github.com/remy/nodemon) (auto restart the server if changes occurred) + [ts-node](https://github.com/TypeStrong/ts-node). See `nodemon.json` config.
- Webpack for build with TypeScript (this is normal practice)
    - `babel-loader` with [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) (targets for node 8.0.0)
    - `webpack-node-externals` package
    - `ts-loader`
    - `webpack.BannerPlugin` to run properly from console for *nix systems
    - fix `__dirname` and `__filename` errors for node ([issue](https://github.com/webpack/webpack/issues/1599)).
- TypeScript types for node: `@types/node`
- `getSrcDir` helper function allowing you to find the `src` folder even if the script is executed from the `dist` folder.
- Sample code for how to use imports, types and classes.

### Installation

1. Clone repo.

```bash
git clone https://github.com/iliyaZelenko/typescript-node-simple-boilerplate.git
```

2. Install dependencies.

```bash
npm install # or yarn
```

All is ready.

### TypeScript Dev mode with automatic restart

```bash
npm run dev # or yarn dev
```

![](https://i.imgur.com/5HRe7XJ.png)

```bash
npm run build # or yarn build
```

### Build JS from TypeScript

![](https://i.imgur.com/UjiEKLG.png)

### Start JS Build

```bash
npm run start # or yarn start
```

![](https://i.imgur.com/fGgqQEL.png)
