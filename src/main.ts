import { renderer } from "./dependencies/renderer_module";
import { wsClient } from "./dependencies/ws_module";

export default function main() {
  wsClient.initEntities();
  wsClient.initPlayer();
  loop();
}

function loop() {
  requestAnimationFrame(loop);

  renderer.render();
}
