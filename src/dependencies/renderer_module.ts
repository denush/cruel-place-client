import { canvas, ctx } from "../core";
import { Renderer } from "../render/renderer";
import { state } from "./state_module";

export const renderer = new Renderer(canvas, ctx, state);
