class paper{
    constructor(x,y,radius)
    {
        var options=
        {
            isStatic:false,
            density:10.2,
            friction:3.7,
            


        }
      

        this.body=Matter.Bodies.circle(x,y,radius,options);
        this.radius=radius;
        Matter.World.add(world,this.body)
       
    
    }
    display()
    {
        var pos = this.body.position
        push();
        translate(pos.x,pos.y)
        ellipseMode(RADIUS)
        fill("purple")
        ellipse(0, 0, this.radius, 0);
        pop()


    }
}