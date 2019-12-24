import "./lighterDynamic.scss";
import { Lamp } from "../lamp";

const LIGHTS = ["red", "yellow", "green"];

export class Lighter {
  constructor(mp = document.querySelector("body")) {
    this.mountPoint = mp;
    this.lamps = [];
    this.activeIndex = 0;
  }

  render() {
    this.el = document.createElement("div");
    this.el.classList.add("traffic-lighter");
    this.renderLights();
    this.mountPoint.appendChild(this.el);
  }

  renderLights() {
    LIGHTS.forEach(color => {
      const lamp = new Lamp(this.el, color, false);
      lamp.render();
      this.lamps.push(lamp);
    });
  }

  start() {
    setInterval(() => {
      this.nextLight();
    }, 500);
  }

  toggleOff() {
    this.lamps[this.activeIndex].toggleOff();
  }

  toggleOn() {
    this.lamps[this.activeIndex].toggleOn();
  }

  nextLight() {
    this.toggleOff();
    if (this.activeIndex + 1 < this.lamps.length) {
      this.activeIndex += 1;
    } else {
      this.activeIndex = 0;
    }
    this.toggleOn();
  }
}
