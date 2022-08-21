import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Game from './game';

export default function Home() {
  const [idRoom, setIdRoom] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setIdRoom(router.query.id);
  }, [router.query]);

  if (!idRoom) return null;

  return <Game id={idRoom} />;
}
