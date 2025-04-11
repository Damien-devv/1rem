import { useEffect } from 'react';
import PropertyCard from '../components/PropertyCard';
import Navbar from '../components/Navbar';
import Link from 'next/link';
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
  const properties = [
    {
      id: 1,
      title: 'Modern Downtown Apartment',
      price: '$1,500/month',
      location: 'New York, NY',
      image: '/apartment1.jpg',
      bedrooms: 2,
      bathrooms: 1,
      size: '850 sqft'
    },
    {
      id: 2,
      title: 'Cozy Suburban House',
      price: '$2,200/month',
      location: 'New Jersey, NJ',
      image: '/house1.jpg',
      bedrooms: 3,
      bathrooms: 2,
      size: '1,200 sqft'
    },
    {
      id: 3,
      title: 'Luxury Penthouse',
      price: '$4,500/month',
      location: 'Chicago, IL',
      image: '/penthouse1.jpg',
      bedrooms: 4,
      bathrooms: 3,
      size: '2,500 sqft'
    }
  ];

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

      {/* About Us Section */}
      <div className={styles.about}>
        <h2>Our Community Approach</h2>
        <p>
          Born from personal rental struggles on both sides, Easy Rent is built by real people 
          for real people. We're not a faceless corporation - we're a community working together 
          to fix the frustrations of renting in 2025.
        </p>
        <Link href="/about" className={styles.ctaButton} style={{marginTop: '1rem'}}>
          Read Our Full Story
        </Link>
      </div>

      {/* Available Properties Section */}
      <div className={styles.propertyList}>
        <h1>Available Properties</h1>
        <div className={styles.propertyListContainer}>
          {properties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
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
