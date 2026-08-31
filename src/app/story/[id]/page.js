"use client";

import { useEffect, useState, use as ReactUse } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  MapPin,
  ShieldCheck,
  Compass,
  Heart,
} from "lucide-react";

import styles from "./gallery.module.css";

const galleriesData = {
  "secret-waterfall": {
    title: "Secret Waterfall Expedition",
    location: "Gokundi",
    images: [
      { src: "/secretwaterfall/secretwaterfall (1).jpg", caption: "Deep forest trail leading to the secret lagoon" },
      { src: "/secretwaterfall/secretwaterfall (2).jpg", caption: "Cliff jumping moments" },
      { src: "/secretwaterfall/secretwaterfall (9).jpg", caption: "Morning camp vibes" },
      { src: "/secretwaterfall/secretwaterfall (6).jpg", caption: "Group bonding by the stream" },
      { src: "/secretwaterfall/secretwaterfall (7).jpg", caption: "Unexplored green patches" },
      { src: "/secretwaterfall/secretwaterfall (3).jpg", caption: "Deep forest trail leading to the secret lagoon" },
      { src: "/secretwaterfall/secretwaterfall (4).jpg", caption: "Cliff jumping moments" },
      { src: "/secretwaterfall/secretwaterfall (5).jpg", caption: "Morning camp vibes" },
      { src: "/secretwaterfall/secretwaterfall (8).jpg", caption: "Group bonding by the stream" },
      { src: "/secretwaterfall/secretwaterfall (9).jpg", caption: "Unexplored green patches" },

            { src: "/secretwaterfall/secretwaterfall (10).jpg", caption: "Deep forest trail leading to the secret lagoon" },
      { src: "/secretwaterfall/secretwaterfall (11).jpg", caption: "Cliff jumping moments" },
      { src: "/secretwaterfall/secretwaterfall (12).jpg", caption: "Morning camp vibes" },
      { src: "/secretwaterfall/secretwaterfall (13).jpg", caption: "Group bonding by the stream" },
      { src: "/secretwaterfall/secretwaterfall (14).jpg", caption: "Unexplored green patches" },
      { src: "/secretwaterfall/secretwaterfall (15).jpg", caption: "Deep forest trail leading to the secret lagoon" },
      { src: "/secretwaterfall/secretwaterfall (16).jpg", caption: "Cliff jumping moments" },
      { src: "/secretwaterfall/secretwaterfall (17).jpg", caption: "Morning camp vibes" },
      { src: "/secretwaterfall/secretwaterfall (18).jpg", caption: "Group bonding by the stream" },
      { src: "/secretwaterfall/secretwaterfall (19).jpg", caption: "Unexplored green patches" },

            { src: "/secretwaterfall/secretwaterfall (20).jpg", caption: "Deep forest trail leading to the secret lagoon" },
      { src: "/secretwaterfall/secretwaterfall (21).jpg", caption: "Cliff jumping moments" },
      { src: "/secretwaterfall/secretwaterfall (22).jpg", caption: "Morning camp vibes" },
      { src: "/secretwaterfall/secretwaterfall (23).jpg", caption: "Group bonding by the stream" },
      { src: "/secretwaterfall/secretwaterfall (24).jpg", caption: "Unexplored green patches" },
      { src: "/secretwaterfall/secretwaterfall (25).jpg", caption: "Deep forest trail leading to the secret lagoon" },
      { src: "/secretwaterfall/secretwaterfall (26).jpg", caption: "Cliff jumping moments" },
      { src: "/secretwaterfall/secretwaterfall (27).jpg", caption: "Morning camp vibes" },
      { src: "/secretwaterfall/secretwaterfall (28).jpg", caption: "Group bonding by the stream" },
      { src: "/secretwaterfall/secretwaterfall (29).jpg", caption: "Unexplored green patches" },

            { src: "/secretwaterfall/secretwaterfall (30).jpg", caption: "Deep forest trail leading to the secret lagoon" },
      { src: "/secretwaterfall/secretwaterfall (31).jpg", caption: "Cliff jumping moments" },
      { src: "/secretwaterfall/secretwaterfall (32).jpg", caption: "Morning camp vibes" },
      { src: "/secretwaterfall/secretwaterfall (33).jpg", caption: "Group bonding by the stream" },
      { src: "/secretwaterfall/secretwaterfall (34).jpg", caption: "Unexplored green patches" },
      { src: "/secretwaterfall/secretwaterfall (35).jpg", caption: "Deep forest trail leading to the secret lagoon" },
      { src: "/secretwaterfall/secretwaterfall (36).jpg", caption: "Cliff jumping moments" },
      { src: "/secretwaterfall/secretwaterfall (37).jpg", caption: "Morning camp vibes" },
      { src: "/secretwaterfall/secretwaterfall (38).jpg", caption: "Group bonding by the stream" },
      { src: "/secretwaterfall/secretwaterfall (39).jpg", caption: "Unexplored green patches" },

            { src: "/secretwaterfall/secretwaterfall (40).jpg", caption: "Deep forest trail leading to the secret lagoon" },
      { src: "/secretwaterfall/secretwaterfall (41).jpg", caption: "Cliff jumping moments" },
      { src: "/secretwaterfall/secretwaterfall (42).jpg", caption: "Morning camp vibes" },
      { src: "/secretwaterfall/secretwaterfall (43).jpg", caption: "Group bonding by the stream" },
      { src: "/secretwaterfall/secretwaterfall (44).jpg", caption: "Unexplored green patches" },
      { src: "/secretwaterfall/secretwaterfall (45).jpg", caption: "Deep forest trail leading to the secret lagoon" },
      { src: "/secretwaterfall/secretwaterfall (46).jpg", caption: "Cliff jumping moments" },
      { src: "/secretwaterfall/secretwaterfall (47).jpg", caption: "Morning camp vibes" },
      { src: "/secretwaterfall/secretwaterfall (48).jpg", caption: "Group bonding by the stream" },
      { src: "/secretwaterfall/secretwaterfall (49).jpg", caption: "Unexplored green patches" },
    ],
  },
  rajmachi: {
    title: "Rajmachi Fireflies Festival",
    location: "Lonavala, Maharashtra",
    images: [
      { src: "/rajmachi/rajmachi (1).jpg", caption: "Night camping setup under stars" },
      { src: "/rajmachi/rajmachi (2).jpg", caption: "Magical fireflies glowing" },
      { src: "/rajmachi/rajmachi (6).jpg", caption: "Trail exploration" },
      { src: "/rajmachi/rajmachi (7).jpg", caption: "Explorer community group" },
      { src: "/rajmachi/rajmachi (5).jpg", caption: "Morning brew" },
    ],
  },
  kalu: {
    title: "Kalu Waterfall Expedition",
    location: "Malshej Ghat",
    images: [
      { src: "/kalu/kalu (1).jpg", caption: "Majestic view of Kalu waterfall" },
      { src: "/kalu/kalu (2).jpg", caption: "Explorers crossing the stream" },
      { src: "/kalu/kalu (3).jpg", caption: "Tracking through dense woods" },
      { src: "/kalu/kalu (4).jpg", caption: "Team group photo" },
    ],
  },
  aadrai: {
    title: "Aadrai Forest Trail",
    location: "Malshej Ghat",
    images: [
      { src: "/aadrai/aadrai (1).jpg", caption: "Dense fog in Aadrai forest" },
      { src: "/aadrai/aadrai (2).jpg", caption: "Green canopy views" },
      { src: "/aadrai/aadrai (3).jpg", caption: "Walking through wilderness" },
      { src: "/aadrai/aadrai (4).jpg", caption: "Monsoon streams" },
      { src: "/aadrai/aadrai (6).png", caption: "Trail discoveries" },
    ],
  },
  "dreamy-waterfall": {
    title: "Hidden Dreamy Waterfall & Blue Lagoon",
    location: "Murud",
    images: [
      { src: "/DreamyW/DW (3).jpg", caption: "The stunning blue lagoon" },
      { src: "/DreamyW/DW (22).jpg", caption: "Waterfall stream flow" },
      { src: "/DreamyW/DW (40).jpg", caption: "Greenery surroundings" },
      { src: "/DreamyW/DW (15).jpg", caption: "Explorers enjoying lagoon" },
      { src: "/DreamyW/DW (7).jpg", caption: "Peaceful forest path" },
    ],
  },
  harishchandragad: {
    title: "Harishchandragad Trek",
    location: "Malshej Ghat",
    images: [
      { src: "/harishchandragad/harishc (34).jpg", caption: "Konkan Kada breathtaking cliff view" },
      { src: "/harishchandragad/harishc (36).jpg", caption: "Trekking towards the peak" },
      { src: "/harishchandragad/harishc (19).jpg", caption: "Ancient rock-cut caves" },
      { src: "/harishchandragad/harishc (7).jpg", caption: "Sunset from the fort" },
      { src: "/harishchandragad/harishc (37).jpg", caption: "Summit celebration" },
    ],
  },
};

