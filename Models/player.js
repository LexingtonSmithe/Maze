var exports = module.exports = {}

var players = new Array();

exports.NumberOfPlayers = function(){
  number = players.length;
  return number;
};
exports.CheckForPlayer = function(playerName){
  console.log("Checking if player exists: " + playerName)
  for (var i=0; i < players.length; i++){
    if(players[i].name == playerName){
      return true;
    }
  }
};
exports.CreateNewPlayer = function(name, password, xpos, ypos){
  console.log("Creating Player: " + name + " : Password: " + password);
  pos = players.length;
  players[pos] = {
    "name": name,
    "password": password,
    "xpos": xpos,
    "ypos": ypos
  }
}
exports.GetPlayerInfo = function(playerName){
  console.log("Checking if player exists: " + playerName)
  for (var i=0; i < players.length; i++){
    if(players[i].name == playerName){
      return players[i];
    }
  }
};
exports.DeletePlayer = function(playerName){
  console.log("Deleting Player: " + playerName);
  var result = "cannot be deleted as they do not exist";
  for (var i=0; i < players.length; i++){
    if(players[i].name == playerName){
      players.splice(i, 1);
      result = " has been deleted";
    }
  }
  return result;
};
exports.GetAllPlayersNames = function(){
  console.log("Getting all players names:");
  var list = [];
  for (var i=0; i < players.length; i++){
    list.push(players[i].name)
    console.log(players[i].name);
  }
  return list;
};
exports.DeleteAllPlayers = function(){
    console.log("Deleting ALL Players");
    players = [];
};
exports.Authentication = function(playerName, password){
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
  return result;
};

// Player Actions
exports.GetPlayerPosition = function(playerName){
  for (var i=0; i < players.length; i++){
    if(players[i].name == playerName){
      console.log("Returning Player Position: " + playerName + " X:" + players[i].xpos + " Y:" + players[i].ypos)
      return {
        "xpos": players[i].xpos,
        "ypos": players[i].ypos
      };
    }
  }
};
exports.SetPlayerPosition = function(playerName, xpos, ypos){
  for (var i=0; i < players.length; i++){
    if(players[i].name == playerName){
      players[i].xpos = xpos;
      players[i].ypos = ypos;
      console.log(playerName + " has moved!")
    }
  }
};

module.exports.players = players
