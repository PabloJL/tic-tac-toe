import { WINNER_COMBOS } from "../constants/constants";

export const checkWinnerFrom = (boardToCheck) => {
  //recorre el array de combos y checa uno por uno
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  return null;
};

export const checkEndGame = (newBoard) => {
  //se  revisa si todos los square son diferente a null
  return newBoard.every((square) => square !== null);
};
