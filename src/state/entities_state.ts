import { Entity } from "../models/entity";

class EntitiesState {
  player: Entity | null = null;
  list: Entity[] = [];
}

export default EntitiesState;
