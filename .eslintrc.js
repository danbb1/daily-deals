module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'airbnb-base',
    'airbnb-typescript',
    'plugin:prettier/recommended',
    'plugin:mocha/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier', 'mocha'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'react/jsx-filename-extension': 'off',
  },
};
