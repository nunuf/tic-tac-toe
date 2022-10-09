import './Square.css';

export type SquareValue = 'X' | 'O' | null;

interface SquareProps {
  value: SquareValue;
  onClick: () => void;
  isWinning?: boolean;
}

const Square: React.FC<SquareProps> = (props: SquareProps): JSX.Element => {
  return (
    <div className={props.isWinning ? 'Square Winning' : 'Square'} onClick={props.onClick}>
      {props.value}
    </div>
  );
};

export default Square;
