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

export { createButton };
