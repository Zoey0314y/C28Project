class Mango{
    constructor(x,y){
      var options = {
        isStatic : true,
        restitution : 0,
        friction : 1
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
      stroke ("yellow");
      strokeWeight(20);
      fill("yellow");
      rect(0,0,this.width,this.height);
      pop();
      
      
    }
  }