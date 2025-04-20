class Body {
    position;
    velocity;
    acceleration;
    mass;
    color;
    radius;

    constructor(position, velocity, acceleration, mass, color, radius){
        this.position = position;
        this.velocity = velocity;
        this.acceleration = acceleration;
        this.mass = mass;
        this.color = color;
        this.radius = radius;
    }

    Update(dTime, bodyies, ctx){
        this.acceleration = calculateGravityForce(bodyies, this.position)

        for(let i = 0;i != 2;i++){
            this.velocity[i] += (this.acceleration[i] * dTime)
        }

        for(let i = 0;i != 2;i++){
            this.position[i] += (this.velocity[i] * dTime)
        }

        //drawArrow(ctx, this.position, this.velocity, 'blue')
        //drawArrow(ctx, this.position, this.acceleration, 'red')
    }
}