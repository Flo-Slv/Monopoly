import { useQuery } from '@apollo/client';
import { GET_ME } from '../../helpers/graphql/user';
import Avatar from '@mui/material/Avatar';
import Link from 'next/link';
import { useUser } from '../../helpers/contexts/user';
import { useEffect } from 'react';
import styles from './hello.module.css';

export default function Hello() {
  const { loading, error, data } = useQuery(GET_ME);

  const { setUser } = useUser();

  useEffect(() => {
    if (data && data.getMe) {
      setUser(data.getMe);
    }
  }, [setUser, data]);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className={styles.container}>
      <Avatar alt={data.getMe.username} src={data.getMe.urlAvatar} sx={{ width: 56, height: 56 }} />
      <div>
        <div>Hello {data.getMe.username}</div>
        <Link href={`/profile/${data.getMe.id}`}>
          <a>Modifier mon profil</a>
        </Link>
      </div>
    </div>
  );
}
