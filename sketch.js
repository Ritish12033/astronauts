
var backgroundImg;
var brush;
var sleeping;
var gymming,gymming2;
var eating;
var bathing;
var drinking; 
var move;

var invisiblewall,invisiblewall2;

function preload(){

  backgroundImg = loadImage("iss.png");
  sleeping = loadImage("sleep.png");
  brush = loadImage("brush.png");
  gymming = loadAnimation("gym1.png","gym2.png");
  gymming2 = loadAnimation("gym11.png","gym12.png");
  bathing = loadAnimation("bath1.png","bath2.png");
  eating = loadAnimation("eat1.png","eat2.png");
  move = loadAnimation("move.png","move1.png");
  drinking = loadAnimation("drink1.png","drink2.png");

}

function setup() {
  background(0);
  createCanvas(1200,550);

  background = createSprite(600,200);
  background.addImage(backgroundImg);
  background.scale = 0.19;

  invisiblewall = createSprite(600,230,950,5);
  invisiblewall.visible = false;
  invisiblewall2 = createSprite(600,2,950,5);
  invisiblewall2.visible = false;

  

}

function draw() {  

  if (keyDown("s")){
  
    astronaut = createSprite(182, 250);
  astronaut.addImage("sleeping",sleeping);
  astronaut.scale = 0.10;

  }
  
  if (keyDown("up")){

    astronaut = createSprite(410, 360);
  astronaut.addImage("brushing",brush);
  astronaut.scale = 0.09;

  }
  
  if (keyDown("down")){

    astronaut = createSprite(510,280);
    astronaut.addAnimation("gym",gymming);
    astronaut.scale = 0.08;

    gym2();
  }
  if (keyDown("left")){
    
    astronaut = createSprite(910,360);
    astronaut.addAnimation("bath",bathing);
    astronaut.scale = 0.09;

  }
  if (keyDown("right")){

    astronaut1 = createSprite(600,110);
    astronaut1.addAnimation("eat",eating);
    astronaut1.scale = 0.09;
    
  }
  if (keyDown("d")){

    astronaut = createSprite(600,360);
    astronaut.addAnimation("drink",drinking);
    astronaut.scale = 0.09;

  }

  drawSprites();
  fill("blue");
  textSize(10);
  text("sleep 'S'",280,165);
  text("gym 'Down A'",270,175);
  text("drink 'D'",277,186);
  text("brush 'UP A'",270,197);
  text("eat 'Right A'",930,165);
  text("bath 'Left A'",930,177);
}
function gym2(){

  astronaut = createSprite(740,280);
    astronaut.addAnimation("gym",gymming2);
    astronaut.scale = 0.08;

}