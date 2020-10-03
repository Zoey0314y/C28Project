class Ground{
    constructor(x,y,width,height){
    
        var options = {
        isStatic : true
        
        }
        this.x = x;
        this.y = y;
        //this.rectangle = rectangle;
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body);
      
      
        }
        display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        stroke ("black");
        strokeWeight(20);
        fill("black");
        rect(0,0,this.width,this.height);
        pop();
        
        }
      }