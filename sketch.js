
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, bin1, bin2, bin3, ground1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Objects of bin
	bin1 = new Bin(420, 650, 20, 80);
	bin2 = new Bin(530, 680, 200, 20);
	bin3 = new Bin(630, 600, 20, 180); 
	bin4 = new Bin(565, 500, 150, 20)
	 
	//ground
	ground1 = new Ground(600, height, 1200, 20);
	
	//paper
	paper = new Paper(50, 640, 20, 20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);

  //Displaying
  ground1.display();
  paper.display();
  bin1.display();
  bin2.display();
  bin3.display();
  bin4.display();
  
  //Calling the keypressed function
  keypressed();	

  drawSprites();
 
}

function keypressed()
{

	//Condition when the up arrow is pressed
	if(keyCode === UP_ARROW)
	{

		Matter.Body.applyForce(paper.body, paper.body.position,{x:1, y:-3.20});

	}

}


