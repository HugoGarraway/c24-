const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3
var ground

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width/2,780,width,20)
    box1 = new Box(700,720,70,70);
    box2 = new Box(920,720,70,70)
    pig1 = new Pig(810,750)
    box3 = new Box(700,640,70,70)
    box4 = new Box(920,640,70,70)
    log1 = new Log(810,660,300,PI/2)
    log2 = new Log(810,580,300,PI/2)
    pig2 = new Pig(810,620)
    box5 = new Box(810,560,70,70)
    log3 = new Log(760,120,150,PI/7)
    log4 = new Log(870,120,150,PI/-7)
    bird = new Bird(100,632)
}


function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    pig1.display();
    box4.display();
   ground.display();
   box2.display();
   log1.display();
   box3.display();
   log2.display();
   pig2.display();
   log3.display();
   box5.display();
   log4.display();
   bird.display();
}