import type { Entity } from "../models/entity";

export class Camera {
  private _canvas;

  x: number = 0;
  y: number = 0;
  centerEntity: Entity | null = null;

  constructor(canvas: HTMLCanvasElement) {
    this._canvas = canvas;
  }

  setCenterEntity(entity: Entity) {
    this.centerEntity = entity;
  }

  update() {
    if (!this.centerEntity) {
      this.x = 0;
      this.y = 0;
      return;
    }

    this.x = this.centerEntity.x - this._canvas.width / 2;
    this.y = this.centerEntity.y - this._canvas.height / 2;
  }
}
