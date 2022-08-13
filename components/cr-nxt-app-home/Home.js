import Image from 'next/image';
import VercelLogo from './vercel.svg';
import styles from './Home.module.css';
import FormNewUser from '../../pages/auth/new-user';
import AuthBackground from '../auth/authBackground.jpg';

export default function Home() {
  return (
    <div className={styles.container}>
      <Image alt="" src={AuthBackground} placeholder="blur" layout="fill" objectFit="cover" style={{ zIndex: '-3'}} />

      <main className={styles.main}>
      <FormNewUser />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src={VercelLogo} alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
