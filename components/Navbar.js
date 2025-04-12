import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brandContainer}>
        <Link href="/" className={styles.brandLink}>
          <span className={styles.brandName}>Easy Rent</span>
          <span className={styles.betaBadge}>Beta Phase</span>
        </Link>
      </div>
      <div className={styles.navLinks}>
        <Link href='/' className={styles.navLink}>Home</Link>
        <Link href='/about' className={styles.navLink}>About Us</Link>
        <Link href='/pricing' className={styles.navLink}>Pricing</Link>
        <Link href='/login' className={styles.navLink}>Login</Link>
      </div>
    </nav>
  );
}
