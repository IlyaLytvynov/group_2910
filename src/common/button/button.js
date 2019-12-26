import "./button.scss";

const createButton = (
  mountPoint = document.querySelector("body"),
  title,
  onClick,
  color
) => {
  const button = document.createElement("button");
  button.onclick = onClick;
  button.textContent = title;
  button.classList.add("btn");
  if (color === "success") {
    button.classList.add("btn_success");
  }
  mountPoint.appendChild(button);
};

class Button {
  constructor(
    mountPoint = document.querySelector("body"),
    title,
    onClick,
    color
  ) {
    this.mountPoint = mountPoint;
    this.title = title;
    this.onClick = onClick;
    this.color = color;
    this.el = document.createElement("button");
  }

  render() {
    this.el.onclick = this.onClick;
    this.el.textContent = this.title;
    this.el.classList.add("btn");
    this.el.style.backgroundColor = this.color;
    this.mountPoint.appendChild(this.el);
  }
}

class LinkButton extends Button {
  constructor(
    mountPoint = document.querySelector("body"),
    title,
    onClick,
    color,
    href
  ) {
    super(mountPoint, title, onClick, color);
    this.href = href;
    this.el = document.createElement("a");
  }
}

class RoundButton extends Button {
  render() {
    super.render();
    this.el.classList.add("btn_rounded");
    console.log(this.el);
  }
}

class FakeRoundButton extends RoundButton {
  hello() {
    console.log("Hello!");
  }
}

export { createButton, Button, RoundButton, LinkButton, FakeRoundButton };
