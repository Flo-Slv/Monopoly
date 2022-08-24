import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import User from '../../components/user/user';

const UserIndex = () => {
  const [idUser, setIdUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setIdUser(router.query.id);
  }, [router.query]);

  if (!idUser) return null;

  return <User id={idUser} />;
};

export default UserIndex;
