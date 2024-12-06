export const getRandomElement = (array: Array<any>) => {
  const index: number = Math.floor(Math.random() * array.length);
  return array[index];
};