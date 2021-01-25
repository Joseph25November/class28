class Chain{
    constructor (bodyA,bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            length:150
        }
        this.rope = constraint.create(options)
        World.add(world,this.rope)
    }
    display(){
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x,this.rope.bodyB.position.y)
    }
}