var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var maze = require('./maze.js');
var action = require('./action.js');
var player = require('./Models/player.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

var router = express.Router();
router.get('/test', function(req, res) {
    res.json({ message: "Hooray! Welcome to our api it's up and running!" });
});

router.get('/look', function(req, res) {
    var playerName = req.query.name;
    var password = req.query.password;
    var auth = player.authentication(playerName,password);
    switch(auth){
      case "Valid":
        var view = action.Look(playerName);
        res.json({ message: "You have looked!",  "theView": view });
      break;
      case "No Player":
        res.status(401).json({
          status: "error",
          message: "Player does not exist!"
        })
      break;
      case "Password Incorrect":
      res.status(403).json({
        status: "error",
        message: "Password is incorrect!"
      })
      break;
      default:
      res.status(500).json({
        status: "error",
        message: "Something has gone terribly wrong!"
      })
    }
});

router.put('/move', function(req, res) {
    var playerName = req.query.name;
    var password = req.query.password;
    var direction = req.query.direction;

    var auth = player.authentication(playerName,password);
    switch(auth){
      case "Valid":
        if(direction){
          var result = action.Move(playerName, direction);
          res.json({ message: result.message });
        } else {
          res.status(400).json({
            status: "Bad Request",
            message: "You have not supplied a direction"
          })
        }
      break;
      case "No Player":
        res.status(401).json({
          status: "Unauthorized",
          message: "Player does not exist!"
        })
      break;
      case "Password Incorrect":
      res.status(403).json({
        status: "Forbidden",
        message: "Password is incorrect!"
      })
      break;
      default:
      res.status(500).json({
        status: "Generic Error",
        message: "Something has gone terribly wrong!"
      })
    }
});

router.get('/players', function(req, res) {
    res.json({ message: "The following players exist",  "players": player.players });
});

router.post('/newPlayer', function(req, res) {
    var playerName = req.body.name;

    if(player.checkForPlayer(playerName)){
      res.json({ message: "Player already exists!"});
    } else {
      var password = req.body.password;
      var start = maze.getStart();
      player.NewPlayer(playerName, password, start.xpos, start.ypos);
      console.log('Player has arrived: '+ playerName);
      res.json({ message: "Welcome! " + playerName + ", please use the /look endpoint using your name and password as parameters to see what you can see!"});
    }
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('The server is up and runing on port:' + port);
