import { SquareValue } from '../Components/Square/Square';

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

export const calculateWinner = (squares: SquareValue[]): {value: SquareValue, indices: number[]} | null => {
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {value: squares[a], indices: [a,b,c]}; 
      // return squares[a];
    }
  }
  return null;
};

export const calculateTie = (squares: SquareValue[]): boolean => {
  const availableMoves = squares.map((item, index) => index).filter((itm, idx) => squares[idx] === null);
  return availableMoves.length === 0;
};

export const calculateNext = (squares: SquareValue[]): number => {
  // Try to win
  const computerMoves = squares.map((item, index) => index).filter((itm, idx) => squares[idx] === 'O');
  for (let i = 0; i < lines.length; i++) {
    const options = lines[i].filter(item => !computerMoves.includes(item));
    if (options.length === 1 && squares[options[0]] === null) {
      return options[0];
    }
  }
  // Try to block
  const rivalMoves = squares.map((item, index) => index).filter((itm, idx) => squares[idx] === 'X');
  for (let i = 0; i < lines.length; i++) {
    const options = lines[i].filter(item => !rivalMoves.includes(item));
    if (options.length === 1 && squares[options[0]] === null) {
      return options[0];
    }
  }
  // Random move
  const availableMoves = squares.map((item, index) => index).filter((itm, idx) => squares[idx] === null);
  const random = Math.floor(Math.random() * availableMoves.length);
  return availableMoves[random];
};

