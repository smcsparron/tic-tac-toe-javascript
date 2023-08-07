const playerFactory = (name, symbol) => {
  const getName = () => name;
  const getSymbol = () => symbol;

  return { getName, getSymbol };
};

const player1 = playerFactory("Player 1", "X");
const player2 = playerFactory("Player 2", "O");

export { player1, player2 };
