import Avatar from '@mui/material/Avatar';
import styles from '../game.module.css';
import Badge from '@mui/material/Badge';
import { useEffect, useState } from 'react';

const AttendeeListElement = ({ attendee }) => {
  const dotTheme = [
    {
      '& .MuiBadge-badge': {
        backgroundColor: attendee.color,
        boxShadow: `0 0 0 1px ${attendee.color}`,
        '&::after': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          animation: 'ripple 1.2s infinite ease-in-out',
          border: `1px solid ${attendee.color}`,
          content: '""',
        },
      },
    },
    {
      '@keyframes ripple': {
        '0%': {
          transform: 'scale(.8)',
          opacity: 1,
        },
        '100%': {
          transform: 'scale(2.4)',
          opacity: 0,
        },
      },
    },
  ];
  const isPlaying = {
    '& .MuiBadge-badge': {
      '&::after': {
        animation: 'ripple 1.2s infinite ease-in-out',
        border: `1px solid ${attendee.color}`,
      },
    },
  };
  const isWaiting = {
    '& .MuiBadge-badge': {
      '&::after': {
        animation: 'none',
        border: `none`,
      },
    },
  };

  const [theme, setTheme] = useState(dotTheme);

  useEffect(() => {
    if (true) {
      setTheme([...theme, isPlaying]);
    } else {
      setTheme([...theme, isWaiting]);
    }
  }, []);

  return (
    <div>
      <div className={styles.timer}>13s</div>
      <Badge
        color="secondary"
        sx={theme}
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
      <div>{attendee.username}</div>
      <div className={styles.money}>500€</div>
    </div>
  );
};

export default AttendeeListElement;
