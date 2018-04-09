var express = require('express'),
    app = express(),
    env = process.env.NODE_ENV || 'development',
    port = process.env.PORT || 8000;

// check via browser
app.get('/', (req, res) => res.send('main.js is running'));




// import modul movie
var movie = require('./movie');
// routing into /movie endpoint
app.get('/movie', function (req, res, next) {
	res.send('modul movie.js is running');
	// call method from modul movie
	movie.streamingMovie('The Avenger');
	});




// Standard NodeJS Listener
var server = app.listen(port, function() {
    var host = "localhost"; // custom
    // var host = "trehook.localtunnel.me"; // custom
    var port = server.address().port;

    console.log('Listening at http://%s:%s in %s', host, port, env);
});