"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const premiumFadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.bgWrapper}>
        <motion.img
          src="/roamersvultBG.jpg"
          alt="travel"
          className={styles.bgImage}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.6,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
        <div className={styles.overlay}></div>
        <div className={styles.grid}></div>
      </div>

      {/* <motion.div
        className={styles.topBar}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className={styles.logo}>
          <span></span>
          THE ROAMER'S CULT
        </div>
        <button className={styles.menuBtn}>
          <div></div>
          <div></div>
        </button>
      </motion.div> */}

      <div className={styles.container}>
        <div className={styles.leftContent}>
          <motion.div
            className={styles.tag}
            variants={premiumFadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
          >
            PREMIUM EXPEDITIONS
          </motion.div>

          <motion.h1
            className={styles.title}
            variants={premiumFadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
          >
            Explore
            <br />
            Beyond Limits
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            variants={premiumFadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
          >
            Crafted luxury journeys for explorers, creators and wild souls.
          </motion.p>

          <motion.div
            className={styles.actions}
            variants={premiumFadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
          >
            <button className={styles.primaryBtn}>Start Journey</button>
            <button className={styles.secondaryBtn}>View Trips</button>
          </motion.div>

          <motion.div
            className={styles.stats}
            variants={premiumFadeUp}
            initial="hidden"
            animate="visible"
            custom={0.5}
          >
            <div className={styles.statCard}>
              <h4>24+</h4>
              <p>Destinations</p>
            </div>
            <div className={styles.statCard}>
              <h4>18K</h4>
              <p>Travelers</p>
            </div>
            <div className={styles.statCard}>
              <h4>4.9★</h4>
              <p>Ratings</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.floatCard}
          initial={{ opacity: 0, x: 20, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            delay: 0.45,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className={styles.floatTop}>
            <span></span>
            LIVE / 2026
          </div>
          <h3>Roam Freely</h3>
          <p>
            Experience raw adventures across mountains and hidden destinations.
          </p>
          <div className={styles.progress}>
            <div className={styles.progressFill}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}