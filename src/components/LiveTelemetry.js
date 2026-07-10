
"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./LiveTelemetry.module.css";

const trips = [
  {
    id: 1,
    title: "Aadrai Forest",
    price: "₹1499 (Pune) & ₹1599 (Mumbai)",
    status: "LIVE BOOKING",
    image: "/aadraiBGI.png",
    route: "/tours/aadrai-forest",
  },
  // {
  //   id: 2,
  //   title: "Kalu Waterfall",
  //   price: "₹1499",
  //   status: "LIVE BOOKING",
  //   image: "/Kaluwaterfall.png",
  //   route: "/tours/two",
  // },
  // {
  //   id: 3,
  //   title: "HarishchandraGad",
  //   price: "₹1599",
  //   status: "LIVE BOOKING",
  //   image: "/harishchandragadBGI.jpg",
  //   route: "/tours/three",
  // },
  //   {
  //   id: 4,
  //   title: "Hidden Waterfall",
  //   price: "₹1599",
  //   status: "LIVE BOOKING",
  //   image: "/harishchandragadBGI.jpg",
  //   route: "/tours/three",
  // },
];

export default function ExpeditionSection() {
  const router = useRouter();
  const sliderRef = useRef(null);

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

        <div
          className={styles.container}
          ref={sliderRef}
        >
          {trips.map((trip, index) => (
            <motion.div
              key={trip.id}
              className={styles.card}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              onClick={() => router.push(trip.route)}
            >
              <div className={styles.imgBox}>
                <span className={styles.status}>
                  {trip.status}
                </span>

                <img
                  src={trip.image}
                  alt={trip.title}
                  loading="lazy"
                />
              </div>

              <div className={styles.content}>
                <h3 className={styles.title}>
                  {trip.title}
                </h3>

                <p className={styles.price}>
                  Starting From {trip.price}
                </p>

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

