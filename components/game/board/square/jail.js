import styles from '../../game.module.css';
import SquareAttendeeList from '../squareAttendeeList';
import SquarePrisonerList from '../squareAttendeeList';

const Jail = ({ square }) => {
  return (
    <div className={styles.square}>
      <div className={styles.title}>{square.label}</div>
      <SquareAttendeeList attendees={square.attendees} />
      <SquarePrisonerList attendees={square.prisoners} />
    </div>
  );
};

export default Jail;
