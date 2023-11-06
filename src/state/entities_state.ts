import { Entity } from "../models/entity";
import { Person } from "../models/person";

class EntitiesState {
  player: Person | null = null;
  list: Entity[] = [];
}

export default EntitiesState;
