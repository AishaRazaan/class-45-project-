var ninja,ninjaImg
var bg , bgImg
var building,building1Img,building2Img,building3Img,building4Img,buildingGrp;
var coin,coinImg;


function preload(){
ninjaImg = loadAnimation("assets/ninja1.png","assets/ninja2.png","assets/ninja3.png","assets/ninja4.png","assets/ninja5.png","assets/ninja6.png")
bgImg = loadImage("assets/city.jpg");
building1Img = loadImage("assets/building1.png");
building2Img = loadImage("assets/building2.png");
building3Img = loadImage("assets/building3.png");
building4Img = loadImage("assets/building4.png");
coinImg = loadAnimation("assets/coin1.png","assets/coin2.png","assets/coin3.png","assets/coin4.png","assets/coin5.png","assets/coin6.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  //bg = createSprite(width/2,height/2)
  //bg.addImage("sky",bgImg);
  //bg.scale = 9
 
  ninja = createSprite(180,height / 2 - 50)
  ninja.scale = 1.5
  ninja.addAnimation("run",ninjaImg);

  ninja.setCollider("rectangle",0,0,50,100)

  buildingGrp = createGroup();

  building = createSprite(200, height / 2 + 200);
  building.addImage("building",building1Img);
  building.scale = 1.8
  building.velocityX = -2

  buildingGrp.add(building)
  building.debug = true
  building.setCollider("rectangle",0,0,200,200)

  building = createSprite(width/2 - 90, height / 2 + 200);
  building.addImage("building",building2Img);
  building.scale = 1.5
  building.velocityX = -2
  
  buildingGrp.add(building)
  building.debug = true
  building.setCollider("rectangle",0,0,250,290)

  building = createSprite(width/2 + 400, height / 2 + 200);
  building.addImage("building",building3Img);
  building.scale = 1.8
  building.velocityX = -2

  buildingGrp.add(building)
  building.debug = true
  building.setCollider("rectangle",0,0,170,270)

  building = createSprite(width/2 + 800, height / 2 + 200);
  building.addImage("building",building4Img);
  building.scale = 1.8
  building.velocityX = -2

  buildingGrp.add(building)
  building.debug = true
  building.setCollider("rectangle",0,0,150,170)
  ninja.debug = true

  
}

function draw() {
  background(bgImg); 
 // ninja.x=camera.position.x;
  if(keyDown(RIGHT_ARROW)){
    ninja.x=ninja.x+10
  }

  if(keyDown(UP_ARROW)){
    ninja.velocityY = -12
  }  

  ninja.velocityY = ninja.velocityY + 0.5
  ninja.collide(buildingGrp);

  
  spawnBuilding();

  //bg.velocityX=-3

    //if(bg.x<400)
    //{
      // bg.x=700
    //}
  drawSprites();
}

function spawnBuilding(){

  if(frameCount % 200 === 0){
    building = createSprite(width + 100, height / 2 + 200);
    var rand = Math.round(random(1,4));
    switch(rand){
      case 1: building.addImage("building",building1Img);
              building.scale = 1.8
              building.setCollider("rectangle",0,0,200,200)
              break;
      case 2: building.addImage("building",building2Img);
              building.scale = 1.5
              building.setCollider("rectangle",0,0,250,290)
              break;
      case 3: building.addImage("building",building3Img); 
              building.scale = 1.8
              building.setCollider("rectangle",0,0,170,270)
              break;
      case 4: building.addImage("building",building4Img); 
              building.scale = 2 
              building.setCollider("rectangle",0,0,150,170)
              break;                   
    }
    
    building.velocityX = -2
    
    building.lifetime = 1000
    buildingGrp.add(building)

    coin = createSprite(building.x+100,building.y-200);
    coin.addAnimation("star",coinImg);
    coin.scale = 0.5
  }
}

