'use strict';

module.exports = {
  'rules': {
    'eol-last': 2,
    'indent': [
      2,
      2,
      {
        'SwitchCase': 1,
        'FunctionDeclaration': {'parameters': 'first'},
        'FunctionExpression': {'parameters': 'first'}
      }
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
    ]
  }
};
