const dvd = document.getElementById("dvd");
const container = document.getElementById("container");
const dvd2 = document.getElementById("dvd2");

let x = 0;
let y = 0;
let veloctyX = 5;
let velocityY = 5;

let x_2 = 300;
let y_2 = 120;
let veloctyX2 = 10;
let velocityY2 = 5;

function moveDVD() {
  x += veloctyX;
  y += velocityY;
  x_2 += veloctyX2;
  y_2 += velocityY2;

  if (x + dvd.width >= container.offsetWidth || x <= 0) {
    veloctyX *= -1;
    dvd.style.backgroundColor = getRandomColor();
    playLaserSound();
  }
  if (y + dvd.height >= container.offsetHeight || y <= 0) {
    velocityY *= -1;
    dvd.style.backgroundColor = getRandomColor();
    playLaserSound();
  }

  if (x_2 + dvd2.width >= container.offsetWidth || x_2 <= 0) {
    veloctyX2 *= -1;
    dvd2.style.backgroundColor = getRandomColor();
    playLaserSound();
  }
  if (y_2 + dvd.height >= container.offsetHeight || y_2 <= 0) {
    velocityY2 *= -1;
    dvd2.style.backgroundColor = getRandomColor();
    playLaserSound();
  }
  
  dvd.style.left = x + "px";
  dvd.style.top = y + "px";

  dvd2.style.left = x_2 + "px";
  dvd2.style.top = y_2 + "px";

  window.requestAnimationFrame(moveDVD);
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function playLaserSound() {
  const laser = new Audio('sources/blaster.mp3');
  laser.play();
}
document.addEventListener("click", playLaserSound);


window.requestAnimationFrame(moveDVD);
