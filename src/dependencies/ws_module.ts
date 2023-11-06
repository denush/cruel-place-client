import { WsClient } from "../data/ws_client";
import { state } from "./state_module";

export const wsClient = new WsClient(state);
