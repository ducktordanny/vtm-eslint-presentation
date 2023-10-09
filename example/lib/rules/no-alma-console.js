/**
 * @fileoverview A console.log should not contain alma!
 * @author Daniel Lazar
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "suggestion", // `problem`, `suggestion`, or `layout`
    docs: {
      description: "A console.log should not contain alma!",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    messages: {
      shouldNotContainAlma: "The conosle.log() should not include alma.",
    },
    fixable: "code", // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    return {
      // visitor functions for different types of nodes
      ExpressionStatement(node) {
        if (node?.expression?.callee?.object?.name !== "console") return;
        if (node?.expression?.callee?.property?.name !== "log") return;

        const firstArgument = node.expression.arguments?.[0];
        if (!firstArgument) return;
        if (!firstArgument.value) return;
        if (typeof firstArgument.value !== "string") return;

        if (firstArgument.value.toLowerCase().includes("alma")) {
          context.report({
            node: firstArgument,
            messageId: "shouldNotContainAlma",
            fix(fixer) {
              const regex = new RegExp("alma", "gi");
              const newText = firstArgument.raw.replace(regex, "");
              return fixer.replaceText(firstArgument, newText);
            },
          });
        }
        return;
      },
    };
  },
};
