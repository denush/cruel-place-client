import type { Interactions } from "./utils";

export const interations: Interactions = {
  startMoveUp: { type: "down", button: "KeyW" },
  endMoveUp: { type: "up", button: "KeyW" },
  moveUp: { type: "hold", button: "KeyW" },
};
