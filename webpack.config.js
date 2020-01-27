const ExtensionReloader  = require('webpack-extension-reloader');
var path = require('path');

const contentScripts = {
  content: './content/index.js'
}
const extensionPages = {
  options: './options/index.js',
  popup: './popup/index.js',
}

let config = {
  mode: process.env.NODE_ENV,
  context: __dirname + '/src'
};

let ExtensionConfig = Object.assign({}, config, {
    entry: {
      background: './background/index.js',
      ...contentScripts,
      ...extensionPages
    },
    output: {
      path: __dirname + '/src',
      filename: '[name].dist.js',
    },
    plugins: [
      new ExtensionReloader({
        port: 9090,
        reloadPage: true,
        entries: {
          contentScript: Object.keys(contentScripts),
          extensionPage: Object.keys(extensionPages),
          background: 'background'
        }
      })
    ]
});

let AlpineConfig = Object.assign({}, config, {
    entry: {
      'alpine': './alpine.js'
    },
    output: {
       path: __dirname + '/src',
       filename: "alpine.dist.js"
    },
});

module.exports = [
    ExtensionConfig, AlpineConfig,
];
