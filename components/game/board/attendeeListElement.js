import Avatar from '@mui/material/Avatar';
import styles from '../game.module.css';
import Badge from '@mui/material/Badge';
import { useEffect, useState } from 'react';
import { isPlaying, isWaiting, createDotTheme } from '../../../styles/mui/game';

const AttendeeListElement = ({ attendee }) => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (!theme) {
      setTheme([...createDotTheme(attendee.color), isPlaying]);
    } else {
      if (false) {
        setTheme([...theme, isPlaying]);
      } else if (false) {
        setTheme([...theme, isWaiting]);
      }
    }
  }, [theme, attendee.color]);

  return (
    <div>
      <div className={styles.timer}>13s</div>
      <Badge
        color="secondary"
        sx={theme}
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
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
      <div>{attendee.username}</div>
      <div className={styles.money}>500€</div>
    </div>
  );
};

export default AttendeeListElement;
