import gameBoard from './modules/gameBoard.js';
import displayController from './modules/displayController.js';



const resetButton = document.getElementById("btn-reset");
resetButton.addEventListener("click", gameBoard.resetGame);

displayController.render();
