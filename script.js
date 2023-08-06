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

const playerFactory = (name, symbol) => {
  const getName = () => name;
  const getSymbol = () => symbol;

  return { getName, getSymbol };
};

const player1 = playerFactory("Player 1", "X");
const player2 = playerFactory("Player 2", "O");

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


const displayController = (() => {
  const render = () => {
    let board = gameBoard.getBoard();
    const gameContainer = document.getElementById("game-container");

    gameContainer.innerHTML = "";

    board.forEach((cell, index) => {
      const square = document.createElement("div");
      square.classList.add("square");
      square.setAttribute("id", index);
      square.textContent = cell;
      square.addEventListener("click", () => gameController.playTurn(index));
      gameContainer.appendChild(square);
    });
  };

  const showWinner = (winner) => {
    const displayWinner = document.getElementById("winner");
    console.log(winner);
    displayWinner.textContent = `${winner}`;
  };

  return { render, showWinner };
})();


const resetButton = document.getElementById("btn-reset");
resetButton.addEventListener("click", gameBoard.resetGame);

displayController.render();
