
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1;
var stone1;
var ground;
var rubber1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	hammer1 = new Hammer(300, 600, 60, 30);

	stone1 = new Stone(100, 400, 60, 20)

	ground = new Ground(600,580,1200,20)

	rubber1 = new Rubber(200, 300, 20, 20)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(114, 180, 204);

  hammer1.display();
  stone1.display();
  ground.display();
  rubber1.display();
  
  drawSprites();
 
}



