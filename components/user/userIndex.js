import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import User from '../../components/user/user';

export default function UserIndex() {
  const [idUser, setIdUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setIdUser(router.query.id);
  }, [router.query]);

  if (!idUser) return null;

  return <User id={idUser} />;
}
