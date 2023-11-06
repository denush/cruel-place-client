import type { Person } from "../models/person";

export const player: Person = {
  id: 2,
  x: 30,
  y: 200,
  width: 80,
  height: 80,

  state: {
    direction: "down",
    isMoving: false,
  },
};
