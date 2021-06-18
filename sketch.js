const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var treeObj, stoneObj, groundObject;
var mango1,
  mango2,
  mango3,
  mango4,
  mango5,
  mango6,
  mango7,
  mango8,
  mango9,
  mango10,
  mango11,
  mango12;
var world, boy, bg;

//Declare launcherObject and launchForce variable here
var launcherObject;
var launchForce = 100;

function preload() {
  boy = loadImage("boy.png");
  bg = loadImage("bg.jpg");
}

function setup() {
  createCanvas(1480, 710);
  engine = Engine.create();
  world = engine.world;

  stoneObj = new stone(370, 420, 30);

  mango1 = new mango(1175, 230, 30);
  mango2 = new mango(1000, 150, 30);
  mango3 = new mango(1050, 250, 30);
  mango4 = new mango(1100, 150, 30);
  mango5 = new mango(1100, 70, 30);
  mango6 = new mango(1000, 220, 30);
  mango7 = new mango(900, 220, 40);
  mango8 = new mango(1130, 220, 40);
  mango9 = new mango(1000, 300, 40);
  mango10 = new mango(1200, 300, 40);
  mango11 = new mango(1120, 300, 40);
  mango12 = new mango(900, 300, 40);

  treeObj = new tree(1050, 650);

  groundObject = new ground(width / 2, 700, width, 20);

  //create launcherObject here
  launcherObject = new launcher(stoneObj.body, { x: 370, y: 420 });

  Engine.run(engine);
}

function draw() {
  background(bg);
  Engine.update(engine);

  textFont("Comic");
  stroke("green");
  fill("yellow");
  textSize(25);
  text("Press Space to get a second Chance to Play!!", 50, 50);
  image(boy, 200, 340, 200, 300);

  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  stoneObj.display();
  groundObject.display();
  // display launcher object here
  launcherObject.display();

  detectollision(stoneObj, mango1);
  detectollision(stoneObj, mango2);
  detectollision(stoneObj, mango3);
  detectollision(stoneObj, mango4);
  detectollision(stoneObj, mango5);
  detectollision(stoneObj, mango6);
  detectollision(stoneObj, mango7);
  detectollision(stoneObj, mango8);
  detectollision(stoneObj, mango9);
  detectollision(stoneObj, mango10);
  detectollision(stoneObj, mango11);
  detectollision(stoneObj, mango12);
}

//create mouseDragged function here
function mouseDragged() {
  Matter.Body.setPosition(stoneObj.body, { x: mouseX, y: mouseY });
}

//create mouseReleased function here
function mouseReleased() {
  launcherObject.fly();
}

//create keyPressed function here
function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, { x: 370, y: 420 });
    launcherObject.attach(stoneObj.body);
  }
}

function detectollision(lstone, lmango) {
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;

  var distance = dist(
    stoneBodyPosition.x,
    stoneBodyPosition.y,
    mangoBodyPosition.x,
    mangoBodyPosition.y
  );
  if (distance <= lmango.r + lstone.r) {
    Matter.Body.setStatic(lmango.body, false);
  }
}
