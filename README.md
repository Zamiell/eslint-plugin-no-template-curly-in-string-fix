# eslint-plugin-no-template-curly-in-string-fix

## What is this?

This is a replacement for the ESLint [no-template-curly-in-string rule](https://eslint.org/docs/rules/no-template-curly-in-string) that allows automatic fixing.

<br />

## How do I use it?

* `npm install --save-dev eslint-plugin-no-template-curly-in-string-fix`
* Add  `"plugin:no-template-curly-in-string-fix/recommended"` to the `extends` section of your `.eslintrc.js` file.

<br />

## Why should I use this?

The ESLint [no-template-curly-in-string rule](https://eslint.org/docs/rules/no-template-curly-in-string) will throw an error if you use `"${foo}"`, complaining that you should convert it to ``${foo}``. This is a fantastic rule, as the use of the former is almost always a bug.

However, when using the `--fix` flag, ESLint will not automatically fix this for you, unlike most other rules. This is probably because ESLint does not want to break code where the programmer did this intentionally.

To get around this, use this plugin to make this rule automatically `--fix`able. Doing so will save you a ton of time.

<br />

## What rules does this plugin provide?

It only provides one rule: `"no-template-curly-in-string-fix/no-template-curly-in-string"`

<br />

## How did you make this?

* I copied [the ESLint source code](https://github.com/eslint/eslint/blob/master/lib/rules/no-template-curly-in-string.js) into a new rule plugin.
* I added a `fix()` function.

<br />
