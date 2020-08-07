
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var thrash;
var Ground;
var dustbinBase;
var side1;
var side2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	

	//Create the Bodies Here.


	Engine.run(engine);
	thrash=new paper(100,200,20)
	Ground=new ground(400,600,800,20)
	dustbinBase=new boxes(500,200,200,20)
	side1=new boxes(380,300,40,80)
	side2=new boxes(620,550,40,80)
	Matter.Body.setMass(side2.body,100)
	Matter.Body.setMass(dustbinBase,100)
	side2.frictionAir=20;
	//Matter.Body.setVelocity(side2.body,3)
	
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Matter.Engine.update(engine)
  //keyPressed()
  thrash.display();
  Ground.display();
  dustbinBase.display()
  side1.display()
  side2.display()
  drawSprites();
 
}
function keyPressed()
{
	if(keyCode===UP_ARROW)
	{
	Matter.Body.applyForce(thrash.body,thrash.body.position,{x:400,y:-400})
	}
}



