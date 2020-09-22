module.exports = {
  env: {
    es2017: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "airbnb-base",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2017,
    sourceType: "module",
  },
  plugins: [
    "vue",
  ],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "import/extensions": "off",
    "max-len": "off",
    "import/no-unresolved": "off",
    "vue/attribute-hyphenation": ["error", "never"],
    "vue/max-attributes-per-line": "off",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  },
};
