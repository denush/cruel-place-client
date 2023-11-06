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

type CombinationMove =
  | "moveUpLeft"
  | "moveUpRight"
  | "moveDownLeft"
  | "moveDownRight";

export function getCombinationMove(
  interaction: InteractionList,
  holdState: InteractorHoldState
): CombinationMove | null {
  switch (interaction) {
    case "moveUp":
      if (holdState.moveLeft) return "moveUpLeft";
      if (holdState.moveRight) return "moveUpRight";
      break;
    case "moveDown":
      if (holdState.moveLeft) return "moveDownLeft";
      if (holdState.moveRight) return "moveDownRight";
      break;
    case "moveLeft":
      if (holdState.moveUp) return "moveUpLeft";
      if (holdState.moveDown) return "moveDownLeft";
      break;
    case "moveRight":
      if (holdState.moveUp) return "moveUpRight";
      if (holdState.moveDown) return "moveDownRight";
      break;
    default:
      throw new Error("ERROR_UNHANDLED_COMBINATION_MOVE");
  }

  return null;
}
