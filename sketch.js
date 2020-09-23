var icon;
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  icon=createSprite(200,200,10,10);
}

function draw() {
  background(0);  
  icon.shapeColor="red";
  icon.x=World.mouseX;
  icon.y=World.mouseY;
  if(icon.x>300 &&icon.y<140){
    background("yellow");
  }
  if(icon.x<150 &&icon.y>140){
    background("blue");
  }
  if(icon.x>150&&icon.y>150){
background(78)
  }
  drawSprites();
}