// head
module.exports = [
  ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
  [
    'meta',
    {
      name: 'keywords',
      content: '小念同学,小念同学官网,小念同学机器人,QQ频道,QQ频道机器人,QQ机器人',
    },
  ],
  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  ['meta', {name: 'referrer', content: 'no-referrer-when-downgrade'}],
  // 搜索框添加快捷键
  ["script", {"language": "javascript", "type": "text/javascript", "src": "/js/pgmanor-self.js"}]
]