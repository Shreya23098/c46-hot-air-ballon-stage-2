var balloon, balloonImage;
var bg, bgImage;
var bottomGround, topGround;
var obstacleTop, obstacleTop1Img, obstacleTop2Img, obstacleTopGroup;
var obstacleBottom, obsBottom1Img, obsBottom2Img, obsBottom3Img;


function preload(){
  balloonImage = loadAnimation("assets/balloon1.png", "assets/balloon2.png","assets/balloon3.png");
  bgImage = loadImage("assets/bg.png");

  obstacleTop1Img = loadImage("assets/obsTop1.png");
  obstacleTop2Img = loadImage("assets/obsTop2.png");
  
  obsBottom1Img = loadImage("assets/obsBottom1.png");
  obsBottom2Img = loadImage("assets/obsBottom2.png");
  obsBottom3Img = loadImage("assets/obsBottom3.png");

}

function setup(){
  createCanvas(400,400);
  
  bg = createSprite(165,400,1,1);
  bg.addImage(bgImage);
  bg.scale = 1.3;

  balloon = createSprite(100,150,20,50);
  balloon.addAnimation("balloon",balloonImage);
  balloon.scale = 0.2;

  bottomGround = createSprite(100,390,800,20);

  topGround = createSprite(100,10,800,20);

  obstacleTopGroup = new Group();

}
function draw(){
  background("blue");

  if(keyDown("space")){
    balloon.velocityY  = -5;
  }
 // add gravity to balloon
  balloon.velocityY = balloon.velocityY +2;

  spawnObstaclesTop();
  spawmObstaclesBottom();
  drawSprites();
}

function spawnObstaclesTop(){
  if(World.frameCount % 50 === 0){
    obstacleTop = createSprite(400,50,50,50);
    obstacleTop.velocityX = -2;
    obstacleTop.y = Math.round(random(10,100));
    obstacleTop.scale = 0.1;

    var rand = Math.round(random(1,2));
     switch (rand) {
      case 1: obstacleTop.addImage(obstacleTop1Img);
              break;
      case 2: obstacleTop.addImage(obstacleTop2Img);
              break;
      default:
        break;
    }
    obstacleTop.lifetime = 100;
    obstacleTop.depth = balloon.depth;
    balloon.depth = balloon.depth+1;
    obstacleTopGroup.add(obstacleTop);
    
  }
  
}

function spawmObstaclesBottom(){
  if(World.frameCount % 50 === 0){
    obstacleBottom = createSprite(400,350,50,50);
    obstacleBottom.velocityX = -2;
    obstacleBottom.y = Math.round(random(300,350));
    obstacleBottom.scale = 0.1;
  }
}