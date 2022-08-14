import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Header() {
  const { data: session, status } = useSession();
  return (
    <nav>
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
}
