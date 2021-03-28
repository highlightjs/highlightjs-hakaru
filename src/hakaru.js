/*
Language: Hakaru
Author: Rob Zinkov <rob@zinkov.com>
Description: language definition for Hakaru
Category: scientific
*/

module.exports = function (hljs) {
  return {
    contains: [
      hljs.HASH_COMMENT_MODE, {
        begin: hljs.UNDERSCORE_IDENT_RE,
        keywords: {
          $pattern: hljs.UNDERSCORE_IDENT_RE,
          keyword:
            'import data match if else array def fn plate chain return' +
            'expect observe disintegrate integrate summate from of to' +
            'nat int prob real array pair maybe either' +
            'normal bern uniform gamma beta categorical poisson' +
            'dirac weight factor counting lebesgue',
          literal:
            'true false'
        },
        relevance: 0
      },
      {
        // explicit integer
        className: 'number',
        begin: "\\d+(?:[eE][+\\-]?\\d*)?L\\b",
        relevance: 0
      },
      {
        // number with trailing decimal
        className: 'number',
        begin: "\\d+\\.(?!\\d)(?:i\\b)?",
        relevance: 0
      },
      {
        // number
        className: 'number',
        begin: "\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",
        relevance: 0
      },
      {
        // number with leading decimal
        className: 'number',
        begin: "\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b",
        relevance: 0
      }
    ]
  };
}
