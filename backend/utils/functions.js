const rollDiceRandomly = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const shuffleCardsRandomly = cards => {
  return cards
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

export { rollDiceRandomly, shuffleCardsRandomly };
