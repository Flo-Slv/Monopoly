import Attendee from './squareAttendeeListElement';
import styles from '../game.module.css';

const SquareAttendeeList = ({ attendees }) => {
  return (
    <div className={styles.squareAttendees}>
      {attendees.map((attendee) => (
        <Attendee key={attendee._id} attendee={attendee} />
      ))}
    </div>
  );
};

export default SquareAttendeeList;
