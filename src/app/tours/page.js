import Link from "next/link";
import Image from "next/image";
import { Compass, Calendar, MapPin, ArrowRight, Flame, Clock, History, Sparkles, ChevronRight, Phone, Mail, MessageSquare } from "lucide-react";
import styles from "./tours.module.css";

export default function ToursPage() {
  const upcomingTours = [
    {
      id: "hamptapass",
      title: "HAMPTA PASS TREK WITH CHANDRATAL",
      location: "Lonavala, Maharashtra",
      duration: "5 Days / 4 Nights",
      price: "₹10,000",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop",
      tag: "Filling Fast",
    }
  ];

  const liveBookings = [
    {
      id: "hidden-waterfall",
      title: "Dreamy waterfall and blue Lagoon",
      location: "Murud, Maharashtra",
      duration: "1 Day",
      price: "₹1,799",
      image: "/DreamyW/DW (21).jpg",
      tag: "Live Batch #1",
    }
  ];

  const pastTours = [
    {
      id: "kedarnath-yatra",
      title: "Kalu Waterfall",
      location: "Uttarakhand",
      duration: "1 Days / 1 Nights",
      price: "₹14,999",
      image: "/kalu/kalu (4).jpg",
      memories: "200+ Explorers",
    },
    {
      id: "kandhar-trek",
      title: "Aadrai Forest",
      location: "West Bengal",
      duration: "1 Days / 1 Nights",
      price: "₹1,499",
      image: "/aadrai/aadrai (22).jpg",
      memories: "300+ Explorers",
    },
    {
      id: "kandhar",
      title: "Secret Waterfall",
      location: "West Bengal",
      duration: "1 Days / 1 Nights",
      price: "₹1,399",
      image: "/secretwaterfall/secretwaterfall (1).JPG",
      memories: "300+ Explorers",
    },
    {
      id: "kandr",
      title: "Rajmachi Fire Flies",
      location: "West Bengal",
      duration: "1 Days / 1 Nights",
      price: "₹1,399",
      image: "/rajmachi/rajmachi (2).jpg",
      memories: "200+ Explorers",
    },
    {
      id: "HarishchandraGad",
      title: "Harishchandra Gad",
      location: "West Bengal",
      duration: "1 Days / 1 Nights",
      price: "₹1,499",
      image: "/harishchandragad/harishc (1).jpg",
      memories: "300+ Explorers",
    },
  ];

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>
            <Compass size={12} />
            THE ROAMERS CULT EXPEDITIONS
          </span>
          <h1>
            Find Your Next <span>Trail</span>
          </h1>
          <p>Compact weekend getaways, live batches, and past expedition records.</p>
        </div>
      </section>

      {/* UPCOMING TOURS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>
            <Flame size={15} className={styles.iconGold} /> Upcoming Adventures
          </h2>
          <span className={styles.swipeHint}>Swipe <ChevronRight size={13} /></span>
        </div>
        <div className={styles.horizontalScroll}>
          {upcomingTours.map((tour) => (
            <Link key={tour.id} href={`/tours/${tour.id}`} className={styles.compactCardLink}>
              <article className={styles.compactCard}>
                <div className={styles.cardImgWrap}>
                  <Image src={tour.image} alt={tour.title} fill sizes="260px" />
                  <span className={styles.badge}>{tour.tag}</span>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.metaInfo}>
                    <span><MapPin size={10} /> {tour.location}</span>
                    <span><Calendar size={10} /> {tour.duration}</span>
                  </div>
                  <h4>{tour.title}</h4>
                  <div className={styles.cardFooter}>
                    <div>
                      <span className={styles.priceLbl}>Price</span>
                      <strong className={styles.priceVal}>{tour.price}</strong>
                    </div>
                    <span className={styles.actionBtn}>
                      Book <ArrowRight size={11} />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* LIVE BOOKINGS SECTION */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>
            <Clock size={15} className={styles.iconGold} /> Live Bookings Open
          </h2>
          <span className={styles.swipeHint}>Swipe <ChevronRight size={13} /></span>
        </div>
        <div className={styles.horizontalScroll}>
          {liveBookings.map((tour) => (
            <Link key={tour.id} href={`/tours/${tour.id}`} className={styles.compactCardLink}>
              <article className={styles.compactCard}>
                <div className={styles.cardImgWrap}>
                  <Image src={tour.image} alt={tour.title} fill sizes="260px" />
                  <span className={styles.liveBadge}>{tour.tag}</span>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.metaInfo}>
                    <span><MapPin size={10} /> {tour.location}</span>
                    <span><Calendar size={10} /> {tour.duration}</span>
                  </div>
                  <h4>{tour.title}</h4>
                  <div className={styles.cardFooter}>
                    <div>
                      <span className={styles.priceLbl}>Price</span>
                      <strong className={styles.priceVal}>{tour.price}</strong>
                    </div>
                    <span className={styles.actionBtn}>
                      Join <ArrowRight size={11} />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* PAST TOURS SECTION */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>
            <History size={15} className={styles.iconMuted} /> Completed Expeditions
          </h2>
          <span className={styles.swipeHint}>Swipe <ChevronRight size={13} /></span>
        </div>
        <div className={styles.horizontalScroll}>
          {pastTours.map((tour) => (
            <Link key={tour.id} href={`/story`} className={styles.compactCardLink}>
              <article className={`${styles.compactCard} ${styles.pastCard}`}>
                <div className={styles.cardImgWrap}>
                  <Image src={tour.image} alt={tour.title} fill sizes="260px" />
                  <span className={styles.pastBadge}><Sparkles size={10} /> {tour.memories}</span>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.metaInfo}>
                    <span><MapPin size={10} /> {tour.location}</span>
                    <span><Calendar size={10} /> {tour.duration}</span>
                  </div>
                  <h4>{tour.title}</h4>
                  <div className={styles.cardFooter}>
                    <div>
                      <span className={styles.priceLbl}>Status</span>
                      <strong className={styles.completedLbl}>Completed</strong>
                    </div>
                    <span className={styles.pastBtn}>
                      Memories <ArrowRight size={11} />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* CONTACT US FOOTER SECTION */}
      <footer className={styles.footerSection}>
        <div className={styles.footerContainer}>
          <div className={styles.footerInfo}>
            <h3>The Roamer's Cult</h3>
            <p>Ready to escape the ordinary? Get in touch with our expert trek leads for custom group bookings or queries.</p>
          </div>
          <div className={styles.contactLinks}>
            <a href="tel:+919876543210" className={styles.contactItem}>
              <Phone size={13} className={styles.iconGold} />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:info@theroamerscult.com" className={styles.contactItem}>
              <Mail size={13} className={styles.iconGold} />
              <span>info@theroamerscult.com</span>
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
              <MessageSquare size={13} /> Chat on WhatsApp
            </a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} The Roamer's Cult. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}