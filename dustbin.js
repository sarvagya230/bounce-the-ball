class boxes
{
    constructor(x,y,width,height)
    {
        this.body=Matter.Bodies.rectangle(x,y,width,height,{restitution:0.3})
        this.width=width;
        this.height=height
        Matter.Body.setMass(this.body,10)
        World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER)
        fill(255)
        rect(0,0,this.width,this.height)
        pop()
    }
}