import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.brand}>
          <h2>THE ROAMER'S CULT</h2>
          <p>Redefining adventure for the modern traveler. Join us as we explore the hidden gems of the wilderness.</p>
        </div>

        <div className={styles.column}>
          <h4>EXPLORE</h4>
          <ul>
            <li>Tours</li>
            <li>Gallery</li>
            <li>Fireflies Festival</li>
            <li>Upcoming Trips</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>COMPANY</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Our Story</li>
            <li>Sustainability</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>SUPPORT</h4>
          <ul>
            <li>Contact</li>
            <li>FAQs</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      
      <div className={styles.copyright}>
        © {new Date().getFullYear()} The Roamer's Cult. Crafted with precision for the wanderers.
      </div>
    </footer>
  );
}