const rollDiceRandomly = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const shuffle = (array) => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

export { rollDiceRandomly, shuffle };
