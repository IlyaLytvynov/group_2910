import "./button.scss";

const createButton = (
  mountPoint = document.querySelector("body"),
  title,
  onClick,
  type
) => {
  const button = document.createElement("button");
  button.onclick = onClick;
  button.textContent = title;
  button.classList.add("btn");
  if (type === "success") {
    button.classList.add("btn_success");
  }
  mountPoint.appendChild(button);
};

class Button {
  constructor(
    mountPoint = document.querySelector("body"),
    title,
    onClick,
    type
  ) {
    this.mountPoint = mountPoint;
    this.title = title;
    this.onClick = onClick;
    this.type = type;
  }

  render() {
    this.el = document.createElement("button");
    this.el.onclick = this.onClick;
    this.el.textContent = this.title;
    this.el.classList.add("btn");

    if (this.type === "success") {
      this.el.classList.add("btn_success");
    }
    this.mountPoint.appendChild(this.el);
  }
}

export { createButton, Button };
