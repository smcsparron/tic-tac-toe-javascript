import gameController from './gameController.js';
import displayController from './displayController.js';

const gameBoard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];
  let moveList = [];

  const getBoard = () => board;

  const getMoveList = () => moveList;

  const setSquare = (index, value) => {
    board[index] = value;
    moveList.push({player: value, cell: index + 1})
  };


  const resetGame = () => {
    board = ["", "", "", "", "", "", "", "", ""];
    moveList = [];
    gameController.setGameOver(false);
    displayController.showWinner("X Turn");
    displayController.render();
  };

  return { getBoard, setSquare, resetGame, getMoveList };
})();

export default gameBoard;


// create move Array
// when person moves push object with player and cell to move array
// display moves in list
