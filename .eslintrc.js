module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'prettier/@typescript-eslint',
  ],
  files: ['*.ts', '*.tsx'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  plugins: ['@typescript-eslint', 'react', 'react-native'],
  ignorePatterns: ['node_modules/**/*', 'lib/**/*'],
};
