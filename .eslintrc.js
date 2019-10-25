const path = require('path');

module.exports = {
  env: {
    browser: true,
    node: true,
    mocha: true,
    jest: true,
  },
  parser: 'babel-eslint',
  extends: [
    'airbnb/base',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
  ],
  rules: {
    'arrow-body-style': 0,
    'arrow-parens': 'off',
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    'comma-dangle': ['error', 'always-multiline'],
    'dot-notation': 'error',
    'import/extensions': ['error', 'never'],
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 0,
    'import/prefer-default-export': 'off',
    indent: ['error', 2, { SwitchCase: 1, MemberExpression: 1 }],
    'no-console': 'off',
    'no-use-before-define': 'error',
    'no-underscore-dangle': 'off',
    'object-curly-newline': [
      'error',
      {
        multiline: true,
        minProperties: 4,
      },
    ],
    'object-curly-spacing': ['error', 'always', { objectsInObjects: false }],
    'object-property-newline': [
      'error',
      {
        allowMultiplePropertiesPerLine: false,
      },
    ],
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    radix: ['error', 'as-needed'],
    'react/jsx-filename-extension': 'off',
    'react/no-unused-prop-types': 'off',
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 1,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
            modules: [
              path.resolve(__dirname, '../../../node_modules'),
              path.resolve(__dirname, '../../assets'),
              path.resolve(__dirname, './lib'),
              path.resolve(__dirname),
            ],
            alias: { '@src': path.resolve('app/javascript/src') },
          },
        },
      },
    },
    react: {
      createClass: "createReactClass", // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: "React",  // Pragma to use, default to "React"
      version: "detect", // React version. "detect" automatically picks the version you have installed.
    },
  },
  globals: {
    window: true,
    document: true,
  },
  plugins: ['react', 'class-property'],
};
