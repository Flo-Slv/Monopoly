import styles from '../../game.module.css';
import DirectionsTransitFilledOutlinedIcon from '@mui/icons-material/DirectionsTransitFilledOutlined';
import SquareAttendeeList from '../squareAttendeeList';

const Station = ({ square }) => {
  return (
    <div className={`${styles.square} ${styles.station}`}>
      <DirectionsTransitFilledOutlinedIcon />
      <div className={styles.title}>{square.label}</div>
      <SquareAttendeeList attendees={square.attendees} />
    </div>
  );
};

export default Station;
