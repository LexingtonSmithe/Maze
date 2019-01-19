var exports = module.exports = {}

const players = new Array();

exports.NewPlayer = function(name, password, xpos, ypos){
  console.log("Creating Player: " + name + " : Password: " + password);
  pos = players.length;
  players[pos] = {
    "name": name,
    "password": password,
    "xpos": xpos,
    "ypos": ypos
  }
}

exports.NumberOfPlayers = function(){
  number = players.length;
  return number;
}

exports.DeletePlayer = function(playerName){
  console.log("Deleting Player: " + playerName);
  var result = "cannot be deleted as they do not exist";
  for (var i=0; i < players.length; i++){
    if(players[i].name == playerName){
      players.splice(i, 1);
      result = "has been deleted";
    }
  }
  return result;
}

exports.authentication = function(playerName, password){
  console.log("Validating Credentials: " + playerName)
  var result = "No Player"
  for (var i=0; i < players.length; i++){
    if(players[i].name == playerName){
      if(players[i].password == password){
        result = "Valid";
        break;
      } else {
        result = "Password Incorrect";
        break;
      }
    }
  }
  console.log("No player found with name: " + playerName);
  return result;
}

exports.checkForPlayer = function(playerName){
  console.log("Checking if player exists: " + playerName)
  for (var i=0; i < players.length; i++){
    if(players[i].name == playerName){
      return true;
    }
  }
}

exports.getPlayerPosition = function(playerName){
  for (var i=0; i < players.length; i++){
    if(players[i].name == playerName){
      console.log("Returning Player Position: " + playerName + " X:" + players[i].xpos + " Y:" + players[i].ypos)
      return {
        "xpos": players[i].xpos,
        "ypos": players[i].ypos
      };
    }
  }
}

exports.setPlayerPosition = function(playerName, xpos, ypos){
  for (var i=0; i < players.length; i++){
    if(players[i].name == playerName){
      players[i].xpos = xpos;
      players[i].ypos = ypos;
      console.log(playerName + " has moved!")
    }
  }
}
module.exports.players = players
