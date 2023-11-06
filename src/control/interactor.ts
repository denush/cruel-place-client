import { State } from "../state/state";
import { MoveInteractor } from "./move_interactor";
import { ControlSubscriber, getInteractionCategory } from "./utils";
import { interactionsMapper } from "./interactions_mapper";

export class Interactor implements ControlSubscriber {
  private _moveInteractor: MoveInteractor;

  constructor(state: State) {
    this._moveInteractor = new MoveInteractor(state);
  }

  onButtonAction(
    button: string,
    action: "up" | "down",
    pushedButtons: Set<string>
  ) {
    const category = getInteractionCategory(button, interactionsMapper);

    switch (category) {
      case "move":
        this._moveInteractor.onButtonAction(button, action);
        break;
    }
  }

  update() {
    this._moveInteractor.update();
  }
}
