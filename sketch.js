const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bg;
var appleImg;
var form;
var canvas;
var journey;
var aImg, bImg, cImg, dImg, eImg, fImg;
var alphabets;
var basketImg;
var gameState = 0;

let engine;
let world;

function preload() {
  bg = loadImage("assets/garden.jpg");
  appleImg = loadImage('assets/apple.png');
  aImg = loadImage('assets/A.png');
  bImg = loadImage('assets/B.png');
  cImg = loadImage('assets/C.png');
  dImg = loadImage('assets/D.png');
  eImg = loadImage('assets/E.png');
  fImg = loadImage('assets/F.png');
  basketImg = loadImage('assets/basket.png');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  form = new Form();
}


function draw() {
  background(bg);
  drawSprites();
 Engine.update(engine);

 if(gameState == 0){
  form.display();
 }

 if(gameState == 1){
  this.spawnAlphabets(aImg);
  this.spawnAlphabets(bImg);
  this.spawnAlphabets(cImg);
  this.spawnAlphabets(dImg);
  this.spawnAlphabets(eImg);
  this.spawnAlphabets(fImg);
 }
}

function spawnAlphabets(img){
  if(frameCount%60==0){
  var alphabets = createSprite(random(0,width), 20);   
  alphabets.addImage(img);
  alphabets.velocityY = 10;
  alphabets.scale = 0.5;
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}