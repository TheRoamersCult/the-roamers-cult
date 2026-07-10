"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { supabase } from "@/lib/supabase";
import styles from "./Navbar.module.css";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {

    const getSession = async () => {

      const { data } =
        await supabase.auth.getSession();

      setUser(data.session?.user || null);

    };

    getSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {

        setUser(session?.user || null);

      }
    );

    const handleScroll = () => {

      setScrolled(window.scrollY > 20);

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    if (isOpen) {

      document.body.style.overflow = "hidden";

    } else {

      document.body.style.overflow = "";

    }

    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

      subscription.unsubscribe();

      document.body.style.overflow = "";

    };

  }, [isOpen]);

  const getPath = (item) =>
    item === "Home"
      ? "/"
      : `/${item.toLowerCase().replace(/\s+/g, "")}`;

  return (

    <header
      className={`${styles.navbar} ${
        scrolled ? styles.scrolled : ""
      }`}
    >

      <nav
        className={styles.navContainer}
      >

        {/* ================= LOGO ================= */}

        <Link
          href="/"
          className={styles.logoLink}
        >

          <motion.div

            className={styles.logoWrapper}

            initial={{
              opacity:0,
              scale:.92
            }}

            animate={{
              opacity:1,
              scale:1
            }}

            transition={{
              duration:.45
            }}

          >

            <img
              src="/roamers cult BG logo.png"
              alt="Roamers Cult"
              className={styles.logoImage}
            />

          </motion.div>

        </Link>

        {/* =============== DESKTOP MENU =============== */}

        <div className={styles.desktopLinks}>

          {[
            "Home",
            "Tours",
            "Our Story",
          ].map((item,index)=>(

            <motion.div

              key={item}

              initial={{
                opacity:0,
                y:-12
              }}

              animate={{
                opacity:1,
                y:0
              }}

              transition={{
                delay:index*.08
              }}

            >

              <Link

                href={getPath(item)}

                className={styles.link}

              >

                {item}

              </Link>

            </motion.div>

          ))}

        </div>

                {/* ===========================
            RIGHT ACTION AREA
        =========================== */}

        <div className={styles.actionArea}>

          {/* ---------- AUTH ---------- */}

          <div className={styles.authContainer}>

            {user ? (

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .35 }}
              >
                <Link
                  href="/dashboard"
                  className={styles.signupBtn}
                >
                  Dashboard
                </Link>
              </motion.div>

            ) : (

              <>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: .35 }}
                >
                  <Link
                    href="/login"
                    className={styles.loginLink}
                  >
                    Log In
                  </Link>
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: .92,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: .4,
                    delay: .05,
                  }}
                >
                  <Link
                    href="/signup"
                    className={styles.signupBtn}
                  >
                    Sign Up
                  </Link>
                </motion.div>

              </>

            )}

          </div>

          <span className={styles.divider}></span>

          {/* ---------- BOOK BUTTON ---------- */}

          <motion.div
            className={styles.btnWrapper}
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: .96,
            }}
          >

            <button
              className={styles.bookBtn}
            >

              <span className={styles.btnTextDesktop}>
                Book Experience
              </span>

              <span className={styles.btnTextMobile}>
                Book
              </span>

            </button>

          </motion.div>

          {/* ---------- HAMBURGER ---------- */}

          <button

            className={`${styles.hamburger}
            ${
              isOpen
                ? styles.hamburgerActive
                : ""
            }`}

            onClick={() =>
              setIsOpen(!isOpen)
            }

            aria-label="Toggle Menu"

            aria-expanded={isOpen}

          >

            <span className={styles.line}></span>

            <span className={styles.line}></span>

            <span className={styles.line}></span>

          </button>

        </div>

      </nav>

      {/* ===========================
            MOBILE DRAWER
      =========================== */}

      <AnimatePresence>

        {isOpen && (

          <motion.div

            className={styles.mobileMenu}

            initial={{
              x: "100%",
            }}

            animate={{
              x: 0,
            }}

            exit={{
              x: "100%",
            }}

            transition={{
              duration: .45,
              ease: [0.22,1,0.36,1],
            }}

     >
                  {/* ===========================
                DRAWER HEADER
            =========================== */}

            <div className={styles.mobileHeader}>

              <Link
                href="/"
                onClick={() => setIsOpen(false)}
              >
                <img
                  src="/roamers cult BG logo2.png"
                  alt="Roamers Cult"
                  className={styles.mobileLogo}
                />
              </Link>

              <button
                className={styles.mobileClose}
                onClick={() => setIsOpen(false)}
                aria-label="Close Menu"
              >
                <FaArrowLeft />
              </button>

            </div>

            {/* ===========================
                DRAWER BODY
            =========================== */}

            <div className={styles.mobileLinksWrapper}>

              {[
                "Home",
                "Tours",
                "Our Story",
              ].map((item, index) => (

                <motion.div

                  key={item}

                  className={styles.mobileLinkRow}

                  initial={{
                    opacity: 0,
                    x: 40,
                  }}

                  animate={{
                    opacity: 1,
                    x: 0,
                  }}

                  transition={{
                    delay: index * 0.08,
                  }}

                >

                  <Link

                    href={getPath(item)}

                    className={styles.mobileLink}

                    onClick={() =>
                      setIsOpen(false)
                    }

                  >

                    {item}

                  </Link>

                </motion.div>

              ))}

            </div>

            {/* ===========================
                DRAWER FOOTER
            =========================== */}

            <div className={styles.mobileAuthStack}>

              {user ? (

                <Link

                  href="/dashboard"

                  className={styles.mobileSignup}

                  onClick={() =>
                    setIsOpen(false)
                  }

                >

                  Dashboard

                </Link>

              ) : (

                <>

                  <Link

                    href="/login"

                    className={styles.mobileLogin}

                    onClick={() =>
                      setIsOpen(false)
                    }

                  >

                    Log In

                  </Link>

                  <Link

                    href="/signup"

                    className={styles.mobileSignup}

                    onClick={() =>
                      setIsOpen(false)
                    }

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