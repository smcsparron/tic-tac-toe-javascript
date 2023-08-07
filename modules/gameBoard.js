const gameBoard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];

  const getBoard = () => board;

  const setSquare = (index, value) => {
    board[index] = value;
  };

  const resetGame = () => {
    board = ["", "", "", "", "", "", "", "", ""];
    gameController.setGameOver(false);
    displayController.showWinner("");
    displayController.render();
  };

  return { getBoard, setSquare, resetGame };
})();
