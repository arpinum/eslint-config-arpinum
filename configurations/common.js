'use strict';

module.exports = {
  'extends': 'eslint:recommended',

  'rules': {
    //
    // Possible errors (http://eslint.org/docs/rules/#possible-errors)
    'no-unexpected-multiline': 2,
    'no-extra-parens': 2,
    //
    // Best practices (http://eslint.org/docs/rules/#best-practices)
    'block-scoped-var': 2,
    'consistent-return': 2,
    'curly': 2,
    'default-case': 2,
    'dot-notation': 2,
    'dot-location': [
      2,
      'property'
    ],
    'eqeqeq': 2,
    'no-else-return': 2,
    'no-eq-null': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-floating-decimal': 2,
    'no-implicit-coercion': 2,
    'no-invalid-this': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-multi-spaces': 2,
    'no-native-reassign': 2,
    'no-new-wrappers': 2,
    'no-new': 2,
    'no-param-reassign': 2,
    'no-return-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    //'no-unused-expressions': 2, // disabled due to chai
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'yoda': 2,
    //
    // Variables (http://eslint.org/docs/rules/#variables)
    'no-delete-var': 2,
    'no-shadow-restricted-names': 2,
    'no-undef': 2,
    'no-use-before-define': [
      2,
      'nofunc'
    ],
    //
    // Style (http://eslint.org/docs/rules/#stylistic-issues)
    'eol-last': 2,
    'indent': [
      2,
      2
    ],
    'linebreak-style': [
      2,
      'unix'
    ],
    'max-len': [
      2,
      120,
      4
    ],
    'new-cap': 2,
    'no-multiple-empty-lines': [
      2,
      {
        'max': 1
      }
    ],
    'no-nested-ternary': 2,
    'no-trailing-spaces': 2,
    'no-unneeded-ternary': 2,
    'quotes': [
      2,
      'single'
    ],
    'semi': [
      2,
      'always'
    ],
    //
    // Relax
    'no-console': 0
  },

  'env': {
    'mocha': true
  }
};