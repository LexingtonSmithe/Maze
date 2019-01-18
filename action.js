var theMaze = require('./maze.js');
var player = require('./Models/player.js');
var exports = module.exports

var maze = theMaze.maze;
// Look
exports.Look = function(playerName) {

  var position = player.getPlayerPosition(playerName);
  var xpos = position.xpos;
  var ypos = position.ypos;
  console.log(maze[xpos][ypos] + " X: " + xpos + " Y: " + ypos);
  var view = {
    "Up": maze[xpos][ypos-1],
    "Down":maze[xpos][ypos+1],
    "Left":maze[xpos-1][ypos],
    "Right":maze[xpos+1][ypos]
  }
  console.log(view)
  return view;
}

// Move
exports.Move = function(playerName, direction) {
  var position = player.getPlayerPosition(playerName);
  var xpos = position.xpos;
  var ypos = position.ypos;
  var message = "Move";
  console.log(playerName + "attempted to move from X:" + xpos + " Y: "+ ypos + " In the direction of: " + direction);
  switch(direction){
    case "up":
      switch(maze[xpos][ypos-1]){
        case "Wall":
          message = "You run face first into a wall..";
        break;
        case "Start":
          message = "You are back where it all began";
          player.setPlayerPosition(playerName, xpos, ypos-1);
        break;
        case "Free":
          message = "You have successfully moved, take a look around...";
          player.setPlayerPosition(playerName, xpos, ypos-1);
        break;
        case "Goal":
          message = "Winner Winner Chicken Dinner";
          player.setPlayerPosition(playerName, xpos, ypos-1);
        break;
        default:
          message = "Nice try, but you cannot move outside the confines of my maze...";
      }
    break;
    case "down":
      switch(maze[xpos][ypos+1]){
        case "Wall":
          message = "You run face first into a wall..";
        break;
        case "Start":
          message = "You are back where it all began";
          player.setPlayerPosition(playerName, xpos, ypos+1);
        break;
        case "Free":
          message = "You have successfully moved, take a look around...";
          player.setPlayerPosition(playerName, xpos, ypos+1);
        break;
        case "Goal":
          message = "Winner Winner Chicken Dinner";
          player.setPlayerPosition(playerName, xpos, ypos+1);
        break;
        default:
          message = "Nice try, but you cannot move outside the confines of my maze...";
      }
    break;
    case "left":
      switch(maze[xpos-1][ypos]){
        case "Wall":
          message = "You run face first into a wall..";
        break;
        case "Start":
          message = "You are back where it all began";
          player.setPlayerPosition(playerName, xpos-1, ypos);
        break;
        case "Free":
          message = "You have successfully moved, take a look around...";
          player.setPlayerPosition(playerName, xpos-1, ypos);
        break;
        case "Goal":
          message = "Winner Winner Chicken Dinner";
          player.setPlayerPosition(playerName, xpos-1, ypos);
        break;
        default:
          message = "Nice try, but you cannot move outside the confines of my maze...";
      }
    break;
    case "right":
      switch(maze[xpos+1][ypos]){
        case "Wall":
          message = "You run face first into a wall..";
        break;
        case "Start":
          message = "You are back where it all began";
          player.setPlayerPosition(playerName, xpos+1, ypos);
        break;
        case "Free":
          message = "You have successfully moved, take a look around...";
          player.setPlayerPosition(playerName, xpos+1, ypos);
        break;
        case "Goal":
          message = "Winner Winner Chicken Dinner";
          player.setPlayerPosition(playerName, xpos+1, ypos);
        break;
        default:
          message = "Nice try, but you cannot move outside the confines of my maze...";
      }
    break;
  }
  return {message: message};
}
