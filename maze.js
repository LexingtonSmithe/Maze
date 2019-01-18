var exports = module.exports

function Create2DArray(rows) {
  var arr = [];
  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }
  return arr;
}

const maze = Create2DArray(5);
maze[0][0]="Free";
maze[0][1]="Free";
maze[0][2]="Free";
maze[0][3]="Goal";
maze[0][4]="Free";

maze[1][0]="Wall";
maze[1][1]="Free";
maze[1][2]="Wall";
maze[1][3]="Wall";
maze[1][4]="Free";

maze[2][0]="Free";
maze[2][1]="Free";
maze[2][2]="Start";
maze[2][3]="Wall";
maze[2][4]="Free";

maze[3][0]="Free";
maze[3][1]="Wall";
maze[3][2]="Free";
maze[3][3]="Free";
maze[3][4]="Free";

maze[4][0]="Free";
maze[4][1]="Free";
maze[4][2]="Free";
maze[4][3]="Wall";
maze[4][4]="Free";

exports.maze = maze;
exports.getStart = function() {
  for(var i=0; i<5; i++){
    for(var j=0; j<5; j++){
      if(maze[i][j] == "Start"){
        console.log(maze[i][j] + " X: " + i + " Y: " + j);
        var position = {
          "xpos": i,
          "ypos": j
        }
        return position;
        break;
      }
    }
  }
}
