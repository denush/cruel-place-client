import { Entity } from "../models/entity";
import { Person } from "../models/person";
import { StateObserver } from "./state_observer";

class EntitiesState {
  private _stateObserver;

  player: Person | null = null;
  list: Entity[] = [];

  constructor(stateObserver: StateObserver) {
    this._stateObserver = stateObserver;
  }

  initPlayer(player: Person) {
    this.player = player;
    this._stateObserver.onStateUpdate("player");
  }
}

export default EntitiesState;
