import { useQuery } from '@apollo/client';
import { GET_ME } from '../../helpers/graphql/user';
import Avatar from '@mui/material/Avatar';
import Link from 'next/link';
import { useUser } from '../../helpers/contexts/user';
import { useEffect } from 'react';

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
    <div>
      <Avatar alt={data.getMe.username} src={data.getMe.urlAvatar} sx={{ width: 56, height: 56 }} />
      Hello {data.getMe.username}
      <Link href={`/profile/${data.getMe.id}`}>
        <a>Modifier mon profil</a>
      </Link>
    </div>
  );
}
