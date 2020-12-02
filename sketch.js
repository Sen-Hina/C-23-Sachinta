const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box,box2


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box = new Box(100,50,50,100);
    box2 = new Box(200,80,50,100)
}

function draw(){
    background(0);
    Engine.update(engine);
    box.display();
    box2.display();
}