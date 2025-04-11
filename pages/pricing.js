import Navbar from '../components/Navbar';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Pricing() {
  return (
    <div className={styles.container}>
      <Navbar />
      
      {/* Main Content */}
      <div className={styles.hero} style={{textAlign: 'center', padding: '4rem 0'}}>
        <h1 className={styles.title} style={{fontSize: '3rem'}}>Beta Phase: Free for all new users.</h1>
        <p className={styles.subtitle}>more to come</p>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <Link href='/about'>About Us</Link>
          <Link href='/contact'>Contact</Link>
          <Link href='/terms'>Terms of Service</Link>
          <Link href='/privacy'>Privacy Policy</Link>
        </div>
        <p> 2025 Easy Rent. All rights reserved.</p>
      </footer>
    </div>
  );
}
