import { ctx } from "../core";
import { player, persons, statics } from "../store";

export function renderEntities() {
  const entities = persons.concat(statics).concat(player);

  for (const entity of entities) {
    switch (entity.type) {
      case "player":
        ctx.fillStyle = "darkblue";
        break;
      case "person":
        ctx.fillStyle = "purple";
        break;
      case "static":
        ctx.fillStyle = "green";
        break;
      default:
        throw new Error("INVALID_ENTITY_TYPE");
    }

    ctx.fillRect(entity.x, entity.y, entity.width, entity.height);
  }
}
