class Paper{
    constructor(x,y){
        var options= {
            isStatic: false,
            'restitution': 0.3,
            'friction': 0,
            'density': 1.2
        }
        this.body= Bodies.circle(x, y,30, options)
        this.r= 10
        this.image= loadImage("paper.png")
        World.add(world, this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0,0,this.r+70,this.r+70);
        pop();
    }

}