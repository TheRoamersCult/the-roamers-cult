"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Aadrai.module.css";

const batches = [
  { title: "Batch 1", date: "4 - 5 July" },
  { title: "Batch 2", date: "11 - 12 July" },
  { title: "Batch 3", date: "18 - 19 July" },
  { title: "Batch 4", date: "25 - 26 July" },
];

const highlights = [
  {
    icon: "/aadrai/aadrai (17).jpg",
    title: "Monsoon Trek",
    desc: "Experience lush green forests, waterfalls and misty trails."
  },
  {
    icon: "/aadrai/aadrai (14).png",
    title: "Breakfast & Lunch",
    desc: "Healthy breakfast and delicious local lunch included."
  },
  {
    icon: "/aadrai/aadrai (11).jpg",
    title: "Group Experience",
    desc: "Meet new people through games and adventure."
  },
  {
    icon: "/aadrai/aadrai (15).jpg",
    title: "Pune Pickup & Drop",
    desc: "Comfortable AC bus transportation."
  },
  {
    icon: "/aadrai/aadrai (18).jpg",
    title: "Content Creator",
    desc: "Photos & reels captured throughout the trip."
  },
  {
    icon: "/aadrai/aadrai (16).jpg",
    title: "Safety First",
    desc: "Experienced trek leaders with first aid support."
  }
];

