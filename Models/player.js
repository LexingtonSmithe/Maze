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

exports.authentication = function(playerName, password){
  console.log("Validating Credentials: " + playerName)
  for (var i=0; i < players.length; i++){
    if(players[i].name == playerName){
      if(players[i].password == password){
        return "Valid";
        break;
      } else {
        return "Password Incorrect";
        break;
      }
    }
  }
  console.log("No player found with name: " + playerName);
  return "No Player";
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
      console.log("Returning Player Position: " + playerName + " X:" + players[i].xpos +" Y:" + players[i].ypos)
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
