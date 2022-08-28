import styles from '../../game.module.css';
import SquareAttendeeList from '../squareAttendeeList';
import LocalDrinkOutlinedIcon from '@mui/icons-material/LocalDrinkOutlined';
import PowerOutlinedIcon from '@mui/icons-material/PowerOutlined';
import TungstenOutlinedIcon from '@mui/icons-material/TungstenOutlined';

const Company = ({ square }) => {
  return (
    <div className={styles.square}>
      {square.label.search('lectricit') !== -1 ? (
        <TungstenOutlinedIcon />
      ) : (
        <LocalDrinkOutlinedIcon />
      )}
      <div className={styles.title}>{square.label}</div>
      <SquareAttendeeList attendees={square.attendees} />
    </div>
  );
};

export default Company;
