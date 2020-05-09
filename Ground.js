class Ground{

constructor(x,y,width,height){
    var Options={
        'isStatic':true
    }
    
    this.ground = Bodies.rectangle(x, y, width, height, Options);
    this.width = width;
    this.height = height;

    World.add(world,this.ground)

}
        Display(){
            rectMode(CENTER)
            rect(this.ground.position.x,this.ground.position.y,this.width,this.height)
        }



}