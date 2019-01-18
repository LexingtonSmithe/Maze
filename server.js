var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var maze = require('./maze.js');
var action = require('./action.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

var router = express.Router();
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/test', function(req, res) {
    res.json({ message: "Hooray! Welcome to our api it's up and running!" });
});

// more routes for our API will happen here
router.get('/look', function(req, res) {
    var view = action.Look()
    res.json({ message: "You have looked!",  "theView": view });
});

router.post('/newPlayer/:name', function(req, res) {
    var playerName = req.body.name;
    var newPlayer = new player();
    var start = maze.getStart();
    newPlayer.name = playerName;
    newPlayer.Xpos = start.Xpos;
    newPlayer.Ypos = start.Ypos;

    console.log('Player has arrived'+ playerName);
    res.json({ message: "Welcome! " + playerName});
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('The server is up and runing on port:' + port);
