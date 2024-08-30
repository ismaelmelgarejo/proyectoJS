var a = document.getElementById("dibujo");
var ctx = a.getContext("2d");
ctx.beginPath();
ctx.arc(150, 100, 80, 0, 2 * Math.PI);
ctx.strokeStyle = "red";
ctx.fillStyle="blue"
ctx.stroke();