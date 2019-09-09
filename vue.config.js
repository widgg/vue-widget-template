// vue.config.js

const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
		  maxChunks: 1
      })
	]
  },
  chainWebpack:
  	config => {
		const fontsRule = config.module.rule('images');
		// clear all existing loaders.
		// if you don't do this, the loader below will be appended to
		// existing loaders of the rule.
		fontsRule.uses.clear();
	  
		config.module
		  .rule('images')
		  .test(/\.(jpe?g|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/)
		  .use('base64-inline-loader?limit=1000&name=[name].[ext]')
		  .loader('base64-inline-loader')
		  .tap(options => {
			// modify the options...    
			return options
		   })
		  .end()
  	},
  	filenameHashing: false,
  	css: {
  		extract: true
  	}
};
