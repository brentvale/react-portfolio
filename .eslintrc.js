module.exports = {
  "extends": "airbnb",
  "plugins": ["jsx-a11y"],
  "rules": {
    "arrow-parens": ["error", "as-needed"],
    "class-methods-use-this": ["error", {
      exceptMethods: [
        "render",
        "getInitialState",
        "getDefaultProps",
        "getChildContext",
        "componentWillMount",
        "componentDidMount",
        "componentWillReceiveProps",
        "shouldComponentUpdate",
        "componentWillUpdate",
        "componentDidUpdate",
        "componentWillUnmount",
      ],
    }],
    "comma-dangle": [
      "error",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "never"
      }
    ],
    "jsx-a11y/anchor-is-valid": 2,
    "jsx-a11y/label-has-associated-control": "off",
    "function-paren-newline": "off",
    "no-use-before-define": "off",
    "no-alert": "off",
    "camelcase": "off",
    "prefer-destructuring": "off",
    "max-len": ["error", 120, 2, {
      "ignoreUrls": true,
      "ignoreComments": false,
      "ignoreRegExpLiterals": true,
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true
    }],
    "import/no-unresolved": ["error", { ignore: ['\.css'] }],
    "react/self-closing-comp": ["error", {
      "component": true,
      "html": true
    }]
  },
  settings: {
    "import/no-unresolved": [
      "error",
      {
        "caseSensitive": true
      }
    ],
  },
  "overrides": [
    {
      "files": [ "**/*.test.*" ],
      "rules": {
      }
    }
  ]
};