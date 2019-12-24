import "./lesson_15.scss";
import { Lamp } from "../common/lamp";
import { Button } from "../common/button";
import { Lighter } from "../common/lighter";

const mp = document.querySelector("body");

const lamps = [];

for (let i = 0; i < 50; i++) {
  const lamp = new Lamp(mp);
  lamp.render();
  lamps.push(lamp);
}

window.lamps = lamps;

const btn = new Button(mp, "TOGGLE ALL", () => {
  lamps.forEach((lamp, i) => {
    setTimeout(() => {
      lamp.toggle();
    }, 200 * i);
  });
});

btn.render();

const lighter = new Lighter(mp);
lighter.render();
lighter.start();
