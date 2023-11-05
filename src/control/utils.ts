export interface ControlSubscriber {
  update: (
    button: string,
    action: "up" | "down",
    pushedButtons: Set<string>
  ) => void;
}

interface Interaction {
  type: "down" | "up" | "hold";
  button: string;
}

export interface Interactions {
  [interactionName: string]: Interaction;
}

export function getMouseButton(event: MouseEvent) {
  switch (event.button) {
    case 0:
      return "lmb";
    case 1:
      return "wheel";
    case 2:
      return "rmb";
    default:
      throw new Error("WRONG_MOUSE_BUTTON_ACTION");
  }
}

export function getUsedButtons(interactions: Interactions): Set<string> {
  const usedButtons = new Set<string>();

  for (const value of Object.values(interactions)) {
    usedButtons.add(value.button);
  }

  return usedButtons;
}
