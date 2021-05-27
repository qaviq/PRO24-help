
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper1;
var ground1;
var dustbin1, dustbin2, dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world;


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(100,100);

	ground1 = new Dustbin(0,50,10,10);

	dustbin1 = new Dustbin(700,60,30,10);
	dustbin2 = new Dustbin(730,60,10,30);
	dustbin3 = new Dustbin(670,60,10,30);





  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);


  paper1.display();
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
  keyPressed();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
	}
}


