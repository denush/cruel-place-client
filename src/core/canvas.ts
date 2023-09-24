const canvas = document.getElementById("canvas-primary") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

if (!canvas || !ctx) {
  throw new Error("ERROR_INIT_CANVAS_OR_CTX");
}

canvas.width = 800;
canvas.height = 600;

canvas.style.border = "1px solid black";

export { canvas, ctx };
