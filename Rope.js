class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY},
            length:10,
            stiffness:0.04,
        }
     this.rope=Constraint.create(options)
     World.add(world,this.rope);
    }

    display(){
        var pointa=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;

        line(pointa.x,pointa.y,pointB.x,pointB.y);
    }
}