"use strict";

module.exports = {
  extends: "stylelint-config-sass-guidelines",
  plugins: [
    "stylelint-scss",
    "stylelint-selector-bem-pattern",
  ],
  rules: {
    'selector-class-pattern': "",
    'max-nesting-depth': 3,
    'order/properties-alphabetical-order': null,
    'selector-no-qualifying-type': [true, {
      ignore: ["attribute"],
    }],
    'scss/selector-no-redundant-nesting-selector': true,
    'scss/at-extend-no-missing-placeholder': true,
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/at-mixin-argumentless-call-parentheses': 'never',
    'plugin/selector-bem-pattern': {
      'preset': 'bem',
      'componentName': '(([a-z0-9]+(?!-$)-?)+)',
      componentSelectors: {
        initial: "\\.{componentName}(((__|--)(([a-z0-9\\[\\]'=]+(?!-$)-?)+))+)?$",
      },
    },
  },
};