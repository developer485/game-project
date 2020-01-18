const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader" //3. Inject styles into DOM
          },
          {
            loader: "css-loader" //2. Turns css into commonjs
          },
          {
            loader: "sass-loader",  //1. Turns sass into css
          }
        ]
      }
    ]
  }
});



// module.exports = merge(common, {
//   mode: 'development',
//   devtool: 'inline-source-map',
//   devServer: {
//     contentBase: './dist',
//   }
//   // output: {
//   //   filename: "bundle.js",
//   //   path: path.resolve(__dirname, "dist")
//   // },
// });

// const path = require('path');
// const common = require('./webpack.common');
// const merge = require('webpack-merge');

// module.exports = merge(common, {
//     mode: "development",
//     output: {
//       filename: "[name].bundle.js",
//       path: path.resolve(__dirname, "dist")
//     },
//     plugins: [
//       new HtmlWebpackPlugin({
//         template: "./src/index.html"
//       }),
//     ],
//     module: {
//       rules: [
//         {
//           test: /\.scss$/,
//           use: [
//             {
//               loader: "style-loader" //3. Inject styles into DOM
//             },
//             {
//               loader: "css-loader" //2. Turns css into commonjs
//             },
//             {
//               loader: "sass-loader" // 1. Turns sass into css
//             }
//           ]
//         }
//       ]
//     }
// });