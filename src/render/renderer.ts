import { State } from "../state/state";

export class Renderer {
  private _canvas: HTMLCanvasElement;
  private _ctx: CanvasRenderingContext2D;
  private _state: State;

  constructor(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    state: State
  ) {
    this._canvas = canvas;
    this._ctx = ctx;
    this._state = state;
  }

  render() {
    this._renderEntities();
  }

  private _renderEntities() {
    const entities = this._state.entities.list;

    for (const entity of entities) {
      this._ctx.fillStyle = "darkblue";
      this._ctx.fillRect(entity.x, entity.y, entity.width, entity.height);
    }
  }
}
