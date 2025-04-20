function calculateGravityForce(bodyies, ourPosition){
    let gravityAccelerationFull = [0,0]
        
    for(let i = 0;i != bodyies.length;i++){
        let distance = Math.sqrt((ourPosition[0] - bodyies[i].position[0])**2 + (ourPosition[1] - bodyies[i].position[1])**2)

        if(distance == 0) continue;

        const gravityCofficient = GRAVITY_CONSTANT * (bodyies[i].mass/(distance**2))
        let direction = [0,0]

        for(let j = 0;j != 2;j++){
            direction[j] = -(ourPosition[j] - bodyies[i].position[j])
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

    return gravityAccelerationFull
}