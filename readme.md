Welcome! To the maze!
Can you use your API testing skills to navigate to the goal?


![](Images/The%20Maze.jpg)


Aimed at teaching new testers the fundamentals of API testing
This project is designed to be run on one (facilitators) computer with multiple users interrogating the maze using their own credentials via postman.

Enter the command "node server.js" to start.

Endpoints:
GET: api/test
Check that the sever is up and how many players there are.

POST: api/newPlayer
Body:
{
	"name": "YourName",
	"password": "YourPassword"
}

GET: api/look/?name=name:password=password
See what is above below and either side of your current position.


PUT: api/move/?name="YourName"&password="YourPassword"&direction="up"
*directions are lower case*
up
down
left
right
Move the player in the direction
