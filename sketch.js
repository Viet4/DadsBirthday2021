const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bg, logo, pencil, wood;
var fastener, fastener2, fastenerCount = 0;
var tool, toolSwitch = 0;
var screw, nail, bolt, nut, bolt_nut;
var screwdriver, hammerV, hammerH, wrenchV, wrenchH;
var fastenerArray = [];
var dWidth, dHeight;
var button1, button2, button3, buttonImg;

var a1, a2, b, d, h1, h2, i, p1, p2, r, t, y1, y2;
var letters = [false, false, false, false, false, false, false, false, false, false, false, false, false];

function preload(){
  bg = loadImage("images/background.jpg");
  logo = loadImage("images/logo.png");
  buttonImg = loadImage("images/button.png");

  screw = loadImage("images/screw.png");
  nail = loadImage("images/nail.png");
  bolt = loadImage("images/bolt.png");
  nut = loadImage("images/nut.png");
  bolt_nut = loadImage("images/nut_bolt.png");

  screwdriver = loadImage("images/screwdriver.png");
  hammerV = loadImage("images/hammerV.png");
  hammerH = loadImage("images/hammerH.png");
  wrenchV = loadImage("images/wrenchV.png");
  wrenchH = loadImage("images/wrenchH.png");

  wood = loadImage("images/wood.png");
  pencil = loadImage("images/pencil.png");

  a1 = loadImage("images/letters/a1.png");
  a2 = loadImage("images/letters/a2.png");
  b = loadImage("images/letters/b.png");
  d = loadImage("images/letters/d.png");
  h1 = loadImage("images/letters/h1.png");
  h2 = loadImage("images/letters/h2.png");
  i = loadImage("images/letters/i.png");
  p1 = loadImage("images/letters/p1.png");
  p2 = loadImage("images/letters/p2.png");
  r = loadImage("images/letters/r.png");
  t = loadImage("images/letters/t.png");
  y1 = loadImage("images/letters/y1.png");
  y2 = loadImage("images/letters/y2.png");
}

function setup() {
  dWidth = displayWidth;
  dHeight = displayHeight;
  createCanvas(dWidth,dHeight);

  //console.log(dWidth);
  //console.log(dHeight);
  
  engine = Engine.create();
  world = engine.world;

  tool = new Tool(dWidth*.7,dHeight*.6, 250, 250);

  fastener = createSprite(dWidth/2,dHeight*.625 - 200, -1, -1);
  fastener2 = createSprite(dWidth/2,dHeight*.625 + 150, -1, -1);

  button1 = createSprite(dWidth*.25, dHeight*.5, -1, -1);
  button2 = createSprite(dWidth*.5, dHeight*.5, -1, -1);
  button3 = createSprite(dWidth*.75, dHeight*.5, -1, -1);

  button1.addImage(buttonImg);
  button2.addImage(buttonImg);
  button3.addImage(buttonImg);
}