export default function GalleryPage({ params }) {
  const resolvedParams = ReactUse(params);
  const tourId = resolvedParams?.id || "secret-waterfall";
  const currentGallery = galleriesData[tourId] || galleriesData["secret-waterfall"];

  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const images = currentGallery.images;
  const totalImages = images.length;

  const openLightbox = (index) => setActiveImageIndex(index);
  const closeLightbox = () => setActiveImageIndex(null);

  const nextImage = () => {
    setActiveImageIndex((current) => (current === null ? 0 : (current + 1) % totalImages));
  };

  const previousImage = () => {
    setActiveImageIndex((current) => (current === null ? 0 : (current - 1 + totalImages) % totalImages));
  };

  useEffect(() => {
    if (activeImageIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyboard = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") previousImage();
    };

    window.addEventListener("keydown", handleKeyboard);
    return () => {
      window.removeEventListener("keydown", handleKeyboard);
      document.body.style.overflow = "";
    };
  }, [activeImageIndex]);

  return (
    <div className={styles.pageWrapper}>
      <main className={styles.page}>
        <header className={styles.header}>
          <div className={styles.headerTop}>
            <Link href="/story" className={styles.backBtn}>
              <ArrowLeft size={15} />
              <span>Back to Stories</span>
            </Link>

            <div className={styles.badge}>
              <Sparkles size={11} />
              <span>Official Visual Archive</span>
            </div>
          </div>

          <div className={styles.heading}>
            <span className={styles.eyebrow}>THE ROAMERS CULT</span>
            <h1>{currentGallery.title}</h1>
            <div className={styles.location}>
              <MapPin size={13} />
              <span>{currentGallery.location}</span>
            </div>
            <div className={styles.count}>{totalImages} Captured Moments</div>
          </div>
        </header>

        {/* MODERN MASONRY GRID */}
        <section className={styles.galleryGrid}>
          {images.map((image, index) => (
            <article
              key={`${image.src}-${index}`}
              className={`${styles.galleryItem} ${styles[`item${index % 6}`]}`}
              onClick={() => openLightbox(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  openLightbox(index);
                }
              }}
              role="button"
              tabIndex={0}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={image.src}
                  alt={image.caption}
                  fill
                  sizes="(max-width: 480px) 50vw, (max-width: 768px) 50vw, 33vw"
                  className={styles.galleryImg}
                />
                <div className={styles.imageGradient} />
                <div className={styles.imageNumber}>{String(index + 1).padStart(2, "0")}</div>
                <div className={styles.galleryOverlay}>
                  <div className={styles.zoomIcon}>
                    <Maximize2 size={13} />
                  </div>
                  <div className={styles.captionBox}>
                    <span>VIEW MOMENT</span>
                    <p>{image.caption}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

      {/* LIGHTBOX MODAL */}
      {activeImageIndex !== null && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <div className={styles.lightboxCounter}>
            <strong>{String(activeImageIndex + 1).padStart(2, "0")}</strong>
            <span>/</span>
            {String(totalImages).padStart(2, "0")}
          </div>

          <button
            type="button"
            className={styles.closeBtn}
            onClick={closeLightbox}
            aria-label="Close gallery"
          >
            <X size={20} />
          </button>

          {totalImages > 1 && (
            <button
              type="button"
              className={`${styles.navBtn} ${styles.prevBtn}`}
              onClick={(event) => {
                event.stopPropagation();
                previousImage();
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          <div className={styles.lightboxContent} onClick={(event) => event.stopPropagation()}>
            <div className={styles.lightboxImageBox}>
              <Image
                src={images[activeImageIndex].src}
                alt={images[activeImageIndex].caption}
                fill
                sizes="90vw"
                className={styles.lightboxImage}
                priority
              />
            </div>

            <div className={styles.lightboxInfo}>
              <div className={styles.lightboxText}>
                <span>THE ROAMERS CULT</span>
                <p>{images[activeImageIndex].caption}</p>
              </div>
              <div className={styles.lightboxLocation}>
                <MapPin size={12} />
                {currentGallery.location}
              </div>
            </div>
          </div>

          {totalImages > 1 && (
            <button
              type="button"
              className={`${styles.navBtn} ${styles.nextBtn}`}
              onClick={(event) => {
                event.stopPropagation();
                nextImage();
              }}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      )}

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <h3>THE ROAMERS CULT</h3>
            <p>Crafting unforgettable outdoor adventures, soulful trails, and lifetime memories across the Sahyadris and beyond.</p>
          </div>

          <div className={styles.footerColumn}>
            <h4>Explore</h4>
            <Link href="/tours">All Tours</Link>
            <Link href="/story">Our Stories</Link>
          </div>

          <div className={styles.footerColumn}>
            <h4>Safety & Trust</h4>
            <span><ShieldCheck size={13} /> Verified Leaders</span>
            <span><Compass size={13} /> Curated Adventures</span>
            <span><Heart size={13} /> Happy Explorers</span>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} The Roamers Cult. All rights reserved.</p>
          <span>ADVENTURE • EXPLORE • REMEMBER</span>
        </div>
      </footer>
    </div>
  );
}