const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const CleanWebpackPlugin = require('clean-webpack-plugin');
const DotenvPlugin = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin;
const VueLoaderPlugin = require('vue-loader/lib/plugin');

let entry = './src/app.js';
let template = './src/index.ejs';
let contentBase = './dist';
let output = { path: path.join(__dirname, 'dist'), filename: 'app.js' };

const config = {
    mode:  process.env.NODE_ENV || 'production',
    entry: entry,
    output: output,
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin([ contentBase ], { root: __dirname, exclude: [ '.gitkeep' ] }),
        new DotenvPlugin({ safe: true }),
        new HtmlWebpackPlugin({ template: template }),
        new HotModuleReplacementPlugin(),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.vue$/,
                use: [ 'vue-loader' ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [ 'file-loader?name=img/[name].[ext]' ]
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {
        contentBase: contentBase,
        host: '0.0.0.0',
        port: 8080,
        hot: true,
        progress: true
    }
};

module.exports = config;
