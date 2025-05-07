import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { supabase } from '../../lib/supabase';
import Navbar from '../../components/Navbar';
import styles from '../../styles/Home.module.css';
import buttonStyles from '../../styles/LandlordButtons.module.css';

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

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchListings = async () => {
      setLoading(true);
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
        const { data, error } = await supabase
          .from('listings')
          .select('*')
          .eq('landlord_id', user.id);

        if (!error) setListings(data || []);
      }
      setLoading(false);
    };

    fetchListings();
  }, []);

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
          <div className={styles.listingsHeader}>
            <h2>Your Listings</h2>
            <Link href="/landlord/new-listing" className={buttonStyles.button}>
              Add New Listing
            </Link>
          </div>

          {loading ? (
            <p>Loading listings...</p>
          ) : listings.length > 0 ? (
            <div className={styles.listingsGrid}>
              {listings.map((listing) => (
                <div key={listing.id} className={styles.listingCard}>
                  {listing.images?.[0] && (
                    <img 
                      src={listing.images[0]} 
                      alt={listing.description} 
                      className={styles.listingImage}
                    />
                  )}
                  <div className={styles.listingDetails}>
                    <h3>${listing.price}/month</h3>
                    <p>{listing.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No listings yet. Add your first property!</p>
          )}
        </div>

        <button onClick={handleLogout} className={buttonStyles.button}>
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
