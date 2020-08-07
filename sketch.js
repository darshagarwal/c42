var hours,hoursAngle;
var minu,minuAngle;
var sc,scAngle;

function setup() {
   createCanvas(400,400);
  angleMode(DEGREES);

 
}

function draw() {
  background(255,255,255);  
  
  translate(200,200)
  rotate(-90)
  
  hours = hour();
  minu = minute();
  sc = second();

  scAngle = map(sc,0,60,0,360);
  hoursAngle = map(hours,0,60,0,360);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  /*push();
  rotate(hoursAngle);
  stroke("green");
  strokeWeight(7);
  line(50,200,300,100);
  pop();*/
}
