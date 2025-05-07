import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import buttonStyles from '../../styles/LandlordButtons.module.css';

export default function NewListing() {
  return (
    <div className="onboardingContainer">
      <Head>
        <title>Add New Listing</title>
      </Head>

      <header className="onboardingHeader">
        <Link href="/landlord/dashboard" className="brandLink">
          <span className="brandName">Easy Rent</span>
        </Link>
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
          <h3>Step 1</h3>
          <h1>Tell us about your place</h1>
          <h2>
            In this step, we'll ask you which type of property you have and if 
            tenants will book the entire place or just a room. Then let us know 
            the location and how many guests can stay.
          </h2>
          
          {/* Form fields will go here */}
        </div>
      </main>

      <footer className="onboardingFooter">
        <Link href="/landlord/welcome">
          <button className={buttonStyles.button}>Back</button>
        </Link>
        <button className={buttonStyles.button}>Next</button>
      </footer>
    </div>
  );
}
