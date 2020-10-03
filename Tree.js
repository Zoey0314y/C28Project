class Tree {
    constructor(x,y){
      var options = {
        isStatic : true
      }
      this.x = x;
      this.y = y;
      //this.image = loadImage("sprites/bird.png");
      this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
      World.add(world,this.body);

    }
  
    display() {
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      stroke ("green");
      strokeWeight(20);
      fill("green");
      rect(0,0,this.width,this.height);
      pop();
      
      
    }
  }