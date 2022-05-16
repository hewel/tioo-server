module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "tsconfig.json",
      },
    },
  },
  rules: {
    "import/order": [
      "error",
      { groups: [["builtin", "external", "internal"]] },
    ],
  },
  overrides: [
    {
      files: ["resolvers-types.ts"],
      rules: {
        "@typescript-eslint/ban-types": "off",
      },
    },
  ],
};
