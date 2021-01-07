const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var umbrella,drop,bg;
var maxDrops = 20;
var drops = [];
var thunder,thunder1,thunder2,thunder3,thunder4,thunder1_img,thunder2_img,thunder3_img,thunder4_img;
var thunderFrameCount;



function preload(){
    bg = loadImage("images/bg.jpg");
    thunder1_img = loadImage("images/thunderbolt/1.png");
    thunder2_img = loadImage("images/thunderbolt/2.png");
    thunder3_img = loadImage("images/thunderbolt/3.png");
    thunder4_img = loadImage("images/thunderbolt/4.png");
    
}

function setup(){
    createCanvas(500,700);
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(240,500);

    
    for(var i = 0; i<maxDrops; i++){
        drops.push(new Drop(random(0,500),random(0,650)))
    }
    console.log(drops.length);

}

function draw(){
    background(bg);
    Engine.update(engine);

   for (var i = 0; i < drops.length; i++) {
    drops[i].display();
    drops[i].update();
 }

    rand = Math.round(random(1,4));
    if(frameCount%50 === 0){
        thunderFrameCount = frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);

        switch(rand){
            case 1: thunder.addImage(thunder1_img);
            break;
            case 2: thunder.addImage(thunder2_img);
            break;
            case 3: thunder.addImage(thunder3_img);
            break;
            case 4: thunder.addImage(thunder4_img);
            break;
            default:break;
        }
        thunder.scale = 0.7;
    }
    if(thunderFrameCount+10 === frameCount){
        thunder.destroy();
    }
    umbrella.display();

    drawSprites();    
}   

