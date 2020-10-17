const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,object,ob2;
var ground, ball;

function setup() {
  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;

  object = Bodies.rectangle(100,100,20,20);
  World.add(world,object);

  var ob2_options  = {
    restitution: 0.5
  }
  ob2 = Bodies.rectangle(500,100,20,20, ob2_options);
  World.add(world,ob2);

  

  var ground_options = {
    isStatic: true
  }
  ground = Bodies.rectangle(300,390,600,20,ground_options);
  World.add(world,ground);

  var ball_options = {
    restitution: 1.1
  }
  ball = Bodies.circle(300,200,20,ball_options);
  World.add(world,ball);

  console.log(object);
}

function draw() {
  background(0);  

  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,20,20);
  rect(ob2.position.x,ob2.position.y,20,20);

  rect(ground.position.x, ground.position.y, 600,20);
  ellipse(ball.position.x,ball.position.y, 20);
  
}

//Matter.Bodies.polygon(x, y, sides, radius, [options])