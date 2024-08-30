//Obtener el elemento canva y su contexto 2D
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

//Dibuja un rectangulo
ctx.fillStyle = 'red';//Establecer el color de relleno a rojo
ctx.fillRect(50, 50, 150, 100);// Posiciona y dimensiona el rectangulo

//Dibuja un circulo
ctx.beginPath();
ctx.arc(300, 100, 50, 0, 2 * Math.PI);
ctx.fillStyle = 'green';
ctx.fill();
ctx.strokeStyle = 'black';
ctx.stroket();
