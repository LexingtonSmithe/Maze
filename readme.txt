GET api/test
Check that the sever is up

GET api/look/?name=name:password=password
Get the view of the player passed through

POST api/newPlayer
Body:
{
	"name": "YourName",
	"password": "YourPassword"
}

PUT api/move/?name="YourName"&password="YourPassword"&direction="up"
*directions are lower case*
Move the player in the direction in the parameter
