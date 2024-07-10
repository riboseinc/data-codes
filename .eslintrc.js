var path = require('path');

var rulesForJs = {
  'quotes' : [
    'warn',
    'single',
    { avoidEscape : true },
  ],
  'require-jsdoc' : ['off'],
  'valid-jsdoc'   : ['off'],
  'indent'        : [
    'error',
    2,
    {
      SwitchCase         : 1,
      VariableDeclarator : {
        'var'   : 2,
        'let'   : 2,
        'const' : 3,
      },
      ignoredNodes : ['ConditionalExpression'],
    },
  ],
  'key-spacing' : [
    'error',
    {
      singleLine : {
        beforeColon : true,
        afterColon  : true,
      },
      multiLine : {
        beforeColon : true,
        afterColon  : true,
        align       : 'colon',
      },
    },
  ],
  'keyword-spacing' : [
    'error',
    {
      before : true,
      after  : true,
    },
  ],
  'spaced-comment' : [
    'error',
    'always',
    {
      exceptions : ['-', '+', '=', '*'],
      markers    : ['=', '*/', '/*', 'X', '//'],
    },
  ],
  'no-multi-spaces' : [
    1,
    {
      exceptions : {
        VariableDeclarator : true,
      },
    },
  ],
  'no-cond-assign' : [2, 'except-parens'],
  // "no-redeclare"   : [
  //   "error",
  //   {
  //     builtinGlobals : true,
  //   },
  // ],
  'no-redeclare'   : 'off',
  'dot-notation'   : [
    2,
    {
      allowKeywords : true,
    },
  ],
  'eqeqeq'      : [2, 'smart'],
  'no-plusplus' : [
    'warn',
    {
      allowForLoopAfterthoughts : true,
    },
  ],
  'one-var' : [
    'off', // Enable once tests are set up
    'consecutive',
  ],
  'object-curly-spacing' : [
    'error',
    'always',
    {
      objectsInObjects : false,
      arraysInObjects  : false,
    },
  ],
  'quote-props' : [
    'error',
    'consistent-as-needed',
    {
      keywords : true,
    },
  ],
  'camelcase' : ['warn'],
  'max-len'   : ['warn', {
    code : 140,
  }],
  'new-cap' : ['warn'],

  'key-spacing' : [
    'error',
    {
      singleLine : {
        beforeColon : true,
        afterColon  : true,
      },
      multiLine : {
        beforeColon : true,
        afterColon  : true,
        align       : 'colon',
      },
    },
  ],
  'no-empty-function' : 'off',
  'no-unused-vars'    : 'off',
};

var rulesForTypescript = {
  '@typescript-eslint/no-redeclare'                            : ['error'],
  '@typescript-eslint/no-empty-function'                       : 'off',
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing' : 'warn',
  '@typescript-eslint/no-unused-vars'                          : ['warn', {
    varsIgnorePattern : '^_',
    argsIgnorePattern : '^_' ,
  }],
};

var rules = Object.assign(
  {},
  rulesForJs,
  rulesForTypescript,
);

module.exports = {
  'root' : true,
  'env'  : {
    // "jest/globals" : true,
  },
  'extends' : [
    // "plugin:prettier/recommended",
  ],
  'rules'     : rules,
  'overrides' : [
    {
      'files'   : ['*.ts', '*.tsx'],
      'extends' : [
        'eslint:recommended',
        'plugin:@typescript-eslint/strict',
        // "plugin:prettier/recommended",
      ],
      'parser'        : '@typescript-eslint/parser',
      'parserOptions' : {
        project : path.join(__dirname, 'tsconfig.json'),
      },
      'settings' : {
        'import/resolver' : {
          typescript : {}
        }
      },
      'rules' : rules,
    },
    {
      files : ['*.js'],
      rules : rules,
    },
    {
      'files'   : ['*.json', '*.json5', '*.jsonc'],
      'extends' : [
        'plugin:jsonc/recommended-with-jsonc',
      ],
      'parser' : 'jsonc-eslint-parser',
    },
    {
      'files'   : ['spec/**'],
      'plugins' : ['jest'],
      'extends' : ['plugin:jest/recommended', 'plugin:jest/style'],
      'rules'   : {
        'jest/prefer-expect-assertions' : 'off',
      },
    },
  ],
  'rules' : rules,
};
