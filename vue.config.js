const path = require('path')

module.exports = {
  "transpileDependencies": [
    
  ],
  pages: {
    index: {
      entry: 'src/index.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'FlySkyPie 的妄想藍圖暨個人網站',
    },
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? 'http://208.109.14.197/website/'
    : '/',
}