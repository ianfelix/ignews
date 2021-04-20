import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href='/'>
          <a>
            <img src='/images/logo.svg' alt='Logo' />
          </a>
        </Link>

        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
};
