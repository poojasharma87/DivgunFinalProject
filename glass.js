class glass {
    constructor(x,y,width,height){
        this.image=loadImage("glass.jpg");
this.body=Bodies.rectangle(x,y,width,height);
World.add(world,this.body);

    }
  display(){
    push();
imageMode(CENTER)
image(this.image,this.body.position.x,this.body.position.y,100,100);
pop()
  }
}
