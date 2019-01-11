module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["jasmine"],
    // list of files / patterns to load in the browser
    files: [
      //'lib/index.js',
      // '*.html',
      // 'lib/*.js',
      { pattern: "test/*.test.js", watched: false }
    ],
    // list of files / patterns to exclude
    exclude: [],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/*.test.js': ['webpack', 'sourcemap']
    },
    webpack: {
      devtool: 'inline-source-map'
      // module: {
      //   loaders: [
      //     {test: /\.js$/, loader: 'babel-loader'}
      //   ]
      // }
    },
    webpackMiddleware: {
      stats: 'errors-only'
    },
    webpackServer: {
      noInfo: true
    },
    reporters: ["mocha"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Chrome"],
    singleRun: false,
    concurrency: Infinity
  });
}
