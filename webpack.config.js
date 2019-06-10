const path = require('path');

module.exports = {
    entry: './src/json-config.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'json-config.js',
        library: 'JsonConfig',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        globalObject: `(typeof self !== 'undefined' ? self : this)`    
    },
    externals: {
        lodash: {
           commonjs: 'lodash',
           commonjs2: 'lodash',
           amd: 'lodash',
           root: '_'
        }
    }
};
  