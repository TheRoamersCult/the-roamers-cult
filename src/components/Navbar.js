"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.navContainer} aria-label="Main Navigation">
        
        <Link href="/" className={styles.logoLink}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={styles.logoWrapper}
          >
            <img 
              src="/roamers cult BG logo.png" 
              alt="The Roamer's Cult" 
              className={styles.logoImage} 
            />
          </motion.div>
        </Link>

        <div className={styles.desktopLinks}>
          {['Home', 'Tours', 'Our Story'].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
            >
              <Link href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(" ", "")}`} className={styles.link}>
                {item}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className={styles.actionArea}>
          <div className={styles.authContainer}>
            <Link href="/login" className={styles.loginLink}>Log In</Link>
            <Link href="/signup" className={styles.signupBtn}>Sign Up</Link>
          </div>

          <span className={styles.divider}></span>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={styles.btnWrapper}
          >
            <button className={styles.bookBtn}>
              <span className={styles.btnTextDesktop}>Book Experience</span>
              <span className={styles.btnTextMobile}>Book an Experience</span>
            </button>
          </motion.div>

          <button 
            className={`${styles.hamburger} ${isOpen ? styles.hamburgerActive : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={styles.mobileMenu}
          >
            <div className={styles.mobileLinksWrapper}>
              {['Home', 'Tours', 'Our Story'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={styles.mobileLinkRow}
                >
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(" ", "")}`} 
                    onClick={() => setIsOpen(false)} 
                    className={styles.mobileLink}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              
              <div className={styles.mobileAuthStack}>
                <Link href="/login" onClick={() => setIsOpen(false)} className={styles.mobileLogin}>
                  Log In
                </Link>
                <Link href="/signup" onClick={() => setIsOpen(false)} className={styles.mobileSignup}>
                  Sign Up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}