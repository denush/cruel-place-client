import { canvas, ctx } from "./core";

export default function main() {
  loop();
}

function loop() {
  requestAnimationFrame(loop);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  _animate();
}

/**
 * TEST FUNCTION TO ANIMATE RECT
 */

let x = 100;
let y = 100;
const radius = 40;

let xReverse = false;
let yReverse = false;

let color = _getRandomColorRGB();

const speed = 10;

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

function _animate() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (x - radius < 0) {
    xReverse = false;
    color = _getRandomColorRGB();
  }
  if (x + radius > canvas.width) {
    xReverse = true;
    color = _getRandomColorRGB();
  }
  if (y - radius < 0) {
    yReverse = false;
    color = _getRandomColorRGB();
  }
  if (y + radius > canvas.height) {
    yReverse = true;
    color = _getRandomColorRGB();
  }

  x += speed * (xReverse ? -1 : 1);
  y += speed * (yReverse ? -1 : 1);

  ctx.fillStyle = `rgb(
    ${color[0]},
    ${color[1]},
    ${color[2]}
  )`;

  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
}

function _getRandomColorRGB() {
  const r = _getRnd0to255();
  const g = _getRnd0to255();
  const b = _getRnd0to255();

  return [r, g, b] as const;
}

function _getRnd0to255() {
  return Math.ceil(Math.random() * 255);
}
