class Cusor {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("https://i.ibb.co/rkyvGSQ/cusor.png")
      World.add(world, this.body);
    }
    
    display(){
      noteCordinates = this.body.position;

 rectMode(CENTER);
      rect(noteCordinates.x, noteCordinates.y, this.width, this.height);
      imageMode(CENTER);
     image(this.image,noteCordinates.x,noteCordinates.y,70,70);

    }
  };
