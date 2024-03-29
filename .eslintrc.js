module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "strict": [2, "safe"],
        "no-debugger": 2,
        "brace-style": [
            2,
            "1tbs",
            {
                "allowSingleLine": true
            }
        ],
        "no-trailing-spaces": 2,
        "keyword-spacing": 2,
        "space-before-function-paren": [
            2,
            "never"
        ],
        "spaced-comment": [2, "always"],
        "vars-on-top": 2,
        "no-undef": 2,
        "no-undefined": 2,
        "comma-dangle": [2, "never"],
        "quotes": [2, "single"],
        "semi": [2, "always"],
        "guard-for-in": 2,
        "no-eval": 2,
        "no-with": 2,
        "valid-typeof": 2,
        "no-unused-vars": 2,
        "no-continue": 1,
        "no-extra-semi": 1,
        "no-unreachable": 1,
        "no-unused-expressions": 1,
        "no-magic-numbers": 1,
        "max-len": [1, 80, 4],
        "react/prefer-es6-class": 1
    }
};