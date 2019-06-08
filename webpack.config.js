const path = require('path');

module.exports = {
    entry: './src/json-config.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'json-config.js',
        library: 'JsonConfig'
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
  