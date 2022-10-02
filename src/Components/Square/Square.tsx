import './Square.css';

export type SquareValue = 'X' | 'O' | null;

interface SquareProps {
  value: SquareValue;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = (props: SquareProps): JSX.Element => {
  return (
    <div className="Square" onClick={props.onClick}>
      {props.value}
    </div>
  );
};

export default Square;
