import { useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabase';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error: loginError } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (loginError) throw loginError;

      // Get user type from user metadata
      const userType = data.user?.user_metadata?.user_type || 'tenant';
      
      // Redirect based on user type
      if (userType === 'tenant') {
        router.push('/tenant/dashboard');
      } else {
        router.push('/landlord/dashboard');
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
        <h1 className={styles.title}>Log In</h1>
        
        <form onSubmit={handleLogin} className={styles.authForm}>
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

          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Log In'}
          </button>

          {error && <p className={styles.error}>{error}</p>}
        </form>

        <p>
          Don't have an account? <Link href="/signup">Sign up</Link>
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
