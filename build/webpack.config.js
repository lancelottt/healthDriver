var webpack = require('webpack')
module.exports = {
 // ...
 resolve: {
 	extensions: ['.js', '.vue', '.json'],
  alias: {
    'vue$': 'vue/dist/vue.esm.js',
    '@': resolve('src')
  }
 // ...
 alias: {
  // ...
  'cube-ui': 'cube-ui/lib'
  // ...
 }
 // ...
 }
 // ...
},
plugins: [
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    jquery: "jquery",
    "window.jQuery": "jquery"
  })
],
module: {
  rules: [
    // ......
  ]
}