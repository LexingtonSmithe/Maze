var exports = module.exports


// Look
exports.Look = function() {
  for(var i=0; i<5; i++){
    for(var j=0; j<5; j++){
      if(maze[i][j] == "Start"){
        console.log(maze[i][j] + " X: " + i + " Y: " + j);
        var view = {
          "Up": maze[i][j-1],
          "Down":maze[i][j+1],
          "Left":maze[i-1][j],
          "Right":maze[i+1][j]
        }
        console.log(view)
        return view;
        break;
      }
    }
  }
}

// Move
