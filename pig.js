class Pig {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      translate(pos.x, pos.y)
      rotate(this.body.angle)
      rectMode(CENTER);
      strokeWeight(3.98456)
      stroke(143, 255, 0 )
      fill(113, 202, 0 );
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  