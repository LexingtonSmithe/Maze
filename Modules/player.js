var exports = module.exports = {}

var players = new Array();


exports.CheckForPlayer = function(playerName) {
    console.log("Checking if player exists: " + playerName);
    return players.find(players => players.name == playerName);
};

exports.SetPlayerWinnerFlag = function(playerName) {
	var index = players.findIndex(players => players.name == playerName);
	players[index].winner = true;
};

exports.CreateNewPlayer = function(name, password, xpos, ypos) {
    console.log("Creating Player: " + name + " : Password: " + password);
    players.push({
        "name": name,
        "password": password,
        "winner": false,
        "xpos": xpos,
        "ypos": ypos
    });
}
exports.GetPlayerInfo = function(playerName) {
	return players.filter(players => players.name == playerName);
};

exports.DeletePlayer = function(playerName) {
	if(exports.CheckForPlayer(playerName)){
		console.log("Deleting Player: " + playerName);
		var result = "deleted successfully";
	    players = players.splice(players => players.name == playerName);
	} else {
		var result = "could not be found to be deleted";
	}
	return result;
};
exports.GetAllPlayersNames = function() {
    console.log("Getting all players names:");
    var list = players.map(players => players.name);
    return list;
};
exports.GetAllWinnersNames = function() {
    console.log("Getting all winners names:");
    var list = players.filter(players => players.winner == true);
    return list;
};

exports.DeleteAllPlayers = function() {
    console.log("Deleting ALL Players");
    players = [];
};
exports.Authentication = function(playerName, password) {
    console.log("Validating Credentials: " + playerName + " : " + password);
    var result = "No Player"
    for (var i = 0; i < players.length; i++) {
        if (players[i].name == playerName) {
            if (players[i].password == password) {
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
exports.GetPlayerPosition = function(playerName) {
	var index = players.findIndex(players => players.name == playerName);
	console.log("Returning Player Position: " + playerName + " X:" + players[index].xpos + " Y:" + players[index].ypos)
	return {
		"xpos": players[index].xpos,
		"ypos": players[index].ypos
	};
};
exports.SetPlayerPosition = function(playerName, xpos, ypos) {
	var index = players.findIndex(players => players.name == playerName);
	players[index].xpos = xpos;
	players[index].ypos = ypos;
	console.log(playerName + " has moved!")
};

exports.NumberOfPlayers = function() {
    number = players.length;
    return number;
};

exports.NumberOfWinners = function() {
    var winners = 0;
    for (var i = 0; i < players.length; i++) {
        if (players[i].winner == true) {
            winners++
        }
    }
    return winners
};

module.exports.players = players
