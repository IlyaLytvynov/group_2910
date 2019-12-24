export const getRandomNumber = max => {
  return Math.floor(Math.random() * max);
};

export const getRandomColor = () => {
  return `rgb(${getRandomNumber(255)}, ${getRandomNumber(
    255
  )}, ${getRandomNumber(255)})`;
};
