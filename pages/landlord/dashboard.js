import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { supabase } from '../../lib/supabase';
import Navbar from '../../components/Navbar';
import styles from '../../styles/Home.module.css';

export default function LandlordDashboard() {
  const router = useRouter();

  useEffect(() => {
    // Check auth status
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/login');
      } else if (user.user_metadata?.user_type !== 'landlord') {
        router.push('/tenant/dashboard');
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
        <h1 className={styles.title}>Landlord Dashboard</h1>
        <p className={styles.subtitle}>Manage your rental properties</p>
        
        <div className={styles.dashboardContent}>
          <div className={styles.dashboardCard}>
            <h2>Your Listings</h2>
            <p>Manage your property listings</p>
          </div>
          
          <div className={styles.dashboardCard}>
            <h2>Tenant Management</h2>
            <p>View and communicate with tenants</p>
          </div>
          
          <div className={styles.dashboardCard}>
            <h2>Rent Collection</h2>
            <p>Track payments and invoices</p>
          </div>

          <div className={styles.dashboardCard}>
            <h2>Maintenance Requests</h2>
            <p>Review and address tenant requests</p>
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
