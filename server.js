var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var maze = require('./maze.js');
var action = require('./action.js');
var player = require('./Models/player.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port
var adminPassword = "Lex15King"             // set the admin password

var router = express.Router();
router.get('/health', function(req, res) {
    var numberOfPlayers = player.NumberOfPlayers()
    res.json({
      "Message": "Hooray! Welcome to our api it's up and running!",
      "Players": numberOfPlayers
   });
});

router.post('/newPlayer', function(req, res) {
    var playerName = req.body.name;

    if(player.checkForPlayer(playerName)){
      res.json({
        "Message": "Player already exists!"
      });
    } else {
      var password = req.body.password;
      var start = maze.getStart();
      player.NewPlayer(playerName, password, start.xpos, start.ypos);
      console.log('A new player has arrived: '+ playerName);
      res.json({
        "Message": "Welcome! " + playerName + ", please use the /look endpoint using your name and password as parameters to see what you can see!"
      });
    }
});

router.get('/players', function(req, res) {
    res.json({ "Message": "The following players exist",  "players": player.players });
});

router.delete('/players', function(req, res) {
    var playerName = req.query.name;
    var password = req.query.admin;
    if(password == adminPassword){
      var deleteOutcome = player.DeletePlayer(playerName);
      res.json({
        "Message": playerName + deleteOutcome
      });
    } else {
      res.json({
        "Message": "You are not the admin..."
      });
    }
});

router.get('/action/look', function(req, res) {
    var playerName = req.query.name;
    var password = req.query.password;
    var auth = player.authentication(playerName,password);
    switch(auth){
      case "Valid":
        var view = action.Look(playerName);
        res.json({
          "Message": "You have looked!",  "theView": view
        });
      break;
      case "No Player":
        res.status(401).json({
          "Status": "error",
          "Message": "Player does not exist!"
        })
      break;
      case "Password Incorrect":
      res.status(403).json({
        "Status": "error",
        "Message": "Password is incorrect!"
      })
      break;
      default:
      res.status(500).json({
        "Status": "error",
        "Message": "Something has gone terribly wrong!"
      })
    }
});

router.put('/action/move', function(req, res) {
    var playerName = req.query.name;
    var password = req.query.password;
    var direction = req.query.direction;

    var auth = player.authentication(playerName,password);
    switch(auth){
      case "Valid":
        if(direction){
          var result = action.Move(playerName, direction);
          res.json({
            "Message": result.message
          });
        } else {
          res.status(400).json({
            "Status": "Bad Request",
            "Message": "You have not supplied a direction"
          })
        }
      break;
      case "No Player":
        res.status(401).json({
          "Status": "Unauthorized",
          "Message": "Player does not exist!"
        })
      break;
      case "Password Incorrect":
      res.status(403).json({
        "Status": "Forbidden",
        "Message": "Password is incorrect!"
      })
      break;
      default:
      res.status(500).json({
        "Status": "Generic Error",
        "Message": "Something has gone terribly wrong!"
      })
    }
});


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('The server is up and runing on port:' + port);
