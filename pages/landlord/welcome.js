import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';
import buttonStyles from '../../styles/LandlordButtons.module.css';

export default function Welcome() {
  return (
    <div className="onboardingContainer">
      <Head>
        <title>Welcome</title>
      </Head>

      <header className="onboardingHeader">
        <div className={styles.brandContainer}>
          <Link href="/landlord/dashboard" className={styles.brandLink}>
            <span className={styles.brandName}>Easy Rent</span>
            <span className={styles.betaBadge}>Beta Phase</span>
          </Link>
        </div>
        <button 
          className={buttonStyles.button}
          style={{
            position: 'absolute',
            right: '20px',
            top: '20px'
          }}
        >
          Save & Exit
        </button>
      </header>

      <main className="onboardingMain">
        <div className="onboardingContent" style={{marginTop: '10vh'}}>
          <h1>Welcome to Property Listing</h1>
          <h2>
            Let's get started creating your property listing. This process will take about 10 minutes.
            You can save and exit at any time.
          </h2>
          
          <Link href="/landlord/new-listing">
            <button 
              className={buttonStyles.button}
              style={{marginTop: '2rem'}}
            >
              Get Started
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
