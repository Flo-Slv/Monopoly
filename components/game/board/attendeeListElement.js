import Avatar from '@mui/material/Avatar';
import styles from '../game.module.css';

const AttendeeListElement = ({ attendee }) => {
  return (
    <div>
      <Avatar alt={attendee.username} src={attendee.urlAvatar} />
      {attendee.username}
      <div className={styles.money}>500€</div>
    </div>
  );
};

export default AttendeeListElement;
