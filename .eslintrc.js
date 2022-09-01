module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true // 只需将该项设置为 true 即可
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'no-debugger': 2,
    'default-case': 2,
    'arrow-spacing': 2,
    'no-trailing-spaces': 2
  }
};
