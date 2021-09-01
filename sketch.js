//const matterMin = require("./matter.min");
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var rightside;
var leftside;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);

	//ground = new Ground(200,390,400,20);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,670,width,20);

	rightside = new Ground(1410,625,10,70);

	leftside = new Ground(1200,625,10,70);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.
	ball=Bodies.circle(200,450,25,ball_options);
	World.add(world,ball);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();

  rightside.display();

  leftside.display();

  ellipse(ball.position.x,ball.position.y,25);

  //keyPressed();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:85,y:-85});

	}
}


