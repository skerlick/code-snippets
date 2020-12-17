;(function () {
console.log('Start')

let canvas, ctx

function init () {
    canvas = document.getElementById('viewCanvas')
    ctx = canvas.getContext('2d')

    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black'

    // Sky
    ctx.fillStyle = 'lightskyblue'
    ctx.fillRect(0, 0, 800, 280);

    // Grass
    ctx.fillStyle = 'lawngreen'
    ctx.fillRect(0, 280, 800, 520);
    

    // Right Side
    ctx.fillStyle = 'sandybrown'
    ctx.fillRect(415, 150, 160, 110);
    ctx.strokeStyle = 'black'
    ctx.strokeRect(415, 150, 160, 110);

    // Right Roof
    ctx.fillStyle = 'saddlebrown'
    ctx.beginPath();
    ctx.moveTo(415, 150);
    ctx.lineTo(415, 120);
    ctx.lineTo(570, 120);
    ctx.lineTo(590, 150);
    ctx.closePath();
    ctx.fill();

    //Main
    ctx.fillStyle = 'sandybrown'
    ctx.fillRect(100, 140, 315, 200);
    ctx.strokeStyle = 'black'
    ctx.strokeRect(100, 140, 315, 200);

    // Roof
    ctx.fillStyle = 'saddlebrown'
    ctx.beginPath();
    ctx.moveTo(85, 140);
    ctx.lineTo(100, 110);
    ctx.lineTo(415, 110);
    ctx.lineTo(430, 140);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = 'black'
    ctx.stroke();

    // Front Door
    ctx.fillStyle = 'darksalmon'
    ctx.fillRect(240, 260, 40, 80);
    ctx.strokeStyle = 'saddlebrown'
    ctx.lineWidth = 6;
    ctx.strokeRect(240, 260, 40, 80);
    ctx.lineWidth = 2;

    // Garage
    ctx.fillStyle = 'sandybrown'
    ctx.fillRect(415, 240, 180, 110);
    ctx.strokeStyle = 'black'
    ctx.strokeRect(415, 240, 180, 110);
    
    // Garage door
    ctx.fillStyle = 'bisque'
    ctx.fillRect(430, 260, 150, 90);
    ctx.strokeStyle = 'black'
    ctx.strokeRect(430, 260, 150, 90);

    // Garage Roof
    ctx.fillStyle = 'saddlebrown'
    ctx.beginPath();
    ctx.moveTo(405, 240);
    ctx.lineTo(415, 210);
    ctx.lineTo(595, 210);
    ctx.lineTo(605, 240);
    ctx.closePath();
    ctx.fill();
    
    // Windows Top Left
    ctx.fillStyle = 'aqua'
    ctx.strokeStyle = 'black'
    ctx.fillRect(130, 160, 80, 40);
    ctx.strokeRect(130, 160, 40, 40);
    ctx.strokeRect(170, 160, 40, 40);

    // Windows Top Right
    ctx.fillStyle = 'aqua'
    ctx.strokeStyle = 'black'
    ctx.fillRect(305, 160, 80, 40);
    ctx.strokeRect(305, 160, 40, 40);
    ctx.strokeRect(345, 160, 40, 40);

    // Windows Bottom Left
    ctx.fillStyle = 'aqua'
    ctx.strokeStyle = 'black'
    ctx.fillRect(140, 270, 60, 60);
    ctx.strokeRect(140, 270, 30, 30);
    ctx.strokeRect(170, 270, 30, 30);
    ctx.strokeRect(140, 300, 30, 30);
    ctx.strokeRect(170, 300, 30, 30);

    // Windows Bottom Right
    ctx.fillStyle = 'aqua'
    ctx.strokeStyle = 'black'
    ctx.fillRect(315, 270, 60, 60);
    ctx.strokeRect(315, 270, 30, 30);
    ctx.strokeRect(345, 270, 30, 30);
    ctx.strokeRect(315, 300, 30, 30);
    ctx.strokeRect(345, 300, 30, 30);
    
}

document.addEventListener('DOMContentLoaded', init)
})()