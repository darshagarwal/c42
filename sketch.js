var hours,hoursAngle;
var minu,minuAngle;
var sc,scAngle;
var twelve,twelveImg;
var one,oneImg;
var two,twoImg;
var three,threeImg;
var four,fourImg;
var five,fiveImg;
var six,sixImg;
var seven,sevenImg
var eight,eightImg;
var nine,nineImg;
var ten,tenImg;
var eleven,elevenImg;

function preload(){
   twelveImg = loadImage("12.png");
   oneImg = loadImage("1.png");
   twoImg = loadImage("2.png");
   threeImg = loadImage("3.png");
   fourImg = loadImage("4.png");
   fiveImg = loadImage("5.png");
   sixImg = loadImage("6.png");
   sevenImg = loadImage("7.png");
   eightImg = loadImage("8.png");
   nineImg = loadImage("9.png");
   tenImg = loadImage("10.png");
   elevenImg = loadImage("11.png");

}

function setup() {
   createCanvas(400,400);
  angleMode(DEGREES);
  twelve = createSprite(150,5,0,0);
  twelve.scale = 0.3;
  twelve.addImage(twelveImg);
  twelve.rotation = 90;

  one = createSprite(130,75,0,0);
  one.scale = 0.3;
  one.addImage(oneImg);
  one.rotation = 90;

  two = createSprite(80,130,0,0);
  two.scale = 0.3;
  two.addImage(twoImg);
  two.rotation = 90;

  three = createSprite(0,150,0,0);
  three.scale = 0.3;
  three.addImage(threeImg); 
  three.rotation = 90;

  four = createSprite(-80,150,0,0);
  four.scale = 0.3;
  four.addImage(fourImg); 
  four.rotation = 90;

  five = createSprite(-130,80,0,0);
  five.scale = 0.3;
  five.addImage(fiveImg); 
  five.rotation = 90;

  six = createSprite(-160,5,0,0);
  six.scale = 0.3;
  six.addImage(sixImg); 
  six.rotation = 90;
 
  seven = createSprite(-130,-80,0,0);
  seven.scale = 0.3;
  seven.addImage(sevenImg); 
  seven.rotation = 90;

  eight = createSprite(-80,-140,0,0);
  eight.scale = 0.3;
  eight.addImage(eightImg); 
  eight.rotation = 90;

  nine = createSprite(0,-160,0,0);
  nine.scale = 0.3;
  nine.addImage(nineImg); 
  nine.rotation = 90;

  ten = createSprite(80,-140,0,0);
  ten.scale = 0.3;
  ten.addImage(tenImg); 
  ten.rotation = 90;

  eleven = createSprite(135,-80,0,0);
  eleven.scale = 0.3;
  eleven.addImage(elevenImg); 
  eleven.rotation = 90;

}

function draw() {
  background("grey");

  translate(200,200)
  rotate(-90);
  
  hours = hour();
  minu = minute();
  sc = second();

  scAngle = map(sc,0,60,0,360);
  hoursAngle = map(hours,0,60,0,360);
  minuAngle = map(minu,0,60,0,360);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(minuAngle);
  stroke("green");
  strokeWeight(7);
  line(0,0,150,0);
  pop();

  push();
  rotate(hoursAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  rotate(three);

  drawSprites();

}