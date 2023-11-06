export function renderDirection_test(
  ctx: CanvasRenderingContext2D,
  xPerson: number,
  yPerson: number,
  direction: "up" | "down" | "left" | "right"
) {
  const size = 10;

  let x;
  let y;

  switch (direction) {
    case "up":
      x = xPerson - size / 2;
      y = yPerson - 30 - size / 2;
      break;
    case "down":
      x = xPerson - size / 2;
      y = yPerson + 30 - size / 2;
      break;
    case "left":
      x = xPerson - 30 - size / 2;
      y = yPerson - size / 2;
      break;
    case "right":
      x = xPerson + 30 - size / 2;
      y = yPerson - size / 2;
      break;
  }

  ctx.fillRect(x, y, size, size);
}
