var theMaze = require('./maze.js');
var player = require('./Models/player.js');
var exports = module.exports

var maze = theMaze.maze;
// Look
exports.Look = function(playerName) {

  var position = player.GetPlayerPosition(playerName);
  var xpos = position.xpos;
  var ypos = position.ypos;
  console.log(maze[xpos][ypos] + " X: " + xpos + " Y: " + ypos);
  var up, down, left, right;

  if (ypos-1 < 0){
    up = "Wall";
  } else {
    up = maze[xpos][ypos-1];
  }
  if (ypos + 1 > maze.length-1){
    down = "Wall";
  } else {
    down = maze[xpos][ypos+1];
  }
  if (xpos-1 < 0){
    left = "Wall";
  } else {
    left = maze[xpos-1][ypos];
  }
  if (xpos+1 > maze.length-1){
    right = "Wall";
  } else {
    right = maze[xpos+1][ypos];
  }
  var view = {
    "Up": up,
    "Down": down,
    "Left": left,
    "Right": right
  }
  console.log(view)
  return view;
}

// Move
exports.Move = function(playerName, direction) {
  var position = player.GetPlayerPosition(playerName);
  var xpos = position.xpos;
  var ypos = position.ypos;
  var message = "Move";
  console.log(playerName + " attempted to move from X:" + xpos + " Y: "+ ypos + " In the direction of: " + direction);
  switch(direction){
    case "up":
      if (ypos-1 < 0){
        message = "You run face first into a wall..";
      } else {
        switch(maze[xpos][ypos-1]){
          case "Wall":
            message = "You run face first into a wall..";
          break;
          case "Start":
            message = "You are back where it all began";
            player.SetPlayerPosition(playerName, xpos, ypos-1);
          break;
          case "Free":
            message = "You have successfully moved, take a look around...";
            player.SetPlayerPosition(playerName, xpos, ypos-1);
          break;
          case "Goal":
            message = "Winner Winner Chicken Dinner";
            player.SetPlayerPosition(playerName, xpos, ypos-1);
          break;
          default:
            message = "Nice try, but you cannot move outside the confines of my maze...";
        }
      }
    break;
    case "down":
      if(ypos+1 > maze.length-1){
        message = "You run face first into a wall..";
      } else {
        switch(maze[xpos][ypos+1]){
          case "Wall":
            message = "You run face first into a wall..";
          break;
          case "Start":
            message = "You are back where it all began";
            player.SetPlayerPosition(playerName, xpos, ypos+1);
          break;
          case "Free":
            message = "You have successfully moved, take a look around...";
            player.SetPlayerPosition(playerName, xpos, ypos+1);
          break;
          case "Goal":
            message = "Winner Winner Chicken Dinner";
            player.SetPlayerPosition(playerName, xpos, ypos+1);
          break;
          default:
            message = "Nice try, but you cannot move outside the confines of my maze...";
        }
      }
    break;
    case "left":
    if(xpos-1 < 0){
      message = "You run face first into a wall..";
    } else {
      switch(maze[xpos-1][ypos]){
        case "Wall":
          message = "You run face first into a wall..";
        break;
        case "Start":
          message = "You are back where it all began";
          player.SetPlayerPosition(playerName, xpos-1, ypos);
        break;
        case "Free":
          message = "You have successfully moved, take a look around...";
          player.SetPlayerPosition(playerName, xpos-1, ypos);
        break;
        case "Goal":
          message = "Winner Winner Chicken Dinner";
          player.SetPlayerPosition(playerName, xpos-1, ypos);
        break;
        default:
          message = "Nice try, but you cannot move outside the confines of my maze...";
      }
    }
    break;
    case "right":
    if(xpos+1 > maze.length-1){
      message = "You run face first into a wall..";
    } else {
      switch(maze[xpos+1][ypos]){
        case "Wall":
          message = "You run face first into a wall..";
        break;
        case "Start":
          message = "You are back where it all began";
          player.SetPlayerPosition(playerName, xpos+1, ypos);
        break;
        case "Free":
          message = "You have successfully moved, take a look around...";
          player.SetPlayerPosition(playerName, xpos+1, ypos);
        break;
        case "Goal":
          message = "Winner Winner Chicken Dinner";
          player.SetPlayerPosition(playerName, xpos+1, ypos);
        break;
        default:
          message = "Nice try, but you cannot move outside the confines of my maze...";
      }
    }
    break;
  }
  return {message: message};
}
