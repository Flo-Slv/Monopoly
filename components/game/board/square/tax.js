import styles from '../../game.module.css';
import SquareAttendeeList from '../squareAttendeeList';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';

const Tax = ({ square }) => {
  return (
    <div className={styles.square}>
      {square.label.search('lux') !== -1 ? <DiamondOutlinedIcon /> : <RequestQuoteOutlinedIcon />}
      <div className={styles.title}>{square.label}</div>
      <SquareAttendeeList attendees={square.attendees} />
    </div>
  );
};

export default Tax;
