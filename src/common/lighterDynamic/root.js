export const createRoot = (
  mountPoint = document.querySelector("body"),
  className
) => {
  const lighterRoot = document.createElement("div");
  lighterRoot.classList.add(className);
  mountPoint.appendChild(lighterRoot);
  return lighterRoot;
};
