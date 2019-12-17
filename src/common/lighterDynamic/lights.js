export const createLights = (
  mountPoint = document.querySelector("body"),
  lightsCount,
  onClick,
  rootClassName
) => {
  const lights = [];
  for (let i = 0; i < lightsCount; i++) {
    const light = document.createElement("div");
    light.classList.add(`${rootClassName}__light`);
    light.onclick = () => {
      onClick(light);
    };
    lights.push(light);
    mountPoint.appendChild(light);
  }

  return lights;
};
