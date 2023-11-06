import EntitiesState from "./entities_state";

export class State {
  entities: EntitiesState;

  constructor() {
    this.entities = new EntitiesState();
  }
}
