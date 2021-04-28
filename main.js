import './style.css';

const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const images = {};
images.character = new Image();
images.character.src = './assets/jsont01.png';

const characterActions = ['1row'];

class Character {
  constructor() {
    this.width = 152;
    this.height = 227;
    this.frameX = 0;
    this.frameY = 0;
    this.x = canvas.width / 2;
    this.y = canvas.height / 2 - 150;
    this.speed = 1;
    this.action = characterActions[0];
    if (this.action === '1row') {
      this.frameY = 6;
      this.minFrame = 0;
      this.maxFrame = 11;
    }
  }

  draw() {
    drawSprite(
      images.character,
      this.width * this.frameX,
      this.height * this.frameY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );

    if (this.frameX < this.maxFrame) {
      this.frameX++;
    } else {
      this.frameX = this.minFrame;
    }
  }
}

const girl = new Character();

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
  ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  console.log('run');

  girl.draw();
}

window.onload = setInterval(animate, 1000 / 10);

window.addEventListener('resize', () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});
