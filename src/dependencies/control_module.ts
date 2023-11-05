import { Control } from "../control/control";
import { interations } from "../control/interactions";
import { Interactor } from "../control/interactor";

export const control = new Control([new Interactor()], interations);
