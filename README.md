# @agrodt/eslint-config

Standard ESLint configuration from AgroDT Lab for TypeScript projects with
optional React support.

This package provides a base set of ESLint rules designed for use in projects
with TypeScript and (optionally) React.

## Installation

```sh
npm install --save-dev @agrodt/eslint-config
```

Important: Make sure you have the following installed:

- eslint version 9 or higher;
- typescript version 5.7 or higher;

If you don't have ESLint and TypeScript installed yet, you can install them
with:

```sh
npm install --save-dev eslint typescript
```

## Configuration

Apply this configuration in your `eslint.config.mjs. Here’s a basic example
without any rule overrides:

```js
// eslint.config.mjs
export {default} from '@agrodt/eslint-config';
```

Example with rule overrides:

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

To use React rules, install additional dependencies:

```sh
npm install --save-dev eslint-plugin-react-hooks eslint-plugin-react-refresh
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
