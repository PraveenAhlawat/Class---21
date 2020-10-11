var fixedRect, movingRect;
var gameObject1 , gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(1000, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(100,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(400, 200, 50, 50);
  gameObject1.shapeColor = "green";
  
  gameObject2 = createSprite(500, 200, 50, 50);
  gameObject2.shapeColor = "green";

  gameObject3 = createSprite(600, 200, 50, 50);
  gameObject3.shapeColor = "green";

  gameObject4 = createSprite(700, 200, 50, 50);
  gameObject4.shapeColor = "green";

  movingRect.velocityX = 3;
  fixedRect.velocityX = -3;
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameObject2)){
    movingRect.shapeColor = "blue";
    gameObject2.shapeColor = "blue";
    //gameObject2.y = 100;
  }else{
    movingRect.shapeColor = "green";
    gameObject2.shapeColor = "green";
  }
  
  bounceOff(movingRect,fixedRect);
  drawSprites();
}

