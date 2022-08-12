import Image from 'next/image';
import backgroundImage from './authBackground.jpg';
import Button from '@mui/material/Button';

import styles from './auth.module.css';

export default function SignIn({ providers, signInFunc }) {
  return (
    <div className={styles.authContainer}>
      <div className={styles.authBackground}>
        <Image alt="" src={backgroundImage} placeholder="blur" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.authForm}>
        <h1>Monopoly</h1>
        <h2>Démarrer une partie</h2>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <Button
              onClick={() => signInFunc(provider.id, { callbackUrl: 'http://localhost:3000/' })}
              variant="contained"
            >
              Sign in with {provider.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
