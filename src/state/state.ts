import EntitiesState from "./entities_state";
import { StateObserver } from "./state_observer";

export class State {
  private _stateObserver;

  entities: EntitiesState;

  constructor(stateObserver: StateObserver) {
    this._stateObserver = stateObserver;
    this.entities = new EntitiesState(this._stateObserver);
  }
}
