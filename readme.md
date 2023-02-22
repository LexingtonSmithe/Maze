Welcome! To the maze!
Can you use your API testing skills to navigate to the goal?


![](Images/The%20Maze.jpg)


Aimed at teaching new testers the fundamentals of API testing
This project is designed to be run on one server/computer with multiple users interrogating the maze using their own credentials via postman.

When running locally enter the command "node server.js" to start

or to host it online use

***UPDATE*** 
Heroku no longer has a free version
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

https://dashboard.render.com/

Endpoints:

GET: /api/health

Check that the sever is up and how many players there are

GET /api/player?name=playername&admin=administrator_password

Return all information about a player

GET /api/players

Return the names of all players that currently exist

DELETE /api/player?admin=administrator_password

Delete an individual player

DELETE /api/players?admin=administrator_password

Delete all players

POST: /api/player

body:
{
	"name": "player_name",
	"password": "player_password"
}

Create a new player

GET: /api/look/?name=player_name:password=player_password

See what is above below and either side of your current position.

PUT: /api/move/?name=player_name&password=player_password&direction=direction

Move the player in the direction:

*directions are lower case*

up

down

left

right
