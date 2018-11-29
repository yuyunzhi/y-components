const path = require('path')

// vue.config.js
module.exports = {
    css: {
        loaderOptions: {
            // 给 sass-loader 传递选项
            sass: {
                includePaths:[path.join(__dirname,'styles')]
            }

        }
    }
}