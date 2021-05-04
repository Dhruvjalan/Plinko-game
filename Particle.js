class Particle {
    constructor(a,b,c,d) {
        var options = {
            friction: 1,
            density : 1
        }
        this.r = 10;
        this.body = Bodies.circle(a, b, this.r, options)
        
       this.red = random(0,255);
       this.green = random(0,255);
       this.blue = random(0,255); 
        
        World.add(world, this.body);
    }
    display(r,g,b) {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
       translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill(this.red, this.green, this.blue);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();

}

}