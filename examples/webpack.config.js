const path = require('path')
const { rules, loaders, plugins, stats } = require('webpack-atoms')

const browsers = ['last 2 versions', 'ie >= 10', 'not android <= 4.4.3']

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, '../examples/App.js'),
  output: {
    path: path.join(__dirname, '../examples/'),
    filename: 'bundle.js',
    publicPath: '/examples',
  },
  stats: stats.minimal,
  devServer: {
    port: 3000,
    stats: stats.minimal,
  },

  resolve: {
    alias: {
      'react-big-calendar$': path.resolve(__dirname + '/../src/index.js'),
      'react-big-calendar/lib': path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      rules.js({}),
      rules.images(),
      rules.fonts(),
      // { oneOf: [rules.css.modules(), rules.css()] },
      // rules.sass({ browsers }),
      {
        test: /\.md/,
        use: [loaders.js(), 'markdown-jsx-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /(\.module)?.(sass|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]-[hash:8]',
              },
              sourceMap: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(eot|woff|ttf|woff2|svg|gif|png|jpg)(\?|$)/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[folder]/[name].[hash:8].[ext]',
            outputPath: './static/assets',
          },
        },
      },
    ],
  },
  plugins: [
    plugins.html({ title: 'React Big Calendar' }),
    plugins.extractCss(),
  ],
}
