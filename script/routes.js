const Html = require('html-webpack-plugin');
const path = require('path');
const fs = require('fs');



function getRoutes() {
  const routes = fs.readdirSync(path.resolve(__dirname, '../src/pages')).filter(i => /^[^\.]+$/.test(i));
  const entry = {
    'main': './src/pages/main',
    'global': './src/.assets/script/index',
  }, html = [
    new Html({
      template: `./src/pages/index.html`,
      filename: `index.html`,
      chunks: ['main', 'global'], // 对应 entry 的键， 从而引入 script
    })
  ];

  routes.forEach(i => {
      html.push(new Html({
        template: `./src/pages/${i}/index.html`,
        filename: `${i}/index.html`,
        
        chunks: [i, 'global'],
      }));
      entry[i] = `./src/pages/${i}/index`;
  })
  return {
    entry,
    html,
  }
}

module.exports = getRoutes();