import "./lighterDynamic.scss";
import { createButton } from "../button/button";
import { createRoot } from "./root";
import { createLights } from "./lights";

const ROOT_CLASS_NAME = "traffic-lighter";
const ACTIVE_CLASS_NAME = "active";

export const trafficLighterDynamic = (
  trafficLighterMountPoint = document.querySelector("body")
) => {
  let isActive = false;
  const toggleOff = () => {
    for (let light of lights) {
      light.classList.remove(ACTIVE_CLASS_NAME);
    }
  };

  const onLightClick = light => {
    if (isActive === false) {
      return;
    }
    toggleOff();
    light.classList.add(ACTIVE_CLASS_NAME);
  };

  const clickHandler = () => {
    isActive = !isActive;
    toggleOff();
  };

  const lighterRoot = createRoot(trafficLighterMountPoint, ROOT_CLASS_NAME);
  const lights = createLights(lighterRoot, 3, onLightClick, ROOT_CLASS_NAME);
  createButton(lighterRoot, "Toggle", clickHandler);
};
