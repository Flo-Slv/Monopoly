import Attendee from './squareAttendeeListElement';
import styles from '../game.module.css';
import AvatarGroup from '@mui/material/AvatarGroup';

const SquareAttendeeList = ({ attendees }) => {
  return (
    <div className={styles.squareAttendees}>
      <AvatarGroup max={4}>
        {attendees.map((attendee) => (
          <Attendee key={attendee._id} attendee={attendee} />
        ))}
      </AvatarGroup>
    </div>
  );
};

export default SquareAttendeeList;
