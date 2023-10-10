import { canvas, ctx } from "./core";
import { renderEntities } from "./render";

export default function main() {
  loop();
}

function loop() {
  requestAnimationFrame(loop);

  render();
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  renderEntities();
}
