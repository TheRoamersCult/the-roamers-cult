import Image from "next/image";
import Link from "next/link";
import { Sparkles, MapPin, Calendar, ArrowRight, Camera, Users, ArrowLeft, Heart, Compass, ShieldCheck } from "lucide-react";
import styles from "./story.module.css";

export default function OurStoryPage() {
  const storyExpeditions = [
    {
      id: "secret-waterfall",
      title: "Secret Waterfall",
      location: "Gokundi",
      duration: "1 Night / 1 Day",
      explorers: "300+ Explorers",
      date: "2025-2026",
      description: "Hidden beyond the beaten trails, our Secret Waterfall was where cliff jumps met wild adventure. By night, we camped under the stars, surrounded by forests, waterfalls, and stories worth remembering.",
      coverImage: "/secretwaterfall/secretwaterfall (1).jpg",
      gallery: [
        "/secretwaterfall/secretwaterfall (2).JPG",
        "/secretwaterfall/secretwaterfall (9).JPG",
        "/secretwaterfall/secretwaterfall (6).JPG",
        "/secretwaterfall/secretwaterfall (7).JPG"
      ]
    },
    {
      id: "rajmachi",
      title: "Rajmachi Fireflies Festival",
      location: "Lonavala, Maharashtra",
      duration: "1 Night / 1 Day",
      explorers: "200+ Explorers",
      date: "2026",
      description: "Witnessing thousands of fireflies glowing in the deep jungles of Rajmachi under the starlit night sky with campfire and authentic village food.",
      coverImage: "/rajmachi/rajmachi (1).jpg",
      gallery: [
        "/rajmachi/rajmachi (2).jpg",
        "/rajmachi/rajmachi (6).jpg",
        "/rajmachi/rajmachi (7).jpg",
        "/rajmachi/rajmachi (5).jpg"
      ]
    },
    {
      id: "kalu",
      title: "Kalu Waterfall",
      location: "Malshej Ghat",
      duration: "1 Night / 1 Day",
      explorers: "200+ Explorers",
      date: "2026",
      description: "Kalu Waterfall is a spectacular multi-tier waterfall near Malshej Ghat, formed by the Kalu River and surrounded by the Sahyadri mountains. The trek takes you through dense forest and rugged terrain.",
      coverImage: "/kalu/kalu (1).jpg",
      gallery: [
        "/kalu/kalu (2).jpg",
        "/kalu/kalu (3).jpg",
        "/kalu/kalu (4).jpg",
        "/kalu/kalu (1).jpg"
      ]
    },
    {
      id: "aadrai",
      title: "Aadrai Forest",
      location: "Malshej Ghat",
      duration: "1 Night / 1 Day",
      explorers: "300+ Explorers",
      date: "2026",
      description: "Aadrai Forest Malshej Ghat region ke paas Maharashtra ke Sahyadri ranges mein located ek dense forest trekking trail hai. Monsoon mein trail waterfalls aur lush greenery ke liye popular hai.",
      coverImage: "/aadrai/aadrai (1).jpg",
      gallery: [
        "/aadrai/aadrai (2).jpg",
        "/aadrai/aadrai (3).jpg",
        "/aadrai/aadrai (4).jpg",
        "/aadrai/aadrai (6).png"
      ]
    },
    {
      id: "dreamy-waterfall",
      title: "Hidden Dreamy waterfall and blue Lagoon",
      location: "Murud",
      duration: "1 Night / 1 Day",
      explorers: "300+ Explorers",
      date: "2026",
      description: "A hidden gem surrounded by lush greenery, the Dreamy Waterfall leads to a beautiful natural blue lagoon tucked away in the Sahyadris.",
      coverImage: "/DreamyW/DW (3).jpg",
      gallery: [
        "/DreamyW/DW (22).jpg",
        "/DreamyW/DW (40).jpg",
        "/DreamyW/DW (15).jpg",
        "/DreamyW/DW (7).jpg"
      ]
    },
    {
      id: "harishchandragad",
      title: "Harishchandragad",
      location: "Malshej Ghat",
      duration: "1 Night / 1 Day",
      explorers: "300+ Explorers",
      date: "2026",
      description: "Harishchandragad is one of the most iconic forts in the Sahyadris, known for its historic caves, Kedareshwar Temple, and the dramatic Konkan Kada cliff.",
      coverImage: "/harishchandragad/harishc (34).jpg",
      gallery: [
        "/harishchandragad/harishc (36).jpg",
        "/harishchandragad/harishc (19).JPG",
        "/harishchandragad/harishc (7).JPG",
        "/harishchandragad/harishc (37).jpg"
      ]
    }
  ];

  return (
    <div className={styles.pageWrapper}>
      <main className={styles.page}>
        <div className={styles.headerNav}>
          <Link href="/tours" className={styles.backLink}>
            <ArrowLeft size={14} /> Back to Tours
          </Link>
        </div>

        <section className={styles.hero}>
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              <Sparkles size={12} /> THE ROAMERS ARCHIVES
            </span>
            <h1>
              Our Story & <span>Memories</span>
            </h1>
            <p>Immersive visual logs and separate photo galleries from our successfully completed expeditions.</p>
          </div>
        </section>

        <div className={styles.storiesContainer}>
          {storyExpeditions.map((item) => (
            <article key={item.id} id={item.id} className={styles.storyCard}>
              <div className={styles.storyInfo}>
                <div className={styles.metaTags}>
                  <span className={styles.tagLocation}><MapPin size={11} /> {item.location}</span>
                  <span className={styles.tagDate}><Calendar size={11} /> {item.date} ({item.duration})</span>
                  <span className={styles.tagExplorers}><Users size={11} /> {item.explorers}</span>
                </div>
                <h2>{item.title}</h2>
                <p className={styles.description}>{item.description}</p>
                
                {/* Correct Dynamic Link to Gallery Page */}
                <Link href={`/story/${item.id}`} className={styles.fullGalleryBtn}>
                  <Camera size={14} /> Open Full Gallery <ArrowRight size={14} />
                </Link>
              </div>

              <div className={styles.galleryPreviewSection}>
                <div className={styles.galleryGrid}>
                  {item.gallery.slice(0, 4).map((imgUrl, index) => (
                    <div key={index} className={styles.imageWrapper}>
                      <Image src={imgUrl} alt={`${item.title} preview ${index + 1}`} fill sizes="(max-width: 768px) 50vw, 220px" />
                      {index === 3 && (
                        <Link href={`/story/${item.id}`} className={styles.moreOverlay}>
                          <span>+ More</span>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <h3>The Roamer's Cult</h3>
            <p>Crafting unforgettable outdoor adventures, soulful trails, and lifetime memories across the Sahyadris and beyond.</p>
          </div>
          <div className={styles.footerLinks}>
            <h4>Quick Links</h4>
            <Link href="/tours">All Tours</Link>
            <Link href="/story">Our Stories</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className={styles.footerTrust}>
            <h4>Safety & Trust</h4>
            <span><ShieldCheck size={14} /> Verified Expert Leaders</span>
            <span><Compass size={14} /> Custom Curated Gear</span>
            <span><Heart size={14} /> 1000+ Happy Explorers</span>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} The Roamers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}