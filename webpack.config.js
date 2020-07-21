const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main/index.tsx',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    publicPath: '/public/js',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  },
  devServer: {
    contentBase: './public', // pasta base
    writeToDisk: true, // para criar bundle sempre que rodar
    historyApiFallback: true // para ele entender a rota
  },
  externals: { // para não adicionar no bundle
    react: 'React',
    'react-dom': 'ReactDom'
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
