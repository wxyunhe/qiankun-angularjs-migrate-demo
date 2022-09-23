const { defineConfig } = require('@vue/cli-service');
const pkg = require('./package.json');

module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: `${pkg.name}-[name]`,
      libraryTarget: 'umd',
      chunkLoadingGlobal: `webpackJsonp_${pkg.name}`,
    },
  },
});
