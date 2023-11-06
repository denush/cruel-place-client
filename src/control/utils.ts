export interface ControlSubscriber {
  onButtonAction: (
    button: string,
    action: "up" | "down",
    pushedButtons: Set<string>
  ) => void;
}

export type InteractionList = "moveUp" | "moveDown" | "moveLeft" | "moveRight";

interface InteractionDetails {
  button: string;
  category: "move";
}

export type InteractionsMapper = {
  [interactionName in InteractionList]: InteractionDetails;
};

export interface InteractorHoldState {
  moveUp: boolean;
  moveDown: boolean;
  moveLeft: boolean;
  moveRight: boolean;
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

export function getUsedButtons(
  interactionsMapper: InteractionsMapper
): Set<string> {
  const usedButtons = new Set<string>();

  for (const value of Object.values(interactionsMapper)) {
    usedButtons.add(value.button);
  }

  return usedButtons;
}

export function getInteractionCategory(
  button: string,
  interactionsMapper: InteractionsMapper
) {
  const values = Object.values(interactionsMapper);
  const finded = values.find((value) => value.button === button);

  if (finded) {
    return finded.category;
  }

  throw new Error("ERROR_FIND_BUTTON_INTERACTION_CATEGORY");
}
