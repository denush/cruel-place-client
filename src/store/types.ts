interface Entity {
  type: "player" | "person" | "static";
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Person extends Entity {}
export interface Static extends Entity {}
