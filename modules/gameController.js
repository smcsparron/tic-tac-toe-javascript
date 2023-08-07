const gameController = (() => {
  let currentPlayer = player1;
  let gameOver = false;
  let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = () => {
    const board = gameBoard.getBoard();

    for (condition of winConditions) {
      const [a, b, c] = condition;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    if (board.every((cell) => cell !== "")) {
      return "tie";
    }

    return null;
  };

  const playTurn = (index) => {
    if (gameOver) return;

    if (gameBoard.getBoard()[index] == "") {
      gameBoard.setSquare(index, currentPlayer.getSymbol());

      currentPlayer = currentPlayer == player1 ? player2 : player1;
      displayController.render();
    }

    const winner = checkWinner();

    if (winner) {
      gameOver = true;
      if (winner === "tie") {
        displayController.showWinner("TIE");
        console.log("TIE");
      } else {
        displayController.showWinner(`Player ${winner} wins!`);
        console.log(`Player ${winner} wins!`);
      }
    }
  };

  const setGameOver = (value) => {
    gameOver = value;
  };

  return { playTurn, setGameOver };
})();
