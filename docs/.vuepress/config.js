const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: "小念同学机器人",
  description: '小念同学机器人不仅可以帮助频道提升活跃, 更是能够带领频道走向巅峰的超级女侠!',
  base: '/small-bot-docs/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: false, // 代码行号
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'],
  },

  head,
  plugins,
  themeConfig,
}