"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";
import styles from "./StoryPreviews.module.css";

const featuredStories = [
  {
    id: "secret-waterfall",
    title: "Secret Waterfall",
    location: "Gokundi",
    desc: "Hidden trails, cliff jumps, and starlit camps.",
    images: [
      "/secretwaterfall/secretwaterfall (1).jpg",
      "/secretwaterfall/secretwaterfall (2).JPG",
      "/secretwaterfall/secretwaterfall (9).JPG",
      "/secretwaterfall/secretwaterfall (6).JPG",
    ],
  },
  {
    id: "rajmachi",
    title: "Rajmachi Fireflies",
    location: "Lonavala",
    desc: "Magical glowing trails under the nocturnal canopy.",
    images: [
      "/rajmachi/rajmachi (1).jpg",
      "/rajmachi/rajmachi (2).jpg",
      "/rajmachi/rajmachi (6).jpg",
      "/rajmachi/rajmachi (7).jpg",
    ],
  },
  {
    id: "kalu",
    title: "Kalu Waterfall",
    location: "Malshej Ghat",
    desc: "Spectacular multi-tier falls and rugged terrain.",
    images: [
      "/kalu/kalu (1).jpg",
      "/kalu/kalu (2).jpg",
      "/kalu/kalu (3).jpg",
      "/kalu/kalu (4).jpg",
    ],
  },
  {
    id: "aadrai",
    title: "Aadrai Forest",
    location: "Malshej Ghat",
    desc: "Dense forest trekking trail with lush green canopies.",
    images: [
      "/aadrai/aadrai (1).jpg",
      "/aadrai/aadrai (2).jpg",
      "/aadrai/aadrai (3).jpg",
      "/aadrai/aadrai (4).jpg",
    ],
  },
  {
    id: "dreamy-waterfall",
    title: "Dreamy Waterfall & Lagoon",
    location: "Murud",
    desc: "Hidden gem leading to a natural blue lagoon.",
    images: [
      "/DreamyW/DW (3).jpg",
      "/DreamyW/DW (22).jpg",
      "/DreamyW/DW (40).jpg",
      "/DreamyW/DW (15).jpg",
    ],
  },
  {
    id: "harishchandragad",
    title: "Harishchandragad",
    location: "Malshej Ghat",
    desc: "Iconic fort, historic caves, and Konkan Kada.",
    images: [
      "/harishchandragad/harishc (34).JPG",
      "/harishchandragad/harishc (36).jpg",
      "/harishchandragad/harishc (19).JPG",
      "/harishchandragad/harishc (7).JPG",
    ],
  },
];

export default function StoryPreviews() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.badge}>
            <Sparkles size={12} />
            <span>VISUAL ARCHIVES</span>
          </div>
          <h2>Stories from the Wild</h2>
          <p>A compact glimpse into our recent expeditions across the Sahyadris.</p>
        </div>

        <div className={styles.grid}>
          {featuredStories.map((story) => (
            <article key={story.id} className={styles.card}>
              <div className={styles.imageCollage}>
                <div className={styles.mainImgWrap}>
                  <Image
                    src={story.images[0]}
                    alt={story.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={styles.img}
                  />
                </div>
                <div className={styles.subImagesGrid}>
                  {story.images.slice(1, 4).map((img, idx) => (
                    <div key={idx} className={styles.subImgWrap}>
                      <Image
                        src={img}
                        alt={`${story.title} preview`}
                        fill
                        sizes="10vw"
                        className={styles.img}
                      />
                      {idx === 2 && (
                        <div className={styles.moreOverlay}>
                          <span>+ More</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.location}>
                  <MapPin size={11} />
                  <span>{story.location}</span>
                </div>
                <h3>{story.title}</h3>
                <p>{story.desc}</p>
                <Link href={`/story/#${story.id}`} className={styles.actionBtn}>
                  <span>Open Full Gallery</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.footerAction}>
          <Link href="/story" className={styles.viewAllBtn}>
            <span>Explore All Expedition Stories</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}