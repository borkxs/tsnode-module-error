# wat ts-node

## not working

```sh
git checkout 5767a2c
npm start
```

This errors saying

```
TSError: ⨯ Unable to compile TypeScript
index.ts (1,25): Cannot find module 'lodash'. (2307)
```

The error goes away when an empty `tsconfig.json` file is present.

## working

```sh
git checkout 72ffccd
npm start
```