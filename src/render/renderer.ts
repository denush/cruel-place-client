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
    this._clearScreen();
    this._renderEntities();
  }

  private _clearScreen() {
    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }

  private _renderEntities() {
    const entities = this._state.entities.list;
    const player = this._state.entities.player;

    for (const entity of entities) {
      if (entity.id === player?.id) {
        this._ctx.fillStyle = "black";
        this._ctx.fillRect(player.x, player.y, player.width, player.height);

        continue;
      }

      this._ctx.fillStyle = "darkblue";
      this._ctx.fillRect(entity.x, entity.y, entity.width, entity.height);
    }
  }
}
