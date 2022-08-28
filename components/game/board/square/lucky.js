import styles from '../../game.module.css';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import SquareAttendeeList from '../squareAttendeeList';

const Lucky = ({ square }) => {
  return (
    <div className={`${styles.square} ${styles.lucky}`}>
      <QuestionMarkOutlinedIcon />
      <div className={styles.title}>{square.label}</div>
      <SquareAttendeeList attendees={square.attendees} />
    </div>
  );
};

export default Lucky;
