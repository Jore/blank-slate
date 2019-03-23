/* eslint-disable */

// Configuration file for all things Slate.
// For more information, visit https://github.com/Shopify/slate/wiki/Slate-Configuration

const path = require('path');
const { ProvidePlugin } = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const graphqlLoader = require('graphql-tag/loader');
const PrettierPlugin = require("prettier-webpack-plugin");

const sectionsBase = 'sections';
const snippetsBase = 'snippets';

const externals = {
  jquery: 'jQuery',
};

const plugins = [
  // new PrettierPlugin(),
  new ProvidePlugin({
    '$': 'jquery',
    'jQuery': 'jquery',
    'window.$': 'jquery',
    'window.jQuery': 'jquery',
    'State': [path.resolve('./src/scripts/state'), 'default'],
  }),
  new CopyWebpackPlugin([
    {
      from: 'sections/**/*.liquid',
      to: '../sections/',
      flatten: true,
      ignore: [ `${sectionsBase}/*` ],
    },
    {
      from: 'snippets/**/*.liquid',
      to: '../snippets/',
      flatten: true,
      ignore: [ `${snippetsBase}/*` ],
    }
  ]),
];

const alias = {
  'collection': path.resolve('./src/scripts/react/Collection/components'),
  'components': path.resolve('./src/scripts/components'),
  'common': path.resolve('./src/scripts/common'),
  'scripts': path.resolve('./src/scripts'),
  'state': path.resolve('./src/scripts/state'),
  'styles': path.resolve('./src/styles'),
};

const rules = [
  {
    test: /\.(graphql|gql)$/,
    exclude: /node_modules/,
    use: [
      { loader: 'graphql-tag/loader' }
    ]
  },
  {
    test: require.resolve('jquery'),
    use: [{
      loader: 'expose-loader',
      options: '$'
    }]
  },
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: "eslint-loader",
    options: {
      // eslint options (if necessary)
    }
  },
];

module.exports = {
  'eslint.config': '.eslintrc.js',
  'cssVarLoader.liquidPath': ['src/snippets/api/css-variables.liquid'],
  'paths.theme.src.sections': config => path.resolve(`./src/sections/${sectionsBase}`),
  'paths.theme.src.snippets': config => path.resolve(`./src/snippets/${snippetsBase}`),
  'webpack.extend': {
    externals,
    plugins,
    resolve: { alias },
    module: { rules },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/](pubsub-js)[\\/]/,
            name: 'vendor',
            chunks: 'all',
            enforce: true,
          }
        },
      },
    },
  },
};
