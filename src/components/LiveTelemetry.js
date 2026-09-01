"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaShareAlt, FaCheck } from "react-icons/fa";
import { History, Sparkles, MapPin, Calendar, ArrowRight, Flame } from "lucide-react";
import styles from "./LiveTelemetry.module.css";

const liveExpeditions = [
  {
    id: "hidden-waterfall",
    title: "Hidden Dreamy Waterfall & Blue Lagoon",
    price: "₹1,799",
    status: "LIVE BATCH #1",
    location: "Murud, Maharashtra",
    duration: "1 Day",
    image: "/DreamyW/DW (16).jpg",
    route: "/tours/hidden-waterfall",
  },
//   {
//     id: "rajmachi-camping",
//     title: "Rajmachi Starry Night Camping",
//     price: "₹1,499",
//     status: "FILLING FAST",
//     location: "Lonavala",
//     duration: "1 Night / 1 Day",
//     image: "/rajmachi/rajmachi (1).jpg",
//     route: "/tours/rajmachi-camping",
//   },
];

const pastExpeditions = [
  {
    id: "kalu",
    title: "Kalu Waterfall",
    location: "Malshej Ghat",
    duration: "1 Day",
    price: "₹1,499",
    image: "/kalu/kalu (4).jpg",
    memories: "200+ Explorers",
    route: "/story/kalu",
  },
  {
    id: "aadrai",
    title: "Aadrai Forest",
    location: "Malshej Ghat",
    duration: "1 Day",
    price: "₹1,499",
    image: "/aadrai/aadrai (22).jpg",
    memories: "300+ Explorers",
    route: "/story/aadrai",
  },
  {
    id: "secret-waterfall",
    title: "Secret Waterfall",
    location: "Gokundi",
    duration: "1 Day",
    price: "₹1,399",
    image: "/secretwaterfall/secretwaterfall (1).jpg",
    memories: "300+ Explorers",
    route: "/story/secret-waterfall",
  },
  {
    id: "rajmachi",
    title: "Rajmachi Fireflies",
    location: "Lonavala",
    duration: "1 Night / 1 Day",
    price: "₹1,399",
    image: "/rajmachi/rajmachi (2).jpg",
    memories: "200+ Explorers",
    route: "/story/rajmachi",
  },
  {
    id: "harishchandragad",
    title: "Harishchandragad",
    location: "Malshej Ghat",
    duration: "1 Day",
    price: "₹1,499",
    image: "/harishchandragad/harishc (1).jpg",
    memories: "300+ Explorers",
    route: "/story/harishchandragad",
  },
];

export default function LiveTelemetry() {
  const router = useRouter();
  const liveSliderRef = useRef(null);
  const pastSliderRef = useRef(null);
  const [copiedId, setCopiedId] = useState(null);

  const scrollSlider = (ref, direction, cardClassName) => {
    if (!ref.current) return;
    const card = ref.current.querySelector(`.${cardClassName}`);
    if (!card) return;
    const gap = 16;
    const scrollAmount = card.offsetWidth + gap;
    ref.current.scrollBy({
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
        <h2>Live Expeditions & Archives</h2>
        <p>
          Secure your spot on our active live booking batches or explore memories from our successfully completed trails.
        </p>
      </div>

      {/* LIVE EXPEDITIONS SLIDER */}
      <div className={styles.liveSectionHeader}>
        <h3>
          <Flame size={16} className={styles.iconGold} /> Active Live Bookings
        </h3>
      </div>

      <div className={styles.sliderWrapper}>
        <button
          className={`${styles.navBtn} ${styles.left}`}
          onClick={() => scrollSlider(liveSliderRef, -1, styles.liveCard)}
          aria-label="Previous Live"
        >
          <FaArrowLeft />
        </button>

        <div className={styles.liveContainer} ref={liveSliderRef}>
          {liveExpeditions.map((trip, index) => (
            <motion.div
              key={trip.id}
              className={styles.liveCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              onClick={() => router.push(trip.route)}
            >
              <div className={styles.liveImgBox}>
                <span className={styles.status}>{trip.status}</span>
                <button
                  className={styles.shareBtn}
                  onClick={(e) => handleShare(e, trip)}
                  aria-label="Share trip"
                  title="Share link"
                >
                  {copiedId === trip.id ? <FaCheck className={styles.copiedIcon} /> : <FaShareAlt />}
                </button>
                <img src={trip.image} alt={trip.title} loading="lazy" />
              </div>

              <div className={styles.liveContent}>
                <div className={styles.metaRow}>
                  <span><MapPin size={10} /> {trip.location}</span>
                  <span><Calendar size={10} /> {trip.duration}</span>
                </div>
                <h4 className={styles.liveTitle}>{trip.title}</h4>
                <div className={styles.liveFooter}>
                  <div>
                    <span className={styles.priceLbl}>Starting From</span>
                    <strong className={styles.priceVal}>{trip.price}</strong>
                  </div>
                  <span className={styles.bookBtn}>
                    View Details <ArrowRight size={11} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <button
          className={`${styles.navBtn} ${styles.right}`}
          onClick={() => scrollSlider(liveSliderRef, 1, styles.liveCard)}
          aria-label="Next Live"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* PAST EXPEDITIONS ARCHIVES SLIDER */}
      <div className={styles.pastSectionHeader}>
        <h3>
          <History size={16} className={styles.iconGold} /> Completed Expeditions Archives
        </h3>
      </div>

      <div className={styles.sliderWrapper}>
        <button
          className={`${styles.navBtn} ${styles.left}`}
          onClick={() => scrollSlider(pastSliderRef, -1, styles.miniCard)}
          aria-label="Previous Past"
        >
          <FaArrowLeft />
        </button>

        <div className={styles.miniContainer} ref={pastSliderRef}>
          {pastExpeditions.map((tour, index) => (
            <motion.div
              key={tour.id}
              className={styles.miniCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              onClick={() => router.push(tour.route)}
            >
              <div className={styles.miniImgBox}>
                <span className={styles.pastBadge}><Sparkles size={9} /> {tour.memories}</span>
                <img src={tour.image} alt={tour.title} loading="lazy" />
              </div>

              <div className={styles.miniContent}>
                <div className={styles.miniMeta}>
                  <span><MapPin size={10} /> {tour.location}</span>
                </div>
                <h4 className={styles.miniTitle}>{tour.title}</h4>
                <div className={styles.miniFooter}>
                  <span className={styles.completedLbl}>Completed</span>
                  <span className={styles.miniLinkText}>
                    Memories <ArrowRight size={10} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <button
          className={`${styles.navBtn} ${styles.right}`}
          onClick={() => scrollSlider(pastSliderRef, 1, styles.miniCard)}
          aria-label="Next Past"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}