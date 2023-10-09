/**
 * @fileoverview A console.log should not contain alma!
 * @author Daniel Lazar
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-alma-console"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-alma-console", rule, {
  valid: [
    "console.log('this should pass');",
    "console.log('amla is spelled incorrectly so it should pass');",
  ],

  invalid: [
    {
      code: "console.log('alma');",
      output: "console.log('');",
      errors: [
        {
          message: "The conosle.log() should not include alma.",
          type: "Literal",
        },
      ],
    },
    {
      code: "console.log('AlMa nagy betukkel');",
      output: "console.log(' nagy betukkel');",
      errors: [
        {
          message: "The conosle.log() should not include alma.",
          type: "Literal",
        },
      ],
    },
    {
      code: "console.log('aaaaalmaaaaaa');",
      output: "console.log('aaaaaaaaa');",
      errors: [
        {
          message: "The conosle.log() should not include alma.",
          type: "Literal",
        },
      ],
    },
  ],
});
