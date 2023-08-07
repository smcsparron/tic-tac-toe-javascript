import gameBoard from './gameBoard.js';
import gameController from './gameController.js';

const displayController = (() => {
  const render = () => {
    let board = gameBoard.getBoard();
    let moveList = gameBoard.getMoveList();

    const gameContainer = document.getElementById("grid-container");
    const moveListElement = document.getElementById('move-list');
    const displayWinner = document.getElementById("winner");

    gameContainer.innerHTML = "";


    if (moveList.length > 0) {
      const lastMove = moveList[moveList.length - 1];
      const { player, cell } = lastMove;
      const li = document.createElement("li");
      li.classList.add("white-text");
      li.textContent = `Player ${player} placed a move in cell ${cell}`;
      moveListElement.appendChild(li);
      if ((moveList.length % 2) == 0) {
        displayWinner.textContent = "X Turn"
      } else {
        displayWinner.textContent = "O Turn"
      }
    } else {
      moveListElement.innerHTML = "";
    }

    board.forEach((cell, index) => {
      const square = document.createElement("div");
      square.classList.add("square");
      square.classList.add("white-text");
      square.setAttribute("id", index);
      square.textContent = cell;
      square.addEventListener("click", () => gameController.playTurn(index));
      gameContainer.appendChild(square);
    });
  };

  const showWinner = (winner) => {
    const displayWinner = document.getElementById("winner");
    displayWinner.textContent = `${winner}`;
  };

  return { render, showWinner };
})();

export default displayController;
