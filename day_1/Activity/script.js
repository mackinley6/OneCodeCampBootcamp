const canvas = document.getElementById('myCanvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.addEventListener('click', function (event) {
    const xOrigin = event.clientX;
    const yOrigin= event.clientY;
    handleClick(xOrigin, yOrigin);
  });

function handleClick(x, y) {
  const context = canvas.getContext('2d');
  const radius = Math.random() * 50 + 20;
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI);
  context.fillStyle = 'darkblue';
  context.fill();
}

