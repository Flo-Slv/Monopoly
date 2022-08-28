import SquareCol from './squareCol';
import styles from '../game.module.css';

const SquareCols = ({ squares }) => {
  return (
    <>
      <SquareCol
        className={styles.colLeft}
        squares={squares.filter((square, index) => index < 11)}
      />
      <SquareCol
        className={styles.colTop}
        squares={squares.filter((square, index) => index >= 11 && index < 20)}
      />
      <SquareCol
        className={styles.colRight}
        squares={squares.filter((square, index) => index >= 20 && index < 31)}
      />
      <SquareCol
        className={styles.colBottom}
        squares={squares.filter((square, index) => index >= 31)}
      />
    </>
  );
};

export default SquareCols;
