import Avatar from '@mui/material/Avatar';
import Link from 'next/link';
import styles from './user.module.css';

export default function User({ user }) {
  return (
    <Link href={`/profile/${user.id}`}>
      <div className={styles.container}>
        <Avatar alt={user.username} src={user.urlAvatar} sx={{ width: 25, height: 25 }} />
        <div>
          <div>{user.username}</div>
        </div>
      </div>
    </Link>
  );
}
