"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { supabase } from "@/lib/supabase";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user || null);
    };

    getSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      subscription.unsubscribe();
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const getPath = (item) => {
    if (item === "Home") return "/";
    if (item === "Our Journey") return "/story";
    if (item === "About Us") return "/about";
    return `/${item.toLowerCase().replace(/\s+/g, "")}`;
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logoLink}>
          <div className={styles.logoWrapper}>
            <img
              src="/roamers cult BG logo.png"
              alt="The Roamer's Cult"
              className={styles.logoImage}
            />
          </div>
        </Link>

        <nav className={styles.desktopLinks}>
          {["Home", "Tours", "Our Journey", "About Us"].map((item) => (
            <Link key={item} href={getPath(item)} className={styles.link}>
              {item}
            </Link>
          ))}
        </nav>

        <div className={styles.actionArea}>
          <div className={styles.authContainer}>
            {user ? (
              <Link href="/dashboard" className={styles.signupBtn}>
                Dashboard
              </Link>
            ) : (
              <>
                <Link href="/login" className={styles.loginLink}>
                  Log In
                </Link>
                <Link href="/signup" className={styles.signupBtn}>
                  Sign Up
                </Link>
              </>
            )}
          </div>

          <span className={styles.divider}></span>

          {/* <button className={styles.bookBtn}>
            <span className={styles.btnTextDesktop}>Book Experience</span>
            <span className={styles.btnTextMobile}>Book</span>
          </button> */}
          <Link href="/booking">
  <button className={styles.bookBtn}>
    <span className={styles.btnTextDesktop}>Book Experience</span>
    <span className={styles.btnTextMobile}>Book</span>
  </button>
</Link>

          <button
            className={`${styles.hamburger} ${isOpen ? styles.hamburgerActive : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className={styles.mobileLinksWrapper}>
              {["Home", "Tours", "Our Journey", "About Us"].map((item) => (
                <Link
                  key={item}
                  href={getPath(item)}
                  className={styles.mobileLink}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>

            <div className={styles.mobileAuthStack}>
              {user ? (
                <Link
                  href="/dashboard"
                  className={styles.mobileSignup}
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    href="/login"
                    className={styles.mobileLogin}
                    onClick={() => setIsOpen(false)}
                  >
                    Log In
                  </Link>
                  <Link
                    href="/signup"
                    className={styles.mobileSignup}
                    onClick={() => setIsOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}