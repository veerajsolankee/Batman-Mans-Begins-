class Drop{
    constructor(x,y){
        var options = {
            'restitution':0.1,
            'friction':0.01
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.x = x;
        this.y = y;
        World.add(world,this.body);
    }

    update(){
        if(this.body.position.y > height){
          Matter.Body.setPosition(this.body,{x:random(0, 500), y:random(0, 650)});
        }
      }
    display(){
        ellipseMode(CENTER);
        noStroke()
        fill("blue");
        ellipse(this.body.position.x, this.body.position.y,this.r,this.r);
      }
}