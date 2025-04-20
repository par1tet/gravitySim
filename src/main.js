const ctx = canvas.getContext("2d")
const ctxTr = trialCanvas.getContext("2d")

let bodyies = [
    new Body([WIDTH/2, HEIGHT/2], [0,0], [0,0], 10**18.6, 'orange', 10),
    new Body([WIDTH/2-300, HEIGHT/2-200], [190,500], [0,0], 10**12, 'white', 6),
    new Body([WIDTH/2+300, HEIGHT/2-200], [-90,170], [0,0], 10**10, 'cyan', 4)
]

let date = new Date();
let timePrev = date.getMilliseconds()
let newTime = timePrev

ctxTr.beginPath()
ctxTr.strokeStyle = "blue"

setInterval(() => {
    ctx.clearRect(0,0,WIDTH,HEIGHT)
    ctxTr.drawImage(trialCanvas, 0, 0)

    for(let i = 0;i != bodyies.length;i++){
        ctxTr.moveTo(bodyies[i].position[0],bodyies[i].position[1])
        bodyies[i].Update(0.01, bodyies, ctx)

        drawCircle(ctx, bodyies[i].position, bodyies[i].radius, bodyies[i].color)

        ctxTr.lineTo(bodyies[i].position[0], bodyies[i].position[1])
        //ctxTr.stroke()
    }

    let gridWidth = 15, gridHeight = 10;

    for(let x = gridWidth-1;x != 0;x--){
        for(let y = gridHeight-1;y != 0;y--){
            let gravityForcePoint = calculateGravityForce(bodyies, [WIDTH * x / gridWidth, HEIGHT * y / gridHeight]);
            let distance = Math.sqrt(gravityForcePoint[0] ** 2 + gravityForcePoint[1] ** 2)

            for(let i = 0;i != 2;i++){
                gravityForcePoint[i] /= distance;
                gravityForcePoint[i] *= 40;
            }

            drawArrow(ctx, [WIDTH * x / gridWidth, HEIGHT * y / gridHeight], gravityForcePoint, 'red', 1, 5)
            drawCircle(ctx, [WIDTH * x / gridWidth, HEIGHT * y / gridHeight], 5)
        }
    }
}, 10)