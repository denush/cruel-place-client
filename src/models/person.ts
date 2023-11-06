import type { Entity } from "./entity";

export interface Person extends Entity {
  state: {
    direction: "up" | "down" | "right" | "left";
    isMoving: boolean;
  };
}
