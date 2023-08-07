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
