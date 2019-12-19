export const analize = () => {
  let totalClicks = 0;
  window.getTotalClicks = () => totalClicks;

  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      totalClicks += 1;
    });
  });
};
