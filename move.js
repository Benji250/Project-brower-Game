let runningBoy = 1;

function gameLoop() {
  runningBoy++;
  document.querySelector('.runningBoy').addClass('hidden');
document.querySelector('.runningBoy'+runningBoy).removeClass('hidden');

requestAnimationFrame(gameLoop);
}

gameLoop();



document.addEventListener('keydown', (event) => {
    if (event.code === 'Spacebar') gameLoop();
  });
  let jumpingBoy = 1;

function gameLoop() {
  runningBoy++;
  document.querySelector('.jumpingingBoy').addClass('hidden');
document.querySelector('.jumpingBoy'+jumpingBoy).removeClass('hidden');

requestAnimationFrame(gameLoop);
}

gameLoop();



document.addEventListener('keydown', (event) => {
    if (event.code === 'Spacebar') gameLoop();
  });