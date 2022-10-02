import { useCallback, useState } from 'react';
import { Box, Modal } from '@mui/material';
import { calculateNext, calculateTie, calculateWinner } from '../../Utils/Calc';
import Board from '../Board/Board';
import { SquareValue } from '../Square/Square';

import './Game.css';

const Game: React.FC = (): JSX.Element => {
  
  const [stepNumber, setStepNumber] = useState<number>(0);
  const [history, setHistory] = useState<{ squares: SquareValue[] }[]>([
    { squares: Array(9).fill(null) }
  ]);
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => setOpen(true), [setOpen]);
  const handleClose = useCallback(() => setOpen(false), [setOpen]);

  const handleClick = (i: number): void => {
    let newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squaresX = current.squares.slice();
    if (calculateWinner(squaresX) || squaresX[i]) {
      return;
    }
    squaresX[i] = 'X';
    newHistory = newHistory.concat([
      {
        squares: squaresX
      }
    ]);

    // Check if it is a tie
    calculateTie(squaresX);

    // Calculate computer's next step
    const squaresO = squaresX.slice();
    if (calculateWinner(squaresO)) {
      setHistory(newHistory);
      setStepNumber(newHistory.length - 1);
      return;
    }
    const nextStep = calculateNext(squaresO);
    squaresO[nextStep] = 'O';
    newHistory = newHistory.concat([
      {
        squares: squaresO
      }
    ]);

    setHistory(newHistory);
    setStepNumber(newHistory.length - 1);
  };

  const jumpTo = (step: number): void => {
    setStepNumber(step);
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  const tie = calculateTie(current.squares);

  let status;
  if (winner === 'X') {
    status = "You WON!";
  } else if (winner === 'O') {
    status = "You LOST Loser!";
  } else if (tie) {
    status = "It's a Tie!";
  }

  return (
    <div className="Game">
      <h1>Tic Tac Toe</h1>
      <div className="GameBoard">
        <Board
          squares={current.squares}
          onClick={(i): void => handleClick(i)}
        />
      </div>
      <div className="Btn" onClick={handleOpen}>Show Status</div>

      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box className="ModalContent">
          <div className='Message'>{status}</div>
          <div className="Btn" onClick={() => {handleClose(); jumpTo(0);}}>Play Again</div>
        </Box>
      </Modal>
    </div>
  );
}

export default Game;
