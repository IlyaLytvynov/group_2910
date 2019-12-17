import "./lighter.scss";

export const trafficLighter = lighterRoot => {
  console.log(lighterRoot);
  const ROOT_CLASS_NAME = "traffic-lighter";
  const ACTIVE_CLASS_NAME = "active";
  const lights = lighterRoot.querySelectorAll(`.${ROOT_CLASS_NAME}__light`); // DOMNode
  const button = lighterRoot.querySelector(`.${ROOT_CLASS_NAME}__btn`); // DMONode
  let isActive = false;
  console.log(lighterRoot);
  button.onclick = () => {
    toggleOff();
    isActive = !isActive;
  };

  const toggleOff = () => {
    for (let light of lights) {
      light.classList.remove(ACTIVE_CLASS_NAME);
    }
  };

  for (let i = 0; i < lights.length; i++) {
    const light = lights[i];
    light.onclick = () => {
      if (isActive === false) {
        return;
      }
      toggleOff();
      light.classList.add(ACTIVE_CLASS_NAME);
    };
  }
};
