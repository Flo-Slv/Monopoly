import Avatar from '@mui/material/Avatar';
import styles from '../game.module.css';
import Badge from '@mui/material/Badge';
import { useEffect, useState } from 'react';
import { isPlaying, isWaiting, dotTheme } from '../../../styles/mui/game';

const AttendeeListElement = ({ attendee }) => {
  const [theme, setTheme] = useState([
    ...dotTheme,
    {
      '& .MuiBadge-badge': {
        backgroundColor: attendee.color,
        boxShadow: `0 0 0 1px ${attendee.color}`,
      },
    },
  ]);

  useEffect(() => {
    if (true) {
      setTheme([...theme, isPlaying]);
    } else {
      setTheme([...theme, isWaiting]);
    }
  }, [theme]);

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
