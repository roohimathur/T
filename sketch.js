
var bullet,wall;
var speed,thickness;
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 100);
  bullet.shapeColor = "blue";
  thickness = random(223,321);

  wall = createSprite(1200, 200,thickness, height/2);

  speed = random(55,90);
  weight = random(32,50);
  bullet.velocityX = speed;
}

function draw()
 {
  background("black"); 
  
  
  if(hasCollided(bullet,wall))
  {
 
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    console.log(damage);
    if(damage <10)
    {
      obj2.shapeColor = "green";
    }
    else if(damage>10)
    {
      obj2.shapeColor = "red";
    }
  }
   bullet.collide(wall);
  drawSprites();
}
/*function hasCollided(obj1,obj2)
{
  var bulletRightEdge = obj1.x + obj1.width;
  console.log("bulletX ="+ obj1.x);
  console.log("width ="+ obj1.width);

  var wallLeftEdge = obj2.x;
  console.log("walledge = "+wallLeftEdge);
  if(bulletRightEdge >= wallLeftEdge)
  {
    return true;
  }
  else
  {
  return false;
  }
}*/

function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}
  
  
    

  
