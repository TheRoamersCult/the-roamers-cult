"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaShareAlt, FaCheck } from "react-icons/fa";
import styles from "./LiveTelemetry.module.css";

const trips = [
  {
    id: 1,
    title: "Hidden Dreamy Waterfall",
    price: "₹1799",
    status: "LIVE BOOKING",
    image: "/DreamyW/DW (16).jpg",
    route: "/tours/hidden-waterfall",
  },
  // {
  //   id: 2,
  //   title: "Aadrai Forest",
  //   price: "₹1499",
  //   status: "POPULAR",
  //   image: "/aadraiBGI.png",
  //   route: "/tours/aadrai-forest",
  // },
  // {
  //   id: 3,
  //   title: "Harishchandragad Trek",
  //   price: "₹1599",
  //   status: "TRENDING",
  //   image: "/harishchandragadBGI.jpg",
  //   route: "/tours/three",
  // },
  // {
  //   id: 4,
  //   title: "Devkund Waterfall",
  //   price: "₹1499",
  //   status: "FAST FILLING",
  //   image: "/DreamyW/DW (5).jpg",
  //   route: "/tours/hidden-waterfall",
  // },
];

export default function ExpeditionSection() {
  const router = useRouter();
  const sliderRef = useRef(null);
  const [copiedId, setCopiedId] = useState(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.querySelector(`.${styles.card}`);
    if (!card) return;
    const gap = 24;
    const scrollAmount = card.offsetWidth + gap;
    sliderRef.current.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth",
    });
  };

  const handleShare = async (e, trip) => {
    e.stopPropagation();
    const shareUrl = `${window.location.origin}${trip.route}`;
    const shareData = {
      title: trip.title,
      text: `Check out this amazing expedition: ${trip.title} starting at ${trip.price}!`,
      url: shareUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log("Sharing failed", err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopiedId(trip.id);
        setTimeout(() => setCopiedId(null), 2000);
      } catch (err) {
        console.error("Failed to copy", err);
      }
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>Upcoming Expeditions</h2>
        <p>
          Discover breathtaking destinations, thrilling adventures and
          unforgettable trekking experiences crafted for explorers.
        </p>
      </div>

      <div className={styles.sliderWrapper}>
        <button
          className={`${styles.navBtn} ${styles.left}`}
          onClick={() => scroll(-1)}
          aria-label="Previous"
        >
          <FaArrowLeft />
        </button>

        <div className={styles.container} ref={sliderRef}>
          {trips.map((trip, index) => (
            <motion.div
              key={trip.id}
              className={styles.card}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push(trip.route)}
            >
              <div className={styles.imgBox}>
                <span className={styles.status}>{trip.status}</span>
                <button
                  className={styles.shareBtn}
                  onClick={(e) => handleShare(e, trip)}
                  aria-label="Share trip"
                  title="Share with link"
                >
                  {copiedId === trip.id ? <FaCheck className={styles.copiedIcon} /> : <FaShareAlt />}
                </button>
                <img src={trip.image} alt={trip.title} loading="lazy" />
              </div>

              <div className={styles.content}>
                <h3 className={styles.title}>{trip.title}</h3>
                <p className={styles.price}>Starting From {trip.price}</p>
                <button
                  className={styles.btn}
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(trip.route);
                  }}
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <button
          className={`${styles.navBtn} ${styles.right}`}
          onClick={() => scroll(1)}
          aria-label="Next"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}