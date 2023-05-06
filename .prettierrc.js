// prettier.config.js
// 这是一个 prettier 格式化规则
// https://www.prettier.cn/docs/options.html
module.exports = {
  // 代码整体规则
  printWidth: 120, // 每行代码最大长度
  tabWidth: 2, // 缩进空格数
  useTabs: false, // 是否使用 tab 进行缩进
  semi: false, // 是否在语句末尾添加分号
  singleQuote: true, // 是否使用单引号

  // 注释规则
  requirePragma: false, // 是否在文件顶部添加 @prettier 注释来控制格式化
  insertPragma: false, // 是否在文件顶部添加 @format 注释

  // 对象数组规则
  quoteProps: 'as-needed', // 对象属性是否使用引号
  trailingComma: 'none', // 数组、对象最后一个元素后是否添加逗号
  bracketSpacing: true, // 对象大括号内是否添加空格

  // 箭头函数规则
  arrowParens: 'always', // 箭头函数参数是否添加括号

  // html规则
  bracketSameLine: false,
  htmlWhitespaceSensitivity: 'css',

  // 其他规则
  // parser: babel // 解释器使用babel
  endOfLine: 'lf', // 仅换行符不保留回车符
  proseWrap: 'preserve', // 是否在 markdown 文件中换行

  // 其他内容
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './tailwind.config.js'
}
