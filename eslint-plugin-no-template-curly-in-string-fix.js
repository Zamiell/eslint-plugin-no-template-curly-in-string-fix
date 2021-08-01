/**
 * @fileoverview Warn when using template string syntax in regular strings
 * @author Jeroen Engels
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    configs: {
        recommended: {
            plugins: ["no-template-curly-in-string-fix"],

            rules: {
                "no-template-curly-in-string": "off",
                "no-template-curly-in-string-fix/no-template-curly-in-string": "warn",
            },
        },
    },

    rules: {
        "no-template-curly-in-string": {
            create(context) {
                const regex = /\$\{[^}]+\}/u;
    
                return {
                    Literal(node) {
                        if (typeof node.value === "string" && regex.test(node.value)) {
                            context.report({
                                node,
                                messageId: "unexpectedTemplateExpression",
                                fix(fixer) {
                                    return fixer.replaceText(node, "`" + node.value + "`");
                                },
                            });
                        }
                    }
                };
            },

            meta: {
                type: "suggestion",

                docs: {
                    description: "disallow template literal placeholder syntax in regular strings",
                    category: "Possible Errors",
                    recommended: false,
                    url: "https://eslint.org/docs/rules/no-template-curly-in-string"
                },

                schema: [],

                fixable: "code",

                messages: {
                    unexpectedTemplateExpression: "Unexpected template string expression."
                }
            },
        },
    },
};
