# @agrodt/eslint-config

Standard ESLint configuration from AgroDT Lab for TypeScript, React, and Next.js projects.

This package provides a base set of ESLint rules designed for use in projects with TypeScript and React.

## Installation

```bash
npm install --save-dev @agrodt/eslint-config
```

Important: Make sure you have the following installed:

- eslint version 9 or higher;

- typescript version 5.7 or higher;

If you don't have ESLint and TypeScript installed yet, you can install them with:

```bash
npm install --save-dev eslint typescript
```

## Configuration
Apply the configuration in your eslint.config.js. Here is a basic example without overriding any rules:

```bash
export {default} from '@agrodt/eslint-config';
```


Example with rule overrides:

```bash
import agrodtConfig from '@agrodt/eslint-config';

/** @type {import('eslint').Linter.Config[]} */
const config = [
  ...agrodtConfig,
  {rules: {'react-refresh/only-export-components': 'off'}},
];

export default config;
```