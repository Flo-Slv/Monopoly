import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

import styles from './header.module.css';

const Header = () => {
  const { data: session } = useSession();

  return (
    <nav className={styles.container}>
      Navigation :
      <Link href="/">
        <a>Accueil</a>
      </Link>

      <Link href="/users">
        <a>Liste des utilisateurs</a>
      </Link>

      {!session?.user ? (
        <Link href="/api/auth/signin">
          <a
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            Se connecter
          </a>
        </Link>
      ) : (
        <Link href="/api/auth/signout">
          <a
            onClick={(e) => {
              e.preventDefault();
              signOut({ callbackUrl: '/auth/signin' });
            }}
          >
            Se déconnecter
          </a>
        </Link>
      )}
    </nav>
  );
};

export default Header;
