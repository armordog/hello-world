var gulp = require('gulp');
var karmaServer = require('karma').Server;

gulp.task('test', function (done) {
	var server = new karmaServer({
		configFile: __dirname + '/karma.conf.js',
		singleRun: true
	});

	server.on('run_complete', function (browsers, results) {
		done (results.error ? "Tests Failed" : null);
	});

	server.start();
});