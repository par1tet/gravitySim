class Body {
    position;
    velocity;
    acceleration;
    mass;

    constructor(position, velocity, acceleration, mass){
        this.position = position;
        this.velocity = velocity;
        this.acceleration = acceleration;
        this.mass = mass;
    }

    Update(dTime, bodyies, ctx){
        let gravityAccelerationFull = [0,0]
        
        for(let i = 0;i != bodyies.length;i++){
            let distance = Math.sqrt((this.position[0] - bodyies[i].position[0])**2 + (this.position[1] - bodyies[i].position[1])**2)

            if(distance == 0) continue;

            const gravityCofficient = GRAVITY_CONSTANT * (bodyies[i].mass/(distance**2))
            let direction = [0,0]

            for(let j = 0;j != 2;j++){
                direction[j] = -(this.position[j] - bodyies[i].position[j])
            }

            let moduleDirectoin = Math.sqrt(direction[0]**2+direction[1]**2)

            for(let j = 0;j != 2;j++){
                direction[j] /= moduleDirectoin
            }

            let gravityAcceleration = [0,0];

            for(let j = 0;j != 2;j++){
                gravityAcceleration[j] = direction[j] * gravityCofficient
            }

            for(let j = 0;j != 2;j++){
                gravityAccelerationFull[j] += gravityAcceleration[j]
            }

            console.log(gravityAcceleration)
            
        }
        
        this.acceleration = gravityAccelerationFull

        for(let i = 0;i != 2;i++){
            this.velocity[i] += (this.acceleration[i] * dTime)
        }

        for(let i = 0;i != 2;i++){
            this.position[i] += (this.velocity[i] * dTime)
        }

        drawArrow(ctx, this.position, this.velocity, 'blue')
        drawArrow(ctx, this.position, this.acceleration, 'red')
    }
}