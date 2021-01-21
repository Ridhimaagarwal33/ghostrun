var road,road_move;
var ghost,ghost_scary;
var gamestate="play";
var doors,doors_end;
var climber,climber_put;
var climbergroup;
function preload(){
road_move= loadImage("tower.png");
ghost_scary=loadAnimation("ghost-standing.png","ghost-jumping.png");
doors_end=loadImage("door.png");
climber_put=loadImage("climber.png");

}


function setup(){
createCanvas(600,600);
 // creating tower
road= createSprite(300,300,70,40);
road.addImage(road_move)
road.velocityY=+3
  
// creating ghost
ghost= createSprite(300,300,40,70);
ghost.addAnimation("scary",ghost_scary)
ghost.scale=0.5
ghost.setCollider("Circle",0,0,50)
  
//creating group
climbergroup=new Group();
  
}




function draw(){
  background(0)
if(gamestate==="play"){
  drawSprites();
if(road.y>400)
{
road.y=300
}
if(keyDown("right")){
ghost.x=ghost.x+2
}
if(keyDown("left")){
ghost.x=ghost.x-2
}
if(keyDown("space")){
ghost.velocityY=-10
}
ghost.velocityY=ghost.velocityY+0.8
door()
if(ghost.y>600||climbergroup.isTouching(ghost)){
   
  
gamestate="end"
 
}
}
if(gamestate==="end"){
stroke("Yellow")
fill("Red")
textSize(40)
text("Game Over",300,300)  

}
}

function door(){
if(frameCount%200===0){
doors=createSprite(150,-60,50,30);
doors.addImage(doors_end);
doors.velocityY=+2
doors.x=Math.round(random(120,400))
  
  climber=createSprite(150,0,50,30);
climber.addImage(climber_put);
climber.velocityY=+2
  climber.x=doors.x
  ghost.depth=doors.depth+1
  climbergroup.add(climber)
}
}