function draw() {
  background(bg); 
  
  Engine.update(engine);

  if (fastenerArray.length === 0 && frameCount > 10) {
    imageMode(CENTER);
    image(logo,dWidth*.5,dHeight*.125,1043,241);
    drawSprites();
    
    button1.scale = 1;
    button2.scale = 1;
    button3.scale = 1;

    textAlign(CENTER);
    fill("#FFFFFF");
    textSize(30);
    textFont("Candara");
    noStroke();

    image(screw, dWidth*.25, dHeight*.5 - 15, 150, 150);
    image(nail, dWidth*.5, dHeight*.5 - 15, 150, 150);
    image(bolt_nut, dWidth*.75, dHeight*.5 - 15, 150, 150);

    text("Screw", dWidth*.25, dHeight*.5 + 75);
    text("Nail", dWidth*.5, dHeight*.5 + 75);
    text("Nut & Bolt", dWidth*.75, dHeight*.5 + 75);

    textAlign(CENTER);
    fill("#F4B409");
    textSize(80);
    textFont("Candara");
    stroke("#212100");
    strokeWeight(5);

    text("Select a Fastener to use", dWidth*.5, dHeight*.75);
  }
  else if (fastenerArray.length === 1 && frameCount > 10) {
    imageMode(CENTER);
    image(logo,dWidth*.5,dHeight*.125,1043,241);
    drawSprites();

    button1.scale = 1;
    button2.scale = 1;
    button3.scale = 1;

    textAlign(CENTER);
    fill("#FFFFFF");
    textSize(30);
    textFont("Candara");
    noStroke();

    image(hammerV, dWidth*.25, dHeight*.5 - 15, 150, 150);
    image(wrenchV, dWidth*.5, dHeight*.5 - 15, 150, 150);
    image(screwdriver, dWidth*.75, dHeight*.5 - 15, 150, 150);

    text("Hammer", dWidth*.25, dHeight*.5 + 75);
    text("Wrench", dWidth*.5, dHeight*.5 + 75);
    text("Screwdriver", dWidth*.75, dHeight*.5 + 75);

    textAlign(CENTER);
    fill("#F4B409");
    textSize(80);
    textFont("Candara");
    stroke("#212100");
    strokeWeight(5);

    text("Select the Correct Tool to use", dWidth*.5, dHeight*.75);
  }
  else if (fastenerArray.length >= 2) {
    button1.lifetime = 0;
    button2.lifetime = 0;
    button3.lifetime = 0;

    bg = "#F8E337";

    if (fastenerArray[0] === fastenerArray[1] + 1 || fastenerArray[0] === fastenerArray[1] - 2){
      imageMode(CENTER);
      image(logo,dWidth*.5,dHeight*.125,1043,241);

      if (fastenerArray[0] === 1) {
        fastener.addImage(screw);
        fastener.scale = .5;
      }
      else if (fastenerArray[0] === 2) {
        fastener.addImage(nail);
        fastener.scale = .5;
      }
      else if (fastenerArray[0] === 3) {
        fastener.addImage(bolt);
        fastener2.addImage(nut);
        fastener.scale = .5;
        fastener2.scale = .5;
      }

      drawSprites();

      imageMode(CENTER);
      image(wood,dWidth/2,dHeight*.625,500,500);  

      if (fastener.y > dHeight*.625) {
        checkMouse();
        showLetters();
      }

      tool.display(screwdriver, hammerV, hammerH, wrenchV, wrenchH, pencil);
    }
    else {
      button1.lifetime = 0;
      button2.lifetime = 0;
      button3.lifetime = 0;
  
      bg = "#eb4034";
      
      textAlign(CENTER);
      fill("#F4B409");
      textSize(80);
      textFont("Candara");
      stroke("#212100");
      strokeWeight(5);
  
      text("You Chose the WRONG Tool!", dWidth*.5, dHeight*.5);
    }
  }

  if (frameCount > 10 && fastenerArray.length <= 2){
    if (mousePressedOver(button1)) {
      fastenerArray.push(1);
      frameCount = 0;
    }
    else if (mousePressedOver(button2)) {
      fastenerArray.push(2);
      frameCount = 0;
    }
    else if (mousePressedOver(button3)) {
      fastenerArray.push(3);
      frameCount = 0;
    }
  }

  //console.log(mouseX)
  //console.log(fastener.y)
  //console.log(dHeight*.625)
}

function mouseDragged(){
  if(fastenerArray.length >= 2 && frameCount > 10){
    Matter.Body.setPosition(tool.body, {x: mouseX , y: mouseY});
    toolSwitch = 1;
    if (mouseX > dWidth/2-100 && mouseX < dWidth/2+100 && mouseY < fastener.y - 50 && mouseY > fastener.y - 150) {
      if (toolSwitch === 0) {
        toolSwitch = 1;
      }
      if (frameCount >= 15 && fastener.y <= dHeight*.625) {
        fastener.y = fastener.y + 5;
        fastener2.y = fastener2.y - 1.6;
        frameCount = 10;
      }
    }
  }
}

function mouseReleased(){
  if(fastenerArray.length >= 2 && frameCount > 10){
    toolSwitch = 0;
  }
}