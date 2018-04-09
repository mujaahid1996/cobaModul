// main node to run app

var podcast = require('./podcast');
podcast.download('Astronomy podcast #85');
//console.log(typeof podcast.download); // trace type of podcast.download

var movie = require('./movie');
movie.streamingMovie('Black Phanter');