export default function AadraiForest() {
  return (
    <main className={styles.container}>

      {/* HERO */}

      <section className={styles.hero}>

        <Image
          src="/images/aadrai/hero.webp"
          alt="Aadrai Jungle Trek"
          fill
          priority
          className={styles.heroImage}
        />

        <div className={styles.overlay}></div>

        <div className={styles.heroContent}>

          <span className={styles.badge}>
            THE ROAMER'S CULT
          </span>

          <h1>
            Aadrai Jungle Trek
          </h1>

          <p>
            Age Group : 18 - 35 Years
          </p>

          <p className={styles.heroText}>
            Experience one of Maharashtra's most beautiful
            monsoon jungle treks filled with waterfalls,
            dense forests, unforgettable vibes and amazing
            people.
          </p>

          <div className={styles.heroButtons}>

            <Link
              href="https://wa.me/917620697285"
              className={styles.bookBtn}
            >
              Book Now
            </Link>

            <Link
              href="tel:+917620697285"
              className={styles.callBtn}
            >
              Call Now
            </Link>

          </div>

        </div>

      </section>

      {/* UPCOMING BATCHES */}

      <section className={styles.section}>

        <div className={styles.titleBox}>
          <span>Upcoming Dates</span>
          <h2>Choose Your Batch</h2>
        </div>

        <div className={styles.batchGrid}>

          {batches.map((item, index) => (

            <div
              className={styles.batchCard}
              key={index}
            >

              <h3>{item.title}</h3>

              <p>{item.date}</p>

            </div>

          ))}

        </div>

      </section>

      {/* TOUR HIGHLIGHTS */}

      <section className={styles.section}>

        <div className={styles.titleBox}>

          <span>Tour Highlights</span>

          <h2>
            Everything Included In Your Adventure
          </h2>

        </div>

        <div className={styles.highlightGrid}>

          {highlights.map((item, index) => (

            <div
              key={index}
              className={styles.highlightCard}
            >

              <div className={styles.iconBox}>

                <Image
                  src={item.icon}
                  width={55}
                  height={55}
                  alt={item.title}
                />

              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>

          ))}

        </div>

      </section>

      {/* NEXT PART STARTS HERE */}

      
      {/* ITINERARY */}

      <section className={styles.section}>

        <div className={styles.titleBox}>
          <span>Adventure Timeline</span>
          <h2>Trip Itinerary</h2>
        </div>

        <div className={styles.timelineWrapper}>

          {/* DAY 1 */}

          <div className={styles.dayCard}>

            <div className={styles.dayHeader}>
              <span>DAY 1</span>
              <h3>Reporting & Journey</h3>
            </div>

            <div className={styles.timeline}>

              <div className={styles.timelineItem}>
                <span>11:00 PM</span>
                <div>
                  <h4>Reporting</h4>
                  <p>
                    Meet our trek leaders at your selected pickup point.
                    Introduction and boarding.
                  </p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <span>11:30 PM - 3:00 AM</span>
                <div>
                  <h4>Fun Journey</h4>
                  <p>
                    Bus games, dance, music, ice-breaking activities and
                    meeting fellow trekkers.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* DAY 2 */}

          <div className={styles.dayCard}>

            <div className={styles.dayHeader}>
              <span>DAY 2</span>
              <h3>The Aadrai Adventure</h3>
            </div>

            <div className={styles.timeline}>

              <div className={styles.timelineItem}>
                <span>4:00 AM</span>
                <div>
                  <h4>Freshen Up</h4>
                  <p>
                    Introduction, fun games and freshen up before breakfast.
                  </p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <span>5:00 AM</span>
                <div>
                  <h4>Breakfast & Briefing</h4>
                  <p>
                    Trek briefing with safety instructions followed by breakfast.
                  </p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <span>6:00 AM</span>
                <div>
                  <h4>Start Trek</h4>
                  <p>
                    Begin the breathtaking Aadrai Jungle Trek with waterfalls,
                    valleys and dense forest.
                  </p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <span>12:00 PM</span>
                <div>
                  <h4>Lunch</h4>
                  <p>
                    Delicious lunch at the base village.
                  </p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <span>After Lunch</span>
                <div>
                  <h4>Return Journey</h4>
                  <p>
                    Start our return journey towards Pune & Mumbai with
                    unforgettable memories.
                  </p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <span>9:00 PM</span>
                <div>
                  <h4>Trip Ends</h4>
                  <p>
                    Farewell to new friends and beautiful memories.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* PICKUP LOCATIONS */}

      <section className={styles.section}>

        <div className={styles.titleBox}>
          <span>Pickup Locations</span>
          <h2>Pune & Mumbai Pickup Points</h2>
        </div>

        <div className={styles.pickupGrid}>

          <div className={styles.pickupCard}>

            <h3>Pune Pickup</h3>

            <ul>

              <li>
                <strong>Swargate</strong>
                <span>11:00 PM</span>
              </li>

              <li>
                <strong>Shivajinagar</strong>
                <span>11:30 PM</span>
              </li>

              <li>
                <strong>Nashik Phata</strong>
                <span>11:45 PM</span>
              </li>

              <li>
                <strong>Chakan</strong>
                <span>12:15 AM</span>
              </li>

            </ul>

          </div>

          <div className={styles.pickupCard}>

            <h3>Mumbai Pickup</h3>

            <ul>

              <li><strong>Borivali</strong><span>09:45 PM</span></li>
              <li><strong>Goregaon</strong><span>10:10 PM</span></li>
              <li><strong>Andheri East</strong><span>10:30 PM</span></li>
              <li><strong>Bandra</strong><span>10:45 PM</span></li>
              <li><strong>Sion</strong><span>11:00 PM</span></li>
              <li><strong>Ghatkopar</strong><span>11:10 PM</span></li>
              <li><strong>Thane</strong><span>11:30 PM</span></li>
              <li><strong>Kalyan</strong><span>12:15 AM</span></li>

            </ul>

          </div>

        </div>

      </section>


      {/* COST DETAILS */}

      <section className={styles.section}>

        <div className={styles.titleBox}>
          <span>Pricing</span>
          <h2>Cost Details</h2>
        </div>

        <div className={styles.priceGrid}>

          <div className={styles.priceCard}>

            <small>EX PUNE</small>

            <h3>₹1499</h3>

            <p>Per Person</p>

            <a
              href="https://wa.me/917620697285"
              className={styles.bookBtn}
            >
              Book Now
            </a>

          </div>

          <div className={styles.priceCard}>

            <small>EX MUMBAI</small>

            <h3>₹1599</h3>

            <p>Per Person</p>

            <a
              href="https://wa.me/917620697285"
              className={styles.bookBtn}
            >
              Book Now
            </a>

          </div>

        </div>

      </section>

            {/* WHY CHOOSE US */}

      <section className={styles.section}>

        <div className={styles.titleBox}>
          <span>Why Choose Us</span>
          <h2>More Than A Trip, It's An Experience</h2>
        </div>

        <div className={styles.featureGrid}>

          <div className={styles.featureCard}>
            <img
              src="/aadrai/aadrai (10).jpg"
              alt="Friends"
              className={styles.featureIcon}
            />
            <h3>Strangers Become Friends</h3>
            <p>
              Around 30–40% of our travellers join solo.
              Ice-breaking games, fun challenges and group
              activities ensure everyone becomes one family.
            </p>
          </div>

          <div className={styles.featureCard}>
            <img
              src="/aadrai/aadrai (8).png"
              alt="Music"
              className={styles.featureIcon}
            />
            <h3>Live Music Under The Stars</h3>
            <p>
              Wherever promised, our talented musicians create
              magical evenings instead of just playing songs
              on a speaker.
            </p>
          </div>

          <div className={styles.featureCard}>
            <img
              src="/aadrai/aadrai (6).png"
              alt="Vibes"
              className={styles.featureIcon}
            />
            <h3>Bus Vibes</h3>
            <p>
              Dance sessions, fun games, music and laughter
              throughout the journey.
            </p>
          </div>

          <div className={styles.featureCard}>
            <img
              src="/aadrai/aadrai (1).jpg"
              alt="Content"
              className={styles.featureIcon}
            />
            <h3>Dedicated Content Creator</h3>
            <p>
              Stay present while our creators capture your
              best memories through photos and reels.
            </p>
          </div>

          <div className={styles.featureCard}>
            <img
              src="/aadrai/aadrai (9).jpg"
              alt="Female Safety"
              className={styles.featureIcon}
            />
            <h3>Female Safety</h3>
            <p>
              Female leaders accompany every batch so women
              travellers always feel comfortable and safe.
            </p>
          </div>

          <div className={styles.featureCard}>
            <img
              src="/aadrai/aadrai (7).png"
              alt="Safety"
              className={styles.featureIcon}
            />
            <h3>Safety Comes First</h3>
            <p>
              Experienced trek leaders, first aid, proper
              guidance and emergency handling throughout the
              trek.
            </p>
          </div>

        </div>

      </section>


      {/* VIDEO SECTION */}

      <section className={styles.section}>

        <div className={styles.titleBox}>
          <span>Experience The Vibe</span>
          <h2>Watch Before You Join</h2>
        </div>

        <div className={styles.videoGrid}>

          <a
            href="#"
            className={styles.videoCard}
          >
            <img
              src="/aadrai/aadrai (6).png"
              alt="Bus Vibes"
            />
            <div>
              <h3>Bus Vibes</h3>
              <p>Watch Now →</p>
            </div>
          </a>

          <a
            href="#"
            className={styles.videoCard}
          >
            <img
              src="/aadrai/aadrai (11).jpg"
              alt="Community"
            />
            <div>
              <h3>Community Vibes</h3>
              <p>Watch Now →</p>
            </div>
          </a>

          <a
            href="#"
            className={styles.videoCard}
          >
            <img
              src="/aadrai/aadrai (8).png"
              alt="Music"
            />
            <div>
              <h3>Live Music</h3>
              <p>Watch Now →</p>
            </div>
          </a>

          <a
            href="#"
            className={styles.videoCard}
          >
            <img
              src="/aadrai/aadrai (13).png"
              alt="Games"
            />
            <div>
              <h3>Games Highlight</h3>
              <p>Watch Now →</p>
            </div>
          </a>

        </div>

      </section>


      {/* GALLERY */}

      <section className={styles.section}>

        <div className={styles.titleBox}>
          <span>Gallery</span>
          <h2>Adventure Moments</h2>
        </div>

        <div className={styles.gallery}>

          <img src="/aadraiBGI.png" alt="" />
          <img src="/aadrai/aadrai (1).jpg" alt="" />
          <img src="/aadrai/aadrai (2).jpg" alt="" />
          <img src="/aadrai/aadrai (3).jpg" alt="" />
          <img src="/aadrai/aadrai (4).jpg" alt="" />
          <img src="/aadrai/aadrai (5).png" alt="" />

        </div>

      </section>


      {/* BOOKING CTA */}

      <section className={styles.bookingSection}>

        <div className={styles.bookingCard}>

          <span>Limited Seats Available</span>

          <h2>Book Your Aadrai Jungle Trek Today</h2>

          <p>
            Join hundreds of happy travellers and experience
            Maharashtra's most beautiful jungle trek with
            The Roamer's Cult.
          </p>

          <div className={styles.bookingButtons}>

            <a
              href="https://wa.me/917620697285"
              className={styles.bookBtn}
            >
              Book On WhatsApp
            </a>

            <a
              href="tel:+917620697285"
              className={styles.callBtn}
            >
              Call Now
            </a>

          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer className={styles.footer}>

        <div className={styles.footerGrid}>

          <div>

            <h3>The Roamer's Cult</h3>

            <p>
              Adventure • Community • Memories
            </p>

          </div>

          <div>

            <h4>Contact</h4>

            <p>+91 7620697285</p>
            <p>+91 8237670566</p>
            <p>info@theroamerscult.com</p>

          </div>

          <div>

            <h4>Website</h4>

            <a
              href="https://www.theroamerscult.com"
              target="_blank"
            >
              www.theroamerscult.com
            </a>

          </div>

        </div>

        <div className={styles.copy}>
          © 2026 The Roamer's Cult. All Rights Reserved.
        </div>

      </footer>



    </main>
  );
}
