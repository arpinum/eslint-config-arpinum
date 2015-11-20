'use strict';

module.exports = {
  'extends': 'arpinum/configurations/common',
  'rules': {
    'strict': [
      2,
      'function'
    ]
  },
  'env': {
    'browser': true
  },
  'globals': {
    '_': false,
    'sinon': false,
    'should': false
  }
};
