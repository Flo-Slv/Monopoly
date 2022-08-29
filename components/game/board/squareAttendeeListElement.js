import Avatar from '@mui/material/Avatar';
import styles from '../game.module.css';
import Badge from '@mui/material/Badge';

const SquareAttendeeListElement = ({ attendee }) => {
  return (
    <>
      <Badge
        color="secondary"
        sx={[
          {
            '& .MuiBadge-badge': {
              backgroundColor: attendee.color,
              boxShadow: `0 0 0 1px ${attendee.color}`,
            },
          },
        ]}
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent=" "
        variant="dot"
      >
        <Avatar
          className={styles.avatar}
          style={{
            borderColor: attendee.color,
          }}
          alt={attendee.username}
          src={attendee.urlAvatar}
        />
      </Badge>
    </>
  );
};

export default SquareAttendeeListElement;
