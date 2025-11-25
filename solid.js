import solid from 'eslint-plugin-solid/configs/recommended';
import jsxA11y from 'eslint-plugin-jsx-a11y';

/** @type {import('eslint').Linter.Config[]} */
const config = [
  jsxA11y.flatConfigs.recommended,
  solid,
];

export default config;
