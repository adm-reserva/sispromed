module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  plugins: ["react", "jsx-a11y", "react-hooks", "@typescript-eslint"],
  rules: {    
    camelcase: "off",
    "@typescript-eslint/camelcase": ["error", { properties: "always" }],

    quotes: ["error", "double"],
    semi: ["error", "always"],
    "react/jsx-boolean-value": ["error", "never"],
    "react/jsx-curly-spacing": ["error", { when: "never", children: true }],
    "react/jsx-pascal-case": ["error"],
    "react/self-closing-comp": ["error"],
    "react/jsx-closing-bracket-location": ["error", "tag-aligned"],
    "react/jsx-wrap-multilines": [
      "error",
      {
        declaration: "parens-new-line",
        assignment: "parens-new-line",
        return: "parens-new-line",
        arrow: "parens-new-line",
      },
    ],
    "react/jsx-tag-spacing": [
      "error",
      {
        beforeSelfClosing: "always",
        beforeClosing: "never",
      },
    ],
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    "jsx-quotes": ["error", "prefer-double"],
    "jsx-a11y/img-has-alt": "error",
    "jsx-a11y/img-redundant-alt": "error",
    "react/no-array-index-key": "warn",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
  },
  settings: {
    react: { version: "detect" },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
