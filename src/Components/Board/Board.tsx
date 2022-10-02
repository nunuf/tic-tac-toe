import Square, { SquareValue } from '../Square/Square';

import './Board.css';

interface BoardProps {
  squares: SquareValue[];
  onClick: (i: number) => void;
  indices?: number[]; 
}

const Board: React.FC<BoardProps> = (props: BoardProps): JSX.Element => {

  const renderSquare = (i: number): JSX.Element => {
    return (
      <Square
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
        isWining={props.indices?.includes(i)}
      />
    );
  };

  return (
    <div className="Board">
      <div className="BoardRow">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="BoardRow">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="BoardRow">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
