import { getRandomColor } from "../utils";
import "./clock.scss";

const MODES = {
  SHORT: 0,
  FULL: 1,
  DATE_SHORT: 2
};

export class Clock {
  static create(mp) {
    const clock = new Clock(mp);
    clock.init();
    return clock;
  }
  constructor(mp = document.querySelector("body")) {
    this.mp = mp;
    this.mode = MODES.FULL;
  }

  init() {
    this.render();
    this.updateContent();
    this.initInterval();
  }

  render() {
    this.container = document.createElement("div");
    this.content = document.createElement("div");

    this.container.classList.add("container");
    this.content.classList.add("content");
    this.container.appendChild(this.content);
    this.container.addEventListener("click", () => {
      this.nextMode();
    });
    this.mp.appendChild(this.container);
    this.changeBg();
  }

  changeBg() {
    this.container.style.backgroundColor = getRandomColor();
  }

  nextMode() {
    if (this.mode + 1 < Object.keys(MODES).length) {
      this.mode += 1;
    } else {
      this.mode = 0;
    }
    this.changeBg();
    this.updateContent();
  }

  getDate() {
    const cd = new Date();
    const hour = this.normalizeTime(cd.getHours());
    const minute = this.normalizeTime(cd.getMinutes());
    const second = this.normalizeTime(cd.getSeconds());
    const day = this.normalizeTime(cd.getDay());
    const month = cd.getMonth();
    const year = cd.getFullYear();
    return {
      hour,
      minute,
      second,
      day,
      month,
      year
    };
  }

  renderFull() {
    const { hour, minute, second } = this.getDate();
    this.content.textContent = `${hour}:${minute}:${second}`;
  }

  renderShort() {
    const { hour, minute } = this.getDate();
    this.content.textContent = `${hour}:${minute}`;
  }

  renderDateShort() {
    const { day, month, year } = this.getDate();
    this.content.textContent = `${day}/${month}/${year}`;
  }

  initInterval() {
    setInterval(() => {
      this.updateContent();
    }, 1000);
  }

  updateContent() {
    switch (this.mode) {
      case MODES.FULL:
        this.renderFull();
        break;
      case MODES.DATE_SHORT:
        this.renderDateShort();
        break;
      default:
        this.renderShort();
    }
  }

  normalizeTime(time) {
    return time < 10 ? "0" + time : time;
  }
}
