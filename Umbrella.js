class Umbrella{
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(x, y, 20, options);
        this.image = loadImage("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png");
        this.x = x;
        this.y = y;
        // this.r = 20;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;		
        push()
        translate(pos.x,pos.y);
        rectMode(CENTER)
        //strokeWeight(4);
        // fill(255,0,255)
        imageMode(CENTER);
        image(this.image, 0,0,this.r, this.r)
        pop()
      }
}