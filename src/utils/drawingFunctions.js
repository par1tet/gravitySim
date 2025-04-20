function drawCircle(ctx, x, y, radius, color = 'white'){
    ctx.fillStyle = color;

    ctx.beginPath();

    ctx.arc(x, y, radius, 0, Math.PI * 2)
    
    ctx.fill()
}

function drawArrow(ctx, coord, coordAdd, color = 'white'){
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;

    ctx.beginPath();

    ctx.moveTo(coord[0],coord[1])
    ctx.lineTo(coord[0] + coordAdd[0] + 8, coord[1] + coordAdd[1] + 8)

    ctx.closePath()

    ctx.stroke()
}