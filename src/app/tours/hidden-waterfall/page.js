"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Waterfall.module.css";

const batches = [
  {
    id: 2,
    month: "AUG",
    day: "14-15",
    weekday: "Fri-Sat",
    title: "Crowd Free Batch",
    date: "14th - 15th Aug 2026",
    price: 1799,
  },
  {
    id: 3,
    month: "AUG",
    day: "15-16",
    weekday: "Sat-Sun",
    title: "Independence Special",
    date: "15th - 16th Aug 2026",
    price: 1799,
    popular: true,
  },
  {
    id: 4,
    month: "AUG",
    day: "21-22",
    weekday: "Fri-Sat",
    title: "Crowd Free Batch",
    date: "21st - 22nd Aug 2026",
    price: 1799,
  },
  {
    id: 5,
    month: "AUG",
    day: "22-23",
    weekday: "Sat-Sun",
    title: "Weekend Getaway",
    date: "22nd - 23rd Aug 2026",
    price: 1799,
  },
];

const highlights = [
  {
    icon: "/DreamyW/DW (21).jpg",
    title: "Scenic Monsoon Trek",
    desc: "Lush green trails and misty weather."
  },
  {
    icon: "/DreamyW/DW (22).jpg",
    title: "Hidden Blue Lagoon",
    desc: "Crystal clear blue lagoon water dip."
  },
  {
    icon: "/aadrai/aadrai (14).png",
    title: "Breakfast & Lunch",
    desc: "Healthy breakfast and local lunch."
  },
  {
    icon: "/aadrai/aadrai (15).jpg",
    title: "Pune Pickup & Drop",
    desc: "Comfortable bus transportation."
  },
  {
    icon: "/DreamyW/DW (39).jpg",
    title: "Content Creator",
    desc: "Professional photos and video shoot."
  },
  {
    icon: "/DreamyW/DW (4).jpg",
    title: "Dreamy Waterfall",
    desc: "Stunning hidden waterfalls to explore."
  }
];

