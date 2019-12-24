import "./lamp.scss";
import { getRandomColor } from "../utils";

export class Lamp {
  constructor(mountPoint, color = getRandomColor(), isClickable = true) {
    this.mountPoint = mountPoint;
    this.color = color;
    this.isActive = false;
    this.isClickable = isClickable;
    console.log(this);
  }

  render() {
    this.el = document.createElement("button");
    this.el.classList.add("lamp");
    this.el.addEventListener("click", () => {
      if (this.isClickable) {
        this.toggle();
      }
    });
    this.mountPoint.appendChild(this.el);
  }

  toggleOn() {
    this.el.style.background = this.color;
    this.isActive = true;
  }

  toggleOff() {
    this.el.style.background = "";
    this.isActive = false;
  }

  toggle() {
    if (this.isActive) {
      this.toggleOff();
    } else {
      this.toggleOn();
    }
  }
}
