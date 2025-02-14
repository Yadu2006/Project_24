class Paper{
    constructor(x, y, radius) {
        var options = {
            'isStatic': false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, radius, options);//Bodies.ellipse(x, y, radius, options);//(x, y, width, height, options);
        this.radius = radius;
        this.x = x;
        this.y = y;
        //this.height = height;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        //var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        strokeWeight(4);
        stroke("green");
        fill(255);
        ellipseMode(CENTER);
        ellipse(0, 0, this.radius, this.radius);
        pop();
      }
}