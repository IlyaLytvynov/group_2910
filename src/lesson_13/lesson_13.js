import "./lesson_13.scss";
import { trafficLighter } from "./lighter";
import { trafficLighterDynamic } from "../common/lighterDynamic";
import { createButton } from "../common/button";
const trafficLights = document.querySelectorAll(".traffic-lighter");

for (const lighter of trafficLights) {
  trafficLighter(lighter);
}

trafficLighterDynamic();

createButton(document.querySelector("body"), "OPEN ALERt", () => {
  alert("HELLO!");
});

createButton(
  document.querySelector("body"),
  "Add lighter",
  () => {
    trafficLighterDynamic();
  },
  "success"
);

// trafficLighter(trafficLights[0]);
// trafficLighter(trafficLights[1]);
// trafficLighter(trafficLights[2]);
