import { getMouseButton, getUsedButtons } from "./utils";
import type { ControlSubscriber } from "./utils";
import { interactionsMapper } from "./interactions_mapper";

export class Control {
  private _pushedButtons: Set<string> = new Set();
  private _subscribers: ControlSubscriber[] = [];
  private readonly _usedButtons: Set<string>;

  constructor(subscribers: ControlSubscriber[]) {
    this._subscribers = subscribers;
    this._usedButtons = getUsedButtons(interactionsMapper);
  }

  init() {
    document.addEventListener("keydown", (event) => {
      this._onButtonAction(event.code, "down");
    });
    document.addEventListener("keyup", (event) => {
      this._onButtonAction(event.code, "up");
    });
    document.addEventListener("mousedown", (event) => {
      const button = getMouseButton(event);
      this._onButtonAction(button, "down");
    });
    document.addEventListener("mouseup", (event) => {
      const button = getMouseButton(event);
      this._onButtonAction(button, "up");
    });
  }

  private _onButtonAction(button: string, action: "up" | "down") {
    if (action === "down" && this._pushedButtons.has(button)) {
      return;
    }

    if (!this._usedButtons.has(button)) {
      return;
    }

    if (action === "down") {
      this._pushedButtons.add(button);
    } else if (action === "up") {
      this._pushedButtons.delete(button);
    }

    for (const subscriber of this._subscribers) {
      subscriber.onButtonAction(button, action, this._pushedButtons);
    }
  }
}
