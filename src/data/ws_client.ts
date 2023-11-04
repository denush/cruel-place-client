import { State } from "../state/state";
import { entities } from "./mock_entities";

export class WsClient {
  state: State;

  constructor(state: State) {
    this.state = state;
  }

  initEntities() {
    this.state.entities.list = entities;
  }
}
