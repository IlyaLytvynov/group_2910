import "./lamp.scss";
import { getRandomColor } from "../utils";

export class Lamp {
  constructor(mountPoint, color = getRandomColor(), isClickable = true) {
    this.mountPoint = mountPoint; // DOMNode
    this.color = color; // string
    this.isActive = false; // boolean
    this.isClickable = isClickable; // boolean
    this.el = undefined;
    console.log(this);
  }

  render() {
    this.el = document.createElement("button"); // DOMNode lamp
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
