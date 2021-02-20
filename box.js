class Box{
    constructor(x,y,w,h){
        var options = { 
            restitution: 1
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.width = w;
        this.height = h;
        World.add(world,this.body);
    }

    display(){
        var ps = this.body.position;
        var ag = this.body.angle;
        push();
        translate(ps.x,ps.y);
        rotate(ag);
        rectMode(CENTER);
        fill(255);
        rect(0,0,this.width,this.height);
        pop();
    }
};