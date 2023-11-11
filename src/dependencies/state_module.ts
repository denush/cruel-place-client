import { State } from "../state/state";
import { stateObserver } from "./state_observer_module";

export const state = new State(stateObserver);
