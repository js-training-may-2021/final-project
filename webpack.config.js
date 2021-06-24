const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
            {from: path.resolve(__dirname, 'public/assets'),
            to: path.resolve(__dirname, 'dist/public/assets'),
            }],
      }),
    ],
};
