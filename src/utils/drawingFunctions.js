function drawCircle(ctx, position, radius, color = 'white'){
    ctx.fillStyle = color;

    ctx.beginPath();

    ctx.arc(position[0], position[1], radius, 0, Math.PI * 2)
    
    ctx.fill()
}

function drawArrow(ctx, coord, coordAdd, color = 'white', divisionC, addC){
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;

    ctx.beginPath();

    ctx.moveTo(coord[0],coord[1])
    ctx.lineTo(((coord[0] + coordAdd[0]) / divisionC) + addC, ((coord[1] + coordAdd[1]) / divisionC) + addC)

    ctx.closePath()

    ctx.stroke()
}