const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin  = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: "[name].[contentHash].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                template: './src/index.html',
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            })
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
    ],
    module: {
        rules: [
            {
                test: /\.(sass|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader, //3. Extract css into files
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
});





// module.exports = merge(common, {
//     mode: 'production',
//     module: {
//         rules: [
//             {
//                 test: /\.sass$/,
//                 use: [
//                     'resolve-url-loader',
//                     'style-loader',
//                     'css-loader',
//                     'sass-loader'
//                 ]
//             }
//         ]
//     }
//     // output: { 
//     //     filename: "bundle.[contentHash].js",
//     //     path: path.resolve(__dirname, "dist")
//     // }
// });


// const path = require('path');
// const common = require('./webpack.common');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const merge = require('webpack-merge');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

// module.exports = merge(common, {
//     mode: 'production',
//     output: {
//         filename: "[name].[contentHash].bundle.js",
//         path: path.resolve(__dirname, "dist")
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.scss$/,
//                 use: ExtractTextPlugin.extract({
//                     fallback: 'style-loader',
//                     use: ['css-loader', 'sass-loader']
//                 })
//             }
//         ]
//     },
//     plugins: [new ExtractTextPlugin('style.css')]
// });



// plugins: [new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" })],

// Method-1
// module: {
//     rules: [
//         {
//             test: /\.scss$/,
//             use: [
//                 MiniCssExtractPlugin.loader, // 3. Extract css into files
//                 "css-loader", // 2. Turns css into commonjs
//                 "sass-loader" //1. Turns sass into css
//             ]
//         }
//     ]
// }