export const dotTheme = [
  {
    '& .MuiBadge-badge': {
      //   backgroundColor: attendee.color,
      //   boxShadow: `0 0 0 1px ${attendee.color}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'none',
        border: `none`,
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

export const isPlaying = {
  '& .MuiBadge-badge': {
    '&::after': {
      animation: 'ripple 1.2s infinite ease-in-out',
      border: `1px solid #fff`,
    },
  },
};

export const isWaiting = {
  '& .MuiBadge-badge': {
    '&::after': {
      animation: 'none',
      border: `none`,
    },
  },
};
