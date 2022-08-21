import Avatar from '@mui/material/Avatar';
import Link from 'next/link';

import styles from './userListElement.module.css';

export default function User({ user }) {
  return (
    <Link href={`/users/${user._id}`}>
      <div className={styles.container}>
        <Avatar alt={user.username} src={user.urlAvatar} sx={{ width: 25, height: 25 }} />
        <div>
          <div>{user.username}</div>
        </div>
      </div>
    </Link>
  );
}
