import { useState } from "react";

const initialBoard = () => Array(9).fill(null);

const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard());
  const [isXNext, setIsXNext] = useState(true);

  const WINNING_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculateWinner = (currentBoard) => {
    for (let index = 0; index < WINNING_PATTERNS.length; index++) {
      const [a, b, c] = WINNING_PATTERNS[index];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    const winner = calculateWinner(board);
    if (winner || board[index]) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const getStatusMessage = () => {
    const winner = calculateWinner(board);
    if(winner) return `Player ${winner} wins!`;
    if(!board.includes(null)) return `It's a draw!!`
    return isXNext ? "Player X turn" : "Player O Turn";
  };

  const resetGame = () => {
    setBoard(initialBoard());
    setIsXNext(true);
  };

  return {
    board,
    handleClick,
    calculateWinner,
    getStatusMessage,
    resetGame,
  };
};

export default useTicTacToe;
