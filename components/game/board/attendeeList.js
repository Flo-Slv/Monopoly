import Attendee from './attendeeListElement';
import styles from '../game.module.css';

const AttendeeList = ({ attendees }) => {
  return (
    <div className={styles.attendees}>
      {attendees.map((attendee) => (
        <Attendee key={attendee._id} attendee={attendee} />
      ))}
    </div>
  );
};

export default AttendeeList;
