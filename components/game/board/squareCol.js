import Square from './square';

const SquareCol = ({ className, squares }) => {
  return (
    <div className={className}>
      {squares.map((square, index) => (
        <Square key={square._id} square={square} />
      ))}
    </div>
  );
};

export default SquareCol;
