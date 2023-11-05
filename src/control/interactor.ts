import type { ControlSubscriber } from "./utils";

export class Interactor implements ControlSubscriber {
  test = "blablabla";

  update(button: string, action: "up" | "down", pushedButtons: Set<string>) {
    console.log(`${button} is ${action}`);
    console.log(
      `currently pushed buttons: ${
        pushedButtons.size ? Array.from(pushedButtons).join(", ") : "none"
      }`
    );
  }
}
