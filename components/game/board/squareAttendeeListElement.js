import Avatar from '@mui/material/Avatar';
import styles from '../game.module.css';

const SquareAttendeeListElement = ({ attendee }) => {
  return <Avatar alt={attendee.username} src={attendee.urlAvatar} />;
};

export default SquareAttendeeListElement;
