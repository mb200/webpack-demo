module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "prettier",
    "react-app",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  plugins: ["react-hooks", "import"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true // Lint JSX
    }
  },
  rules: {
    // General rules
    "import/order": [
      "error",
      {
        alphabetize: {
          order:
            "asc" /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
          caseInsensitive: true /* ignore case. Options: [true, false] */
        },
        "newlines-between": "never"
      }
    ],

    "import/no-duplicates": ["error"],

    "no-restricted-imports": ["error", { patterns: ["*.examples"] }],

    // Run prettier as part of linting
    "prettier/prettier": "error",

    // React rules

    // Disable — we aren't using prop types
    "react/prop-types": "off",

    // Add these to be explicit, even though CRA has them.
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  overrides: [
    {
      files: ["*.ts?(x)"],
      plugins: ["@typescript-eslint"],
      extends: ["prettier"],
      rules: {
        // Typescript rules
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/no-unused-vars": ["error"]
      }
    }
  ],
  settings: {
    react: {
      version: "detect" // Automatically detect the version of React
    }
  }
};
