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
  // 0,1,2  0不验证当前规则 1 waring 2error
  rules: {
    'no-debugger': 2, // 禁止使用debugger
    'default-case': 2,
    'arrow-spacing': 2,
    'no-trailing-spaces': 2,
    'no-var': 2, // 禁止使用var
    camelcase: ['error']
    //camelcase: ['error', { allow: ['aa_bb'] }]
  }
};
