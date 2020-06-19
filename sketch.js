function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200,80, 80);
  movingRect = createSprite(300,100,80,80);
}

function draw() {
  background(0,0,0);  

  movingRect.y = mouseY;
  movingRect.x = mouseX;

  if(movingRect.x - fixedRect.x < movingRect.width /2 + fixedRect.width /2 &&
    fixedRect.x - movingRect.x < movingRect.width /2 + fixedRect.width /2 &&
    movingRect.y - fixedRect.y < movingRect.height /2 + fixedRect.height /2 &&
    fixedRect.y - movingRect.y < movingRect.height /2 + fixedRect.height /2){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue"
  } else{
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }


  drawSprites();
}