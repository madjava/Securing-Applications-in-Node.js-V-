module.exports = {
  mode: 'development',
  entry: {
    login: './src/client/login.js',
    register: './src/client/register.js'
  },
  output: {
    path: __dirname + '/public',
    filename: 'static/js/[name].js',
    publicPath: '/',
  },
  module: {
    rules: [{test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}],
  },
};
