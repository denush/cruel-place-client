import { State } from "../state/state";
import { interactionsMapper } from "./interactions_mapper";
import {
  getCombinationMove,
  InteractionList,
  InteractorHoldState,
} from "./utils";

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

  onButtonAction(button: string, action: "up" | "down") {
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
    const player = this._state.entities.player!;
    player.state.isMoving = false;

    for (const [interactionName, hold] of Object.entries(this._holdState)) {
      if (!hold) {
        continue;
      }

      player.state.isMoving = true;

      const combination = getCombinationMove(
        interactionName as InteractionList,
        this._holdState
      );

      if (combination) {
        (this[combination as keyof this] as Function)();
      } else {
        (this[interactionName as keyof this] as Function)();
      }

      break;
    }
  }

  private moveUp() {
    const player = this._state.entities.player!;

    player.state.direction = "up";
    player.y -= 5;
  }

  private moveDown() {
    const player = this._state.entities.player!;

    player.state.direction = "down";
    player.y += 5;
  }

  private moveLeft() {
    const player = this._state.entities.player!;

    player.state.direction = "left";
    player.x -= 5;
  }

  private moveRight() {
    const player = this._state.entities.player!;

    player.state.direction = "right";
    player.x += 5;
  }

  private moveUpLeft() {
    const player = this._state.entities.player!;

    player.state.direction = "left";

    const moveComponent = 5 / Math.sqrt(2);
    player.x -= moveComponent;
    player.y -= moveComponent;
  }

  private moveUpRight() {
    const player = this._state.entities.player!;

    player.state.direction = "right";

    const moveComponent = 5 / Math.sqrt(2);
    player.x += moveComponent;
    player.y -= moveComponent;
  }

  private moveDownLeft() {
    const player = this._state.entities.player!;

    player.state.direction = "left";

    const moveComponent = 5 / Math.sqrt(2);
    player.x -= moveComponent;
    player.y += moveComponent;
  }

  private moveDownRight() {
    const player = this._state.entities.player!;

    player.state.direction = "right";

    const moveComponent = 5 / Math.sqrt(2);
    player.x += moveComponent;
    player.y += moveComponent;
  }
}
