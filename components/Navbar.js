import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src='/logo.png' alt='Easy Rent Logo' className={styles.logo} />
        <span className={styles.brandName}>Easy Rent</span>
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
