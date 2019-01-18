GET /test
Check that the sever is up

GET /look/?name=name:password=password
Get the view of the player passed through

POST /newPlayer
Body:
{
	"name": "Alex",
	"password": "banana"
}
Create a new player with the above properties

PUT /move/?name="name":password="password":direction="up"
Move the player in the direction in the parameter
