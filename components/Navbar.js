import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="/logo.png" 
            alt="Easy Rent Logo"
            width={40}
            height={40}
          />
          <span className={styles.brandName}>Easy Rent</span>
        </Link>
        <span className={styles.betaBadge}>Beta</span>
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
