
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy;

function preload()
{
	//boy = loadImage();
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(200,200,50,50);
	//boy.addImagd();
	

	ground = new Ground(400,200,800,10);
	tree = new Tree(700,350,200,40);
	stone = new Stone(250,250,50,50);
	mango1 = new Mango(705,350,40,40);
	mango2 = new Mango(710,345,40,40);
	mango3 = new Mango(715,360,40,40);
	mango4 = new Mango(720,365,40,40);


	slinigshot = new Slingshot(stone.body,{x : 200, y : 100});

		//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);


  ground.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();;
  mango3.display();
  mango4.display();
  
  slingshot.dipslay();


  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x : mouseX, y : mouseY});
    
}
function keyPressed() {
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x : 235,y : 420});
		launcher.attach(stone.body);
		
	}

}


