'use strict';

const makeSchema = require('../utils/makeSchema');

module.exports = makeSchema({
  id: '/FunctionSourceSchema',
  description:
    'Source code like `{source: "return 1 + 2"}` which the system will wrap in a function for you.',
  type: 'object',
  required: ['source'],
  properties: {
    source: {
      type: 'string',
      pattern: 'return',
      description:
        'JavaScript code for the function body. This must end with a `return` statement.',
    },
    args: {
      type: 'array',
      items: { type: 'string' },
      description:
        "Function signature. Defaults to `['z', 'bundle']` if not specified.",
    },
  },
  additionalProperties: false,
  examples: [
    { source: 'return 1 + 2' },
    { args: ['x', 'y'], source: 'return x + y;' },
  ],
  antiExamples: [
    {
      example: { source: '1 + 2' },
      reason: 'Invalid value for key: source (must end with a `return` statement)',
    },
  ],
});
