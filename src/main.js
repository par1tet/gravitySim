const ctx = canvas.getContext("2d")

let bodyies = [
    new Body([WIDTH/2, HEIGHT/2], [0,0], [0,0], 2 * (10**17)),
    new Body([WIDTH/2, HEIGHT/2-240], [-200,0], [0,0], 10000)
]

let date = new Date();
let timePrev = date.getMilliseconds()
let newTime = timePrev

setInterval(() => {
    ctx.clearRect(0,0,WIDTH,HEIGHT)
    for(let i = 0;i != bodyies.length;i++){
        bodyies[i].Update(0.01, bodyies, ctx)

        drawCircle(ctx, bodyies[i].position[0], bodyies[i].position[1], 8)
    }
}, 10)