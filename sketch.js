const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var obj, eng, world, body;
var b1,b2,g1;
function setup() {
  createCanvas(400,400);
  eng = Engine.create();
  world = eng.world;
  b1 = new Box(200,300,50,50);
  b2 = new Box(240,100,50,100);
  g1 = new Ground(200,390,400,20);
}

function draw() {
  background(0);  
  Engine.update(eng);
  b1.display();
  b2.display();
  g1.display();
}