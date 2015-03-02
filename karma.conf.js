// Karma configuration
// Generated on Mon Mar 02 2015 09:46:13 GMT+0100 (Hora estándar romance)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine-jquery','jasmine'],


    // list of files / patterns to load in the browser
    files: [
	  'https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js',
	  'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css',
	  'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css',
	  'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js',
	  'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.2/underscore-min.js',
	  'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min.js',
	  'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-colorpicker/2.1.0/css/bootstrap-colorpicker.min.css',
	  'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-colorpicker/2.1.0/js/bootstrap-colorpicker.min.js',
	  'public/models/canvasModel.js',
	  'public/views/canvasView.js',
	  'public/templates/*.html',
	  'https://cdn.rawgit.com/jakerella/jquery-mockjax/master/jquery.mockjax.js',
      'tests/*.js'
    ],

    // list of files to exclude
    exclude: [
		'public/app.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
