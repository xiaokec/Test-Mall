var path = require('path')
function resolve (dir) {
 console.log(__dirname)
 return path.join(__dirname, dir)
}
module.exports = {
 chainWebpack: config => {
  config.resolve.alias
   .set("assets", 'src/assets')
	 .set("common", 'src/common')
	 .set("components", 'src/components')
	 .set("network", 'src/network')
	 .set("views", 'src/views')
 }
}