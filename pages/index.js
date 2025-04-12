import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { supabase } from '../lib/supabase';

export default function Home() {
  useEffect(() => {
    async function testConnection() {
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .limit(1);
      
      if (error) {
        console.error('Supabase connection error:', error);
      } else {
        console.log('Supabase connected successfully:', data);
      }
    }
    testConnection();
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />
      {/* Hero Section */}
      <div className={styles.hero}>
        <h1 className={styles.title}>Easy Rent</h1>
        <p className={styles.subtitle}>Your Modern Rental Solution</p>
        <div className={styles.ctaContainer}>
          <Link href='/signup?type=tenant' className={styles.ctaButton}>I am a Tenant</Link>
          <Link href='/signup?type=landlord' className={styles.ctaButton}>I am a Landlord</Link>
        </div>
      </div>

      {/* What We Do Section */}
      <div className={styles.about}>
        <h2>What We Do</h2>
        
        {/* First Section - Image Left, Text Right */}
        <div className={styles.splitSection}>
          <div className={styles.splitImage}>
            <Image 
              src="/apartment1.jpg" 
              alt="Rental challenges"
              width={500}
              height={350}
              className={styles.sectionImage}
            />
          </div>
          <div className={styles.splitText}>
            <p>
              Renting doesn't have to be this hard.<br /><br />
              Outdated listings. Missed visits. Damaged homes. Late payments.<br />
              Too many people — both tenants and landlords — are left frustrated by a broken system.
            </p>
          </div>
        </div>

        {/* Second Section - Image Right, Text Left */}
        <div className={styles.splitSection}>
          <div className={styles.splitText}>
            <p>
              EasyRent is here to change that.<br /><br />
              We're building a platform that puts trust, ease, and community at the heart of home rentals.<br />
              Whether you're looking for a place or listing one, EasyRent helps you find reliable people, 
              transparent info, and real peace of mind — without the usual stress.
            </p>
          </div>
          <div className={styles.splitImage}>
            <Image 
              src="/house1.jpg" 
              alt="EasyRent solution"
              width={500}
              height={350}
              className={styles.sectionImage}
            />
          </div>
        </div>

        <div className={styles.fullWidthText}>
          <p>
            We're not a big company — just a small team who's been through it, and believes in better.<br />
            Let's make renting simple. Together.
          </p>
          <Link href="/about" className={styles.ctaButton} style={{marginTop: '1rem'}}>
            Read Our Full Story
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <div className={styles.services}>
        <h2>Our Services</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <Image 
              src="/window.svg" 
              alt="Property Management"
              width={80}
              height={80}
            />
            <h3>Property Management</h3>
            <p>Comprehensive tools for landlords to manage properties, tenants, and payments.</p>
          </div>
          <div className={styles.serviceCard}>
            <Image 
              src="/globe.svg" 
              alt="Global Listings"
              width={80}
              height={80}
            />
            <h3>Verified Listings</h3>
            <p>Only real, available properties with verified details and photos.</p>
          </div>
          <div className={styles.serviceCard}>
            <Image 
              src="/file.svg" 
              alt="Digital Contracts"
              width={80}
              height={80}
            />
            <h3>Digital Contracts</h3>
            <p>Secure, legally-binding rental agreements signed online.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerColumn}>
            <h3>Company</h3>
            <div className={styles.footerLinks}>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/careers">Careers</Link>
            </div>
          </div>
          
          <div className={styles.footerColumn}>
            <h3>Resources</h3>
            <div className={styles.footerLinks}>
              <Link href="/help">Help Center</Link>
              <Link href="/guides">Rental Guides</Link>
              <Link href="/safety">Safety</Link>
              <Link href="/faq">FAQs</Link>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h3>Legal</h3>
            <div className={styles.footerLinks}>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/cookies">Cookie Policy</Link>
              <Link href="/accessibility">Accessibility</Link>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h3>Connect</h3>
            <div className={styles.footerLinks}>
              <Link href="https://facebook.com">Facebook</Link>
              <Link href="https://twitter.com">Twitter</Link>
              <Link href="https://instagram.com">Instagram</Link>
              <Link href="https://linkedin.com">LinkedIn</Link>
            </div>
            <div className={styles.socialLinks}>
              <Link href="https://facebook.com">FB</Link>
              <Link href="https://twitter.com">TW</Link>
              <Link href="https://instagram.com">IG</Link>
              <Link href="https://linkedin.com">LI</Link>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p> 2025 Easy Rent. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
