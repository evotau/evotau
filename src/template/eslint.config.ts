// eslint.config.ts
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {

    'no-console': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'warn',
  },
  ignorePatterns: [
    'dist/*',
  ],
};
