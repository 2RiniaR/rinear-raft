/* eslint-env node */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:prettier/recommended",
    "plugin:react/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "react", "import"],
  settings: {
    "import/resolver": {
      typescript: {
        config: "tsconfig.json",
        alwaysTryTypes: true
      }
    },
    react: {
      version: "detect"
    }
  },
  rules: {
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          "{}": false
        }
      }
    ],
    "react/prop-types": ["off"],
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
    "import/order": ["error"],
    "jsx-a11y/anchor-is-valid": "off"
  }
};
