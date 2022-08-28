import styles from '../../game.module.css';
import SquareAttendeeList from '../squareAttendeeList';

const Start = ({ square }) => {
  return (
    <div className={styles.square}>
      <div className={styles.title}>{square.label}</div>
      <SquareAttendeeList attendees={square.attendees} />
    </div>
  );
};

export default Start;