export default function HiddenWaterfall() {
  return (
    <main className={styles.container}>

      {/* 1. HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>
            Hidden Dreamy
            <span>Waterfall & Blue Lagoon</span>
          </h1>

          <p className={styles.heroInfo}>
            📍 Age Group: 18 to 35
            <span className={styles.dot}></span>
            🌧 Crowd-Free Monsoon Special
          </p>

          <p className={styles.heroText}>
            Escape into nature with The Roamer's Cult. Explore crystal clear blue lagoons,
            dreamy waterfalls, and make lifelong connections.
          </p>

          <div className={styles.heroStats}>
            <div className={styles.statCard}>
              <h3>18-35</h3>
              <span>Age Group</span>
            </div>
            <div className={styles.statCard}>
              <h3>4.9★</h3>
              <span>Ratings</span>
            </div>
            <div className={styles.statCard}>
              <h3>100%</h3>
              <span>Vibe</span>
            </div>
          </div>

          <div className={styles.heroButtons}>
            <Link href="https://wa.me/917620697285" className={styles.bookBtn}>
              Book Now
            </Link>
            <Link href="tel:+917620697285" className={styles.callBtn}>
              Call Now
            </Link>
          </div>
        </div>

      <div className={styles.heroImageBox}>
<Image
    src="/DreamyW/DW (16).jpg"
    alt="Hidden Dreamy Waterfall"
    fill
    priority
    sizes="(max-width: 768px) 94vw, 1200px"
    className={styles.heroImage}
  />

          <div className={styles.overlay}></div>
          <div className={styles.floatingBadge1}>Blue Lagoon</div>
          <div className={styles.floatingBadge2}>Waterfall</div>
          <div className={styles.floatingBadge3}>Ages 18-35</div>

          <div className={styles.heroCard}>
            <span className={styles.rating}>⭐ 4.9 Rating</span>
            <h3>Exclusive Expedition</h3>
            <p>Immerse yourself in pristine nature, swimming sessions, and unforgettable bus vibes.</p>
            <div className={styles.cardBottom}>
              <div className={styles.cardItem}>
                <strong>1 Night</strong>
                <span>Duration</span>
              </div>
              <div className={styles.cardItem}>
                <strong>Easy</strong>
                <span>Difficulty</span>
              </div>
              <div className={styles.cardItem}>
                <strong>₹1799</strong>
                <span>Starting</span>
              </div>
            </div>
          </div>
        </div>
      </section>








      {/* BATCH CALENDAR SECTION */}
      <section className={styles.batchSection}>
        <div className={styles.batchHeading}>
          <h2>Upcoming Batches</h2>
          <p>Select your preferred departure date.</p>
        </div>

        <div className={styles.batchGrid}>
          {batches.map((item) => (
            <div
              key={item.id}
              className={`${styles.batchCard} ${
                item.popular ? styles.popular : ""
              }`}
            >
              <div className={styles.batchDate}>
                <span>{item.month}</span>
                <strong>{item.day}</strong>
              </div>

              <div className={styles.batchInfo}>
                <h4>{item.title}</h4>
                <div className={styles.batchMeta}>
                  <span>{item.date}</span>
                </div>
              </div>

              <div className={styles.batchRight}>
                <div className={styles.batchPrice}>
                  ₹{item.price}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM SINGLE BOOK NOW BUTTON */}
        <div className={styles.bottomBookWrapper}>
          <Link
            href="https://wa.me/917620697285"
            className={styles.singleBookBtn}
          >
            BOOK NOW
          </Link>
        </div>
      </section>












{/* 3. TOUR HIGHLIGHTS */}
<section className={styles.thSection}>
  <div className={styles.thHeading}>
    <span className={styles.thSubtitle}>TOUR HIGHLIGHTS</span>
    <h2 className={styles.thTitle}>Everything Included</h2>
    <p className={styles.thDescription}>Curated experience with premium safety and media coverage.</p>
  </div>

  <div className={styles.thGrid}>
    {highlights.map((item, index) => (
      <article key={index} className={styles.thCard}>
        <div className={styles.thImageWrap}>
          <Image 
            src={item.icon} 
            alt={item.title} 
            fill 
            priority={index === 0}
            sizes="(max-width: 768px) 50vw, 25vw"
            className={styles.thImage} 
          />
          <div className={styles.thImageOverlay}></div>
        </div>
        <div className={styles.thBadge}><span>Included</span></div>
        <div className={styles.thContent}>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
          <div className={styles.thBottom}>
            <div className={styles.thLine}></div>
          </div>
        </div>
      </article>
    ))}
  </div>
</section>








      {/* 4. ADVENTURE TIMELINE / ITINERARY */}
      <section className={styles.journeySection}>
        <div className={styles.journeyGlow}></div>
        <div className={styles.journeyGlowTwo}></div>

        <div className={styles.journeyHeading}>
          <span className={styles.journeyTag}>ADVENTURE TIMELINE</span>
          <h2>Your Journey Begins Here</h2>
          <p>Detailed itinerary from overnight bus journey to the lagoon.</p>
        </div>

        <div className={styles.journeyGrid}>
          <article className={styles.journeyCard}>
            <div className={styles.cardTop}>
              <div className={styles.dayNumber}>DAY 01 (SAT)</div>
              <h3>Reporting & Journey</h3>
            </div>
            <div className={styles.stepList}>
              <div className={styles.stepItem}>
                <div className={styles.stepIcon}></div>
                <div className={styles.stepBody}>
                  <span>09:00 PM</span>
                  <h4>Reporting</h4>
                  <p>Meet trek leaders and board our comfortable vehicle from Pune.</p>
                </div>
              </div>
              <div className={styles.stepItem}>
                <div className={styles.stepIcon}></div>
                <div className={styles.stepBody}>
                  <span>10:00 PM</span>
                  <h4>Dance & Activities</h4>
                  <p>Bus journey filled with dance sessions and ice-breaking games.</p>
                </div>
              </div>
            </div>
          </article>

          <article className={styles.journeyCard}>
            <div className={styles.cardTop}>
              <div className={styles.dayNumber}>DAY 02 (SUN)</div>
              <h3>Lagoon & Waterfall</h3>
            </div>
            <div className={styles.stepList}>
              <div className={styles.stepItem}>
                <div className={styles.stepIcon}></div>
                <div className={styles.stepBody}>
                  <span>04:30 AM</span>
                  <h4>Freshen Up</h4>
                  <p>Reach base location and get ready for the trek.</p>
                </div>
              </div>
              <div className={styles.stepItem}>
                <div className={styles.stepIcon}></div>
                <div className={styles.stepBody}>
                  <span>06:00 AM</span>
                  <h4>Blue Lagoon Dip</h4>
                  <p>Take a refreshing swim in the crystal clear Blue Lagoon safely.</p>
                </div>
              </div>
              <div className={styles.stepItem}>
                <div className={styles.stepIcon}></div>
                <div className={styles.stepBody}>
                  <span>09:00 AM</span>
                  <h4>Dreamy Waterfall</h4>
                  <p>Explore the hidden waterfall and capture amazing memories.</p>
                </div>
              </div>
              <div className={styles.stepItem}>
                <div className={styles.stepIcon}></div>
                <div className={styles.stepBody}>
                  <span>02:00 PM</span>
                  <h4>Lunch & Return</h4>
                  <p>Enjoy local lunch and depart back to Pune.</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>










      {/* 5. PICKUP LOCATIONS */}
      <section className={styles.pickupSection}>
        <div className={styles.pickupHeading}>
          <span className={styles.pickupBadge}>Pickup Locations</span>
          <h2>Pune Boarding Points</h2>
          <p>Scheduled timings for your convenience.</p>
        </div>

        <div className={styles.pickupWrapper} style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div className={styles.pickupBox}>
            <div className={styles.pickupTop}>
              <div className={styles.pickupIcon}>📍</div>
              <div>
                <h3>Pune Pickups</h3>
                <small>Day 1 (Saturday Night)</small>
              </div>
            </div>
            <ul className={styles.pickupList}>
              <li><strong>Shivaji Nagar Metro Sta.</strong><span>09:15 PM</span></li>
              <li><strong>JM Road</strong><span>09:20 PM</span></li>
              <li><strong>Vanaz</strong><span>09:35 PM</span></li>
              <li><strong>Chandi Chowk</strong><span>09:40 PM</span></li>
              <li><strong>Wakad</strong><span>09:55 PM</span></li>
              <li><strong>Ravet</strong><span>10:05 PM</span></li>
            </ul>
          </div>
        </div>
      </section>











{/* 6. COST DETAILS & INCLUSIONS */}
<section className={styles.pricingSection}>
  <div className={styles.pricingHeading}>
    <span className={styles.pricingSubtitle}>Pricing & Details</span>
    <h2>Cost & Inclusions</h2>
  </div>

  <div className={styles.pricingGrid}>
    {/* Price Card */}
    <div className={styles.priceCard}>
      <div className={styles.priceBadge}>EX - PUNE</div>
      <div className={styles.priceAmount}>₹1799<span>/person</span></div>
      <div className={styles.priceDivider}></div>
      <ul className={styles.featureList}>
        <li>✓ Pune Pickup & Drop</li>
        <li>✓ Life Jacket & Safety Support</li>
        <li>✓ Breakfast & Lunch</li>
        <li>✓ Content Creator Shoot</li>
        <li>✓ Trek Leader Expertise</li>
      </ul>
      <Link href="https://wa.me/917620697285" className={styles.ppricingBookBtn}>
        Book This Batch
      </Link>
    </div>

    {/* Inclusions & Details Card */}
    <div className={styles.detailsCard}>
      <div className={styles.detailsCardHeader}>
        <h3>Quick Overview</h3>
        <span className={styles.secureBadge}>100% Safe</span>
      </div>
      <div className={styles.detailItem}>
        <strong>Includes:</strong>
        <p>Creator shoot, AC Bus, Life jacket, Meals</p>
      </div>
      <div className={styles.detailItem}>
        <strong>Excludes:</strong>
        <p>Personal water bottles, extra snacks</p>
      </div>
      <div className={styles.detailItem}>
        <strong>Safety & Policy:</strong>
        <p>First aid & forest permissions included. Standard cancellation policy applies.</p>
      </div>
    </div>
  </div>
</section>
   {/* 6. COST DETAILS & INCLUSIONS */}











{/* 7. GALLERY SECTION (Grid format for mobile & desktop) */}
<section className={styles.section}>
  <div className={styles.titleBox}>
    <span>Gallery</span>
    <h2>Adventure Moments</h2>
  </div>
  <div className={styles.galleryGrid}>
    <div className={styles.galleryItem}>
      <Image src="/DreamyW/DW (23).jpg" alt="Adventure Moment" fill sizes="(max-width: 480px) 50vw, (max-width: 768px) 50vw, 25vw" className={styles.galleryImg} />
    </div>
    <div className={styles.galleryItem}>
      <Image src="/DreamyW/DW (22).jpg" alt="Adventure Moment" fill sizes="(max-width: 480px) 50vw, (max-width: 768px) 50vw, 25vw" className={styles.galleryImg} />
    </div>
    <div className={styles.galleryItem}>
      <Image src="/DreamyW/DW (4).jpg" alt="Adventure Moment" fill sizes="(max-width: 480px) 50vw, (max-width: 768px) 50vw, 25vw" className={styles.galleryImg} />
    </div>
    <div className={styles.galleryItem}>
      <Image src="/DreamyW/DW (3).jpg" alt="Adventure Moment" fill sizes="(max-width: 480px) 50vw, (max-width: 768px) 50vw, 25vw" className={styles.galleryImg} />
    </div>
    <div className={styles.galleryItem}>
      <Image src="/DreamyW/DW (14).jpg" alt="Adventure Moment" fill sizes="(max-width: 480px) 50vw, (max-width: 768px) 50vw, 25vw" className={styles.galleryImg} />
    </div>
    <div className={styles.galleryItem}>
      <Image src="/DreamyW/DW (17).jpg" alt="Adventure Moment" fill sizes="(max-width: 480px) 50vw, (max-width: 768px) 50vw, 25vw" className={styles.galleryImg} />
    </div>
    <div className={styles.galleryItem}>
      <Image src="/DreamyW/DW (21).jpg" alt="Adventure Moment" fill sizes="(max-width: 480px) 50vw, (max-width: 768px) 50vw, 25vw" className={styles.galleryImg} />
    </div>
    <div className={styles.galleryItem}>
      <Image src="/DreamyW/DW (40).jpg" alt="Adventure Moment" fill sizes="(max-width: 480px) 50vw, (max-width: 768px) 50vw, 25vw" className={styles.galleryImg} />
    </div>
  </div>
</section>











      {/* 8. BOOKING CTA (Unchanged Style) */}
      <section className={styles.bookingSection}>
        <div className={styles.bookingCard}>
          <span>Limited Seats Available</span>
          <h2>Book Your Hidden Waterfall Expedition Today</h2>
          <p>Join fellow adventurers for an epic weekend getaway with The Roamer's Cult.</p>
          <div className={styles.bookingButtons}>
            <Link href="https://wa.me/917620697285" className={styles.bookBtn}>
              Book On WhatsApp
            </Link>
            <Link href="tel:+917620697285" className={styles.callBtn}>
              Call Now
            </Link>
          </div>
        </div>
      </section>








      {/* 9. FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div>
            <h3>The Roamer's Cult</h3>
            <p>Adventure • Community • Memories</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>+91 7620697285</p>
            <p>+91 8237670566</p>
            <p>Info@theroamerscult.com</p>
          </div>
          <div>
            <h4>Website</h4>
            <Link href="https://www.theroamerscult.com" target="_blank">www.theroamerscult.com</Link>
          </div>
        </div>
        <div className={styles.copy}>
          © 2026 The Roamer's Cult. All Rights Reserved.
        </div>
      </footer>

    </main>
  );
}