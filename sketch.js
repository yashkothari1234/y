
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,dustbin;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball = new Paper(200,680,20,20);
ground = new Ground(600,height,1200,20);
box1 = new Box(710,660,10,70);
box2 = new Box(780,660,10,70);
box3 = new Box(750,690,70,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  keypressed();
  drawSprites();
 
}
function keypressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85 ,y:-85});
	}
}


