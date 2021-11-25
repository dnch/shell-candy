module.exports = {
  root: true,
  plugins: ["jest"],
  extends: ["dnch/typescript", "plugin:jest/recommended"],
  ignorePatterns: ["*.js"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",

  },
};
