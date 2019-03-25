module.exports = {
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 9
  },
  "globals": {
    "PubSub": "readonly",
    "State": "readonly"
  },
  "env": {
    "browser": true,
    "es6": true,
    "jquery": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "comma-dangle": ["error", "always-multiline"],
    "no-cond-assign": ["error", "always"],
    "no-console": "off",
    "no-debugger": "off",
    "no-fallthrough": "off",
    "consistent-return": "error",
    "curly": ["error", "multi-line"],
    "dot-notation": "error",
    "eqeqeq": ["error", "smart"],
    "no-alert": "error",
    "no-else-return": "error",
    "no-eval": "error",
    "no-floating-decimal": "error",
    "no-multi-str": "error",
    "no-param-reassign": ["error", { "props": false }],
    "no-process-env": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "vars-on-top": "error",
    "wrap-iife": ["error", "any"],
    "yoda": ["error", "never"],
    "init-declarations": ["error", "always"],
    "array-bracket-spacing": ["error", "never", {
      "singleValue": true,
      "objectsInArrays": false,
      "arraysInArrays": false
    }],
    "brace-style": ["error", "1tbs"],
    "camelcase": ["error", { "properties": "always" }],
    "computed-property-spacing": ["error", "never"],
    "consistent-this": ["error", "self"],
    "func-names": ["error", "as-needed"],
    "func-style": ["error", "expression", { "allowArrowFunctions": true }],
    "indent": ["error", 2],
    "key-spacing": ["error",  {
      "beforeColon": false,
      "afterColon": true,
      "mode": "minimum"
    }],
    "keyword-spacing": ["error", {
      "before": true,
      "after": true
    }],
    "newline-after-var": ["error", "always"],
    "no-array-constructor": "error",
    "no-lonely-if": "error",
    "no-nested-ternary": "error",
    "no-unneeded-ternary": "error",
    "no-useless-rename": "error",
    "object-curly-spacing": ["error", "always", { "arraysInObjects": true }],
    "one-var": ["error", "never"],
    "operator-assignment": ["error", "always"],
    "quotes": ["error",  "single", { "allowTemplateLiterals": true }],
    "semi": ["error", "always"],
    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": ["error", "always"],
    "space-in-parens": ["error", "never"],
    "spaced-comment": ["error", "always"],
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": ["error", { "before": true, "after": true }],
    "no-var": "error",
    "object-shorthand": ["error", "always"],
    "prefer-const": "error",
    "prefer-spread": "error"
  }
}
