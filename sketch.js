const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var sun, surajDada;
var wall, thickness;
var bullet, goli;

var ground , grnd;

var speed, weight;
var target , trgt;
var target1 , trgt1;

function preload() {
  

  surajDada = loadImage("sun.png");

 trgt = loadImage("target.png");

 grnd = loadImage("ground.png")

 goli = loadImage("bullet.png");
}

function setup() {
  createCanvas(1600, 400);

  speed = random(123, 223);
  weight = random(30, 52);

  thickness = random(22,83);

  wall = createSprite(1200, 250, thickness , height / 2);

  bullet = createSprite(10, 250, 40, 5);
  bullet.addImage(goli);
  bullet.scale = 0.10;

 

  sun = createSprite(1400, 50, 10, 10);
  sun.addImage("s", surajDada);
  sun.scale = 0.025;

  target = createSprite(1200 , 220 , 10 , 10);
  target.addImage(trgt);
  target.scale = 0.10;


  ground = createSprite(800,400,10,10);
  ground.addImage(grnd);
  ground.scale = 0.25;
  
 
  
  
}

function draw() {
  background("skyblue");

  wall.shapeColor = (80, 80, 80);

  bullet.velocityX = speed;

  
  if (itsDone(bullet , wall )) {
    bullet.velocityX = 0;

    var damage = 0.5 * weight * speed * speed / (thickness*thickness*thickness);

    if (damage > 10) {
      wall.shapeColor = color(255, 0, 0);
    }

    

    if (damage < 10) {
      wall.shapeColor = color(0, 255, 0);
    }
  }

  drawSprites();
}
function itsDone(bullet , wall ){

  bulletRightEdge = bullet.x ;
  wallLeftEdge = wall.x - 70;
  if(bulletRightEdge >= wallLeftEdge){
  
  
    
    return true
    
  }
  
  return false;


}

