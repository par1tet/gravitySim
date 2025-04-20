const canvas = (document.getElementById('mainCanvas'))

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d")

const WIDTH = canvas.width
const HEIGHT = canvas.height

let bodyies = [
    new Body([WIDTH/2, HEIGHT/2], [0,0])
]

function drawCircle(ctx, x, y, radius, color = 'white'){
    ctx.fillStyle = color;

    ctx.beginPath();

    ctx.arc(x, y, radius, 0, Math.PI * 2)
    
    ctx.fill()
}

let i = 0

for(let i = 0;i != bodyies.length;i++){
    console.log(bodyies[i])
    drawCircle(ctx, bodyies[i].position[0], bodyies[i].position[1], 8)
}