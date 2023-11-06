import { State } from "../state/state";
import { entities } from "./mock_entities";
import { player } from "./mock_player";

export class WsClient {
  state: State;

  constructor(state: State) {
    this.state = state;
  }

  initPlayer() {
    this.state.entities.player = player;
  }

  initEntities() {
    this.state.entities.list = entities;
  }
}
