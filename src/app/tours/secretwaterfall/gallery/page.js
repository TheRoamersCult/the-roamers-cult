"use client";

import { useState, use as ReactUse } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Maximize2, X, ChevronLeft, ChevronRight, Sparkles, MapPin } from "lucide-react";
import styles from "./gallery.module.css";

const galleriesData = {
  "secret-waterfall": {
    title: "Secret Waterfall Expedition",
    location: "Gokundi",
    images: [
      { id: 1, src: "/secretwaterfall/secretwaterfall (1).jpg", size: "large", caption: "Deep forest trail leading to the secret lagoon" },
      { id: 2, src: "/secretwaterfall/secretwaterfall (2).jpg", size: "tall", caption: "Cliff jumping moments" },
      { id: 3, src: "/secretwaterfall/secretwaterfall (9).jpg", size: "small", caption: "Morning camp vibes" },
      { id: 4, src: "/secretwaterfall/secretwaterfall (6).jpg", size: "wide", caption: "Group bonding by the stream" },
      { id: 5, src: "/secretwaterfall/secretwaterfall (7).jpg", size: "small", caption: "Unexplored green patches" },
    ]
  },
  "rajmachi": {
    title: "Rajmachi Fireflies Festival",
    location: "Lonavala, Maharashtra",
    images: [
      { id: 1, src: "/rajmachi/rajmachi (1).jpg", size: "large", caption: "Night camping setup under stars" },
      { id: 2, src: "/rajmachi/rajmachi (2).jpg", size: "tall", caption: "Magical fireflies glowing" },
      { id: 3, src: "/rajmachi/rajmachi (6).jpg", size: "small", caption: "Trail exploration" },
      { id: 4, src: "/rajmachi/rajmachi (7).jpg", size: "wide", caption: "Explorer community group" },
      { id: 5, src: "/rajmachi/rajmachi (5).jpg", size: "small", caption: "Morning brew" },
    ]
  },
  "kalu": {
    title: "Kalu Waterfall Expedition",
    location: "Malshej Ghat",
    images: [
      { id: 1, src: "/kalu/kalu (1).jpg", size: "large", caption: "Majestic view of Kalu waterfall" },
      { id: 2, src: "/kalu/kalu (2).jpg", size: "tall", caption: "Explorers crossing the stream" },
      { id: 3, src: "/kalu/kalu (3).jpg", size: "small", caption: "Tracking through dense woods" },
      { id: 4, src: "/kalu/kalu (4).jpg", size: "wide", caption: "Team group photo" },
    ]
  },
  "aadrai": {
    title: "Aadrai Forest Trail",
    location: "Malshej Ghat",
    images: [
      { id: 1, src: "/aadrai/aadrai (1).jpg", size: "large", caption: "Dense fog in Aadrai forest" },
      { id: 2, src: "/aadrai/aadrai (2).jpg", size: "tall", caption: "Green canopy views" },
      { id: 3, src: "/aadrai/aadrai (3).jpg", size: "small", caption: "Walking through wilderness" },
      { id: 4, src: "/aadrai/aadrai (4).jpg", size: "wide", caption: "Monsoon streams" },
      { id: 5, src: "/aadrai/aadrai (6).png", size: "small", caption: "Trail discoveries" },
    ]
  },
  "dreamy-waterfall": {
    title: "Hidden Dreamy Waterfall & Blue Lagoon",
    location: "Murud",
    images: [
      { id: 1, src: "/DreamyW/DW (3).jpg", size: "large", caption: "The stunning blue lagoon" },
      { id: 2, src: "/DreamyW/DW (22).jpg", size: "tall", caption: "Waterfall stream flow" },
      { id: 3, src: "/DreamyW/DW (40).jpg", size: "small", caption: "Greenery surroundings" },
      { id: 4, src: "/DreamyW/DW (15).jpg", size: "wide", caption: "Explorers enjoying lagoon" },
      { id: 5, src: "/DreamyW/DW (7).jpg", size: "small", caption: "Peaceful forest path" },
    ]
  },
  "harishchandragad": {
    title: "Harishchandragad Trek",
    location: "Malshej Ghat",
    images: [
      { id: 1, src: "/harishchandragad/harishc (34).jpg", size: "large", caption: "Konkan Kada breathtaking cliff view" },
      { id: 2, src: "/harishchandragad/harishc (36).jpg", size: "tall", caption: "Trekking towards the peak" },
      { id: 3, src: "/harishchandragad/harishc (19).jpg", size: "small", caption: "Ancient rock-cut caves" },
      { id: 4, src: "/harishchandragad/harishc (7).jpg", size: "wide", caption: "Sunset from the fort" },
      { id: 5, src: "/harishchandragad/harishc (37).jpg", size: "small", caption: "Summit celebration" },
    ]
  }
};

export default function GalleryPage({ params }) {
  const resolvedParams = ReactUse(params);
  const tourId = resolvedParams?.id || "secret-waterfall";
  const currentGallery = galleriesData[tourId] || galleriesData["secret-waterfall"];

  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const openLightbox = (index) => setActiveImageIndex(index);
  const closeLightbox = () => setActiveImageIndex(null);

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % currentGallery.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + currentGallery.images.length) % currentGallery.images.length);
  };

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <Link href="/story" className={styles.backBtn}>
            <ArrowLeft size={16} /> Back to Stories
          </Link>
          <span className={styles.badge}>
            <Sparkles size={12} /> Official Visual Archive
          </span>
        </div>
        <h1>{currentGallery.title}</h1>
        <p className={styles.location}>
          <MapPin size={14} /> {currentGallery.location} — {currentGallery.images.length} Captured Moments
        </p>
      </header>

      <section className={styles.galleryGrid}>
        {currentGallery.images.map((img, index) => (
          <div 
            key={img.id} 
            className={`${styles.galleryItem} ${styles[img.size]}`}
            onClick={() => openLightbox(index)}
          >
            <div className={styles.imageWrapper}>
              <Image 
                src={img.src} 
                alt={img.caption} 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw"
                className={styles.galleryImg}
              />
              <div className={styles.overlay}>
                <span className={styles.zoomIcon}><Maximize2 size={18} /></span>
                <p className={styles.caption}>{img.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {activeImageIndex !== null && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button className={styles.closeBtn} onClick={closeLightbox}>
            <X size={24} />
          </button>
          
          <button className={styles.navBtnPrev} onClick={prevImage}>
            <ChevronLeft size={28} />
          </button>

          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.lightboxImgContainer}>
              <Image 
                src={currentGallery.images[activeImageIndex].src} 
                alt="Enlarged view"
                fill
                className={styles.lightboxImg}
                priority
              />
            </div>
            <div className={styles.lightboxFooter}>
              <p>{currentGallery.images[activeImageIndex].caption}</p>
              <span className={styles.counter}>
                {activeImageIndex + 1} / {currentGallery.images.length}
              </span>
            </div>
          </div>

          <button className={styles.navBtnNext} onClick={nextImage}>
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </main>
  );
}