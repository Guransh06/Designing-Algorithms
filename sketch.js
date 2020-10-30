var fix,moving;

function setup() {
  createCanvas(800,400);
  fix=createSprite(200, 200, 50, 50);
  fix.shapeColor="orange";
fix.debug=true;

  moving=createSprite(400,200,80,30);
  moving.shapecolor='yellow';
  moving.debug=true;
}

function draw() {
  background("pink");  
  moving.x=World.mouseX;
  moving.y=World.mouseY;
  if(moving.x-fix.x<moving.width/2+fix.width/2&&
    fix.x-moving.x<moving.width/2+fix.width/2&&
    moving.y-fix.y<moving.width/2+fix.width/2&&
    fix.y-moving.y<moving.width/2+fix.width/2){
    moving.shapeColor="red";
    fix.shapeColor="red";
  }
  else{
    moving.shapeColor="yellow";
    fix.shapeColor="orange";
  }
  drawSprites();
}