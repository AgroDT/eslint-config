# @agrodt/eslint-config

[![npm version](https://img.shields.io/npm/v/@agrodt/eslint-config.svg)](https://www.npmjs.com/package/@agrodt/eslint-config)
[![npm downloads](https://img.shields.io/npm/dm/@agrodt/eslint-config.svg)](https://www.npmjs.com/package/@agrodt/eslint-config)
![License](https://img.shields.io/npm/l/@agrodt/eslint-config.svg)

Standard ESLint configuration from AgroDT Lab for TypeScript projects with
optional support for React and Solid.

## Installation

```sh
npm install --save-dev @agrodt/eslint-config
```

> [!NOTE]
> Make sure you have the following installed:
>
> - eslint version 9 or higher
> - typescript version 5.7 or higher

If you don't have ESLint and TypeScript installed yet, you can install them
with:

```sh
npm install --save-dev eslint typescript
```

## Usage

Add the following to your `eslint.config.js` or `eslint.config.mjs`.

Basic setup:

```js
// eslint.config.mjs
export {default} from '@agrodt/eslint-config';
```

With custom rule overrides:

```js
// eslint.config.mjs
import agrodtConfig from '@agrodt/eslint-config';

/** @type {import('eslint').Linter.Config[]} */
const config = [
  ...agrodtConfig,
  {rules: {'@typescript-eslint/no-explicit-any': 'error'}},
];

export default config;
```

## React Support

Install the required additional dependencies:

```sh
npm install --save-dev eslint-plugin-react-hooks eslint-plugin-react-refresh eslint-plugin-jsx-a11y
```

And add the configuration:

```js
// eslint.config.mjs
import agrodtConfig from '@agrodt/eslint-config';
import agrodtReactConfig from '@agrodt/eslint-config/react';

/** @type {import('eslint').Linter.Config[]} */
const config = [
  ...agrodtConfig,
  ...agrodtReactConfig,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      'react-refresh/only-export-components': 'off',
    },
  },
];

export default config;
```

## Solid Support

Install the required additional dependencies:

```sh
npm install --save-dev eslint-plugin-solid eslint-plugin-jsx-a11y
```

And add the configuration:

```js
// eslint.config.mjs
import agrodtConfig from '@agrodt/eslint-config';
import agrodtSolidConfig from '@agrodt/eslint-config/solid';

/** @type {import('eslint').Linter.Config[]} */
const config = [
  ...agrodtConfig,
  ...agrodtSolidConfig,
];

export default config;
```
