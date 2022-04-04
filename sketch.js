var H1Image
var H2Image
var H3Image
var H4Image

var GunImage

var Trackmage

function preload(){
  
 Trackmage = loadImage("assets/PNG/Track.png")
 GunImage = loadImage("assets/PNG/Gun.png")
 H1Image = loadImage("assets/PNG/H 1.png")
 H2Image = loadImage("assets/PNG/H 2.png")
 H3Image = loadImage("assets/PNG/H 3.png")
 H4Image = loadImage("assets/PNG/H 4.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2+10,displayHeight/2-150,20,20)
  bg.addImage(Trackmage)

  player = createSprite(780,80,20,20)
  player.addImage("playerImage",H2Image)
  player.scale = 0.5;
}

function draw() {
  background(0); 



drawSprites();
}




