import Navbar from '../components/Navbar';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Navbar />
      
      {/* Hero Section */}
      <div className={styles.hero}>
        <h1 className={styles.title}>Our Story</h1>
        <p className={styles.subtitle}>Building a better rental experience, together</p>
      </div>

      {/* Origin Story */}
      <div className={styles.about}>
        <h2>From Frustration to Solution</h2>
        <p>
          My name is Damien and I've lived through both sides of the rental struggle. 
          As someone helping my parents rent their property, I saw firsthand how hard it was 
          to find trustworthy tenants. Late payments, property damage, and difficult move-outs 
          became all too common. At the same time, as a young person trying to move out on my own, 
          I experienced the other side - outdated listings, no-show landlords, and the frustration 
          of relying on word-of-mouth in 2025.
        </p>
        <p>
          That's why I created Easy Rent - not as some corporate solution, but as a community 
          working together to fix these problems. We're not claiming to have all the answers, 
          but we're committed to building something better through shared experiences and 
          mutual understanding between renters and property owners.
        </p>
      </div>

      {/* Community Focus */}
      <div className={styles.about}>
        <h2>Why Community Matters</h2>
        <p>
          At Easy Rent, we believe the best solutions come from people who've actually lived 
          through the problems. That's why we're building this platform with input from both 
          renters and landlords - real people with real experiences.
        </p>
        <p>
          We're not here to replace human connections with algorithms. Instead, we're creating 
          tools that help good people find each other more easily. Our review system, 
          communication features, and verification processes are all designed to foster trust 
          and accountability - the foundations of any strong community.
        </p>
      </div>

      {/* Call to Action */}
      <div className={styles.ctaContainer} style={{marginTop: '2rem'}}>
        <Link href='/' className={styles.ctaButton}>Back to Home</Link>
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
