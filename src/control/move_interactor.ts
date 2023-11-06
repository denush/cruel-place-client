import { State } from "../state/state";
import { interactionsMapper } from "./interactions_mapper";
import type { InteractorHoldState } from "./utils";

export class MoveInteractor {
  private _state: State;
  private _holdState: InteractorHoldState = {
    moveUp: false,
    moveDown: false,
    moveLeft: false,
    moveRight: false,
  };

  constructor(state: State) {
    this._state = state;
  }

  onButtonAction(
    button: string,
    action: "up" | "down",
    pushedButtons: Set<string>
  ) {
    const findedInteraction = Object.entries(interactionsMapper).find(
      ([interactionName, details]) => details.button === button
    );

    if (!findedInteraction) {
      throw new Error("ERROR_NO_FINDED_MOVE_INTERACTION");
    }

    const interactionName = findedInteraction[0];

    this._holdState = {
      ...this._holdState,
      [interactionName]: action === "down",
    };
  }

  update() {
    for (const [interactionName, hold] of Object.entries(this._holdState)) {
      if (hold) {
        (this[interactionName as keyof this] as Function)();
      }
    }
  }

  private moveUp() {
    const player = this._state.entities.player;
    player!.y -= 5;
  }

  private moveDown() {
    const player = this._state.entities.player;
    player!.y += 5;
  }

  private moveLeft() {
    const player = this._state.entities.player;
    player!.x -= 5;
  }

  private moveRight() {
    const player = this._state.entities.player;
    player!.x += 5;
  }
}
