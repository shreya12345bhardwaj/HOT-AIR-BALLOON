var balloon,balloonImage1,balloonImage2;
// create database and position variable here

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);


  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}
function keyPressed() 
{ if (keyCode === LEFT_ARROW) 
	{ balloon.x=balloon.x-20; 
}else if (keyCode === RIGHT_ARROW) 
  {balloon.x=balloon.x+20; 
} else if (keyCode === DOWN_ARROW) 
{ balloon.y=balloon.y+20
  balloon.scale=balloon.scale+0.1;
} else if (keyCode === UP_ARROW) 
{ balloon.y=balloon.y-20
  balloon.scale=balloon.scale-0.1;
} }
