module.exports = {
  env: {
    browser: true,
    es2021: true,
    'react-native/react-native': true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime'
  ],
  plugins: ['prettier', 'react', 'react-hooks', 'react-native'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    parserOptions: {
      ecmaVersion: 12,
      ecmaFeatures: {
        experimentalObjectRestSpread: true,
        impliedStrict: true,
        classes: true,
        jsx: true
      },
      sourceType: 'module'
    }
  },
  rules: {
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'function-declaration'
      }
    ],
    'no-use-before-define': 1,
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx']
      }
    ],
    'no-shadow': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'no-debugger': 0,
    'no-alert': 0,
    'no-unused-vars': 1,
    'prefer-const': [
      'error',
      {
        destructuring: 'all'
      }
    ],
    'arrow-body-style': [2, 'as-needed'],
    'no-unused-expressions': [
      2,
      {
        allowTaggedTemplates: true
      }
    ],
    'no-param-reassign': [
      2,
      {
        props: false
      }
    ],
    'no-console': 0,
    import: 0,
    'func-names': 0,
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    'max-len': 0,
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    'react/display-name': 1,
    'react/no-array-index-key': 0,
    'react/react-in-jsx-scope': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-unescaped-entities': 0,
    'jsx-a11y/accessible-emoji': 0,
    'react/require-default-props': 0,
    radix: 0,
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'none',
        singleQuote: true,
        printWidth: 100
      }
    ],
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref']
      }
    ],
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': 'error',
    'react/no-arrow-function-lifecycle': 0,
    'react/no-invalid-html-attribute': 0,
    'react/no-unused-class-component-methods': 0,
    'global-require': 0,
    'react/jsx-uses-react': 1,
    'react/no-unstable-nested-components': 0
  }
};
