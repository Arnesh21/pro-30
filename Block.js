class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png");
      World.add(world, this.body);

      this.visibility = 255;
    }
    display(){
      console.log(this.body.speed);
      if(this.body.speed < 3){
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y, 30, 40);
      }
      else{
        World.remove(world, this.body);
        push();
        this.visiblity = this.visiblity - 5;
        tint(255,this.visiblity);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        pop();
      }

    }
}