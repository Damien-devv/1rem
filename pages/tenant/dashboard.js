import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { supabase } from '../../lib/supabase';
import Navbar from '../../components/Navbar';
import styles from '../../styles/Home.module.css';

export default function TenantDashboard() {
  const router = useRouter();

  useEffect(() => {
    // Check auth status
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/login');
      } else if (user.user_metadata?.user_type !== 'tenant') {
        router.push('/landlord/dashboard');
      }
    };
    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  return (
    <div className={styles.container}>
      <Navbar />
      
      <div className={styles.hero}>
        <h1 className={styles.title}>Tenant Dashboard</h1>
        <p className={styles.subtitle}>Welcome to your rental portal</p>
        
        <div className={styles.dashboardContent}>
          <div className={styles.dashboardCard}>
            <h2>Your Properties</h2>
            <p>View and manage your rented properties</p>
          </div>
          
          <div className={styles.dashboardCard}>
            <h2>Payment History</h2>
            <p>Track your rental payments</p>
          </div>
          
          <div className={styles.dashboardCard}>
            <h2>Maintenance Requests</h2>
            <p>Submit and track maintenance issues</p>
          </div>
        </div>

        <button onClick={handleLogout} className={styles.ctaButton}>
          Log Out
        </button>
      </div>

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
