const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/app.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            },
            { //this second object is a rule for transpiling css/scss
                test: /\.s[ac]ss$/i,
                use:  [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ], 
            }
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
          }),
        //   new CopyPlugin({
        //     patterns: [{ from: './src/style.css' }],
        //   }),
    ],
    devServer: {
        host: 'localhost',
        port: 8080,
         // enable HMR on the devServer
        hot: true,
        // fallback to root for other urls
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, './dist'),
        },
        proxy: {
            '/api/**': {
              target: 'http://localhost:3000/',
              secure: false,
            },
            // '/assets/**': {
            //   target: 'http://localhost:3000/',
            //   secure: false,
            // },
          },
    },
};