import './Square.css';

export type SquareValue = 'X' | 'O' | null;

interface SquareProps {
  value: SquareValue;
  onClick: () => void;
  isWining?: boolean;
}

const Square: React.FC<SquareProps> = (props: SquareProps): JSX.Element => {
  return (
    <div className={props.isWining ? 'Square Wining' : 'Square'} onClick={props.onClick}>
      {props.value}
    </div>
  );
};

export default Square;
