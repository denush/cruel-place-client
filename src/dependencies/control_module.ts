import { Control } from "../control/control";
import { interactionsMapper } from "../control/interactions_mapper";
import { interactor } from "./interactor_module";

export const control = new Control([interactor]);
