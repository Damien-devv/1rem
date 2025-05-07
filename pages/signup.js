import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { supabase } from '../lib/supabase';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { query } = useRouter();
  const [userType, setUserType] = useState('tenant');

  useEffect(() => {
    if (query.type && ['tenant', 'landlord'].includes(query.type)) {
      setUserType(query.type);
    }
  }, [query.type]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error: signupError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            user_type: userType
          }
        }
      });

      if (signupError) throw signupError;

      if (userType === 'landlord') {
        router.push('/landlord/new-listing');
      } else {
        // Show success message for tenants
        alert('Please check your email for a confirmation link. You can sign in after confirming your email.');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <Navbar />
      
      <div className={styles.hero} style={{maxWidth: '500px', margin: '0 auto'}}>
        <h1 className={styles.title}>Create Account</h1>
        
        <form onSubmit={handleSignup} className={styles.authForm}>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label>I am a:</label>
            <div className={styles.userTypeToggle}>
              <button
                type="button"
                className={userType === 'tenant' ? styles.activeToggle : ''}
                onClick={() => setUserType('tenant')}
              >
                Tenant
              </button>
              <button
                type="button"
                className={userType === 'landlord' ? styles.activeToggle : ''}
                onClick={() => setUserType('landlord')}
              >
                Landlord
              </button>
            </div>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Creating account...' : 'Sign Up'}
          </button>

          {error && <p className={styles.error}>{error}</p>}
        </form>

        <p>
          Already have an account? <Link href="/login">Log in</Link>
        </p>
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
