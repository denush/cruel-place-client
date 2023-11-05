import { control } from "./dependencies/control_module";
import { renderer } from "./dependencies/renderer_module";
import { wsClient } from "./dependencies/ws_module";

export default function main() {
  control.init();
  wsClient.initEntities();
  wsClient.initPlayer();
  loop();
}

function loop() {
  requestAnimationFrame(loop);

  renderer.render();
}
