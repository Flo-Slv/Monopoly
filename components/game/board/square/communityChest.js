import styles from '../../game.module.css';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import SquareAttendeeList from '../squareAttendeeList';

const CommunityChest = ({ square }) => {
  return (
    <div className={`${styles.square} ${styles.communityChest}`}>
      <Inventory2OutlinedIcon />
      <div className={styles.title}>{square.label}</div>
      <SquareAttendeeList attendees={square.attendees} />
    </div>
  );
};

export default CommunityChest;
