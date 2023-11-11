import { canvas, ctx } from "../core";
import { Renderer } from "../render/renderer";
import { state } from "./state_module";
import { camera } from "./camera_module";
import { stateObserver } from "./state_observer_module";

export const renderer = new Renderer(canvas, ctx, state, camera, stateObserver);
