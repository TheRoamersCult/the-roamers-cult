"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Aadrai.module.css";

// const batches = [
//   { title: "Batch 1", date: "4 - 5 July" },
//   { title: "Batch 2", date: "11 - 12 July" },
//   { title: "Batch 3", date: "18 - 19 July" },
//   { title: "Batch 4", date: "25 - 26 July" },
// ];
const batches = [
  {
    id: 1,
    month: "JUL",
    day: "05",
    weekday: "Sunday",
    title: "Weekend Explorer",
    date: "05 July 2026",
    price: 1499,
    price2: 1599,
    seats: 9,
    pickup: "Pune & Mumbai",
    level: "Easy",
    duration: "1N / 1D",
    popular: true,
  },
  {
    id: 2,
    month: "JUL",
    day: "12",
    weekday: "Sunday",
    title: "Monsoon Special",
    date: "12 July 2026",
    price: 1499,
        price2: 1599,
    seats: 14,
    pickup: "Pune & Mumbai",
    level: "Easy",
    duration: "1N / 1D",
    popular: false,
  },
  {
    id: 3,
    month: "JUL",
    day: "19",
    weekday: "Sunday",
    title: "Waterfall Batch",
    date: "19 July 2026",
    price: 1499,
        price2: 1599,
    seats: 6,
    pickup: "Pune & Mumbai",
    level: "Moderate",
    duration: "1N / 1D",
    popular: true,
  },
  {
    id: 4,
    month: "JUL",
    day: "26",
    weekday: "Sunday",
    title: "Adventure Batch",
    date: "26 July 2026",
    price: 1499,
        price2: 1599,
    seats: 11,
    pickup: "Pune & Mumbai",
    level: "Easy",
    duration: "1N / 1D",
    popular: false,
  },
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

{/* ===========================
      PREMIUM HERO
=========================== */}

<section className={styles.hero}>

  {/* LEFT SIDE */}

  <div className={styles.heroContent}>

    {/* <span className={styles.badge}>
      🌿 THE ROAMER'S CULT
    </span> */}

    <h1>
      Aadrai Jungle
      <span>Trek 2026</span>
    </h1>

    <p className={styles.heroInfo}>
      📍 Malshej Ghat, Maharashtra
      <span className={styles.dot}></span>
      🌧 Monsoon Special
    </p>

    <p className={styles.heroText}>
      Experience Maharashtra's most beautiful monsoon
      trek filled with waterfalls, dense forests,
      river crossings and unforgettable memories with
      The Roamer's Cult.
    </p>

    <div className={styles.heroStats}>

      <div className={styles.statCard}>
        <h3>15+</h3>
        <span>Waterfalls</span>
      </div>

      <div className={styles.statCard}>
        <h3>4.9★</h3>
        <span>Ratings</span>
      </div>

      <div className={styles.statCard}>
        <h3>5000+</h3>
        <span>Trekkers</span>
      </div>

    </div>

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

  {/* RIGHT SIDE */}

  <div className={styles.heroImageBox}>

    <Image
      src="/aadraiBGI.png"
      alt="Aadrai Jungle Trek"
      fill
      priority
      className={styles.heroImage}
    />

    <div className={styles.overlay}></div>

    <div className={styles.floatingBadge1}>
      Monsoon
    </div>

    <div className={styles.floatingBadge2}>
      Waterfalls
    </div>

    <div className={styles.floatingBadge3}>
      Beginner Friendly
    </div>

        {/* GLASS INFO CARD */}

    <div className={styles.heroCard}>

      <span className={styles.rating}>
        ⭐ 4.9 Rating
      </span>

      <h3>
        Monsoon Adventure
      </h3>

      <p>
        Explore lush green forests,
        hidden waterfalls, river crossings
        and breathtaking viewpoints with
        Maharashtra's most loved trekking
        community.
      </p>

      <div className={styles.cardBottom}>

        <div className={styles.cardItem}>
          <strong>1 Day</strong>
          <span>Duration</span>
        </div>

        <div className={styles.cardItem}>
          <strong>Easy</strong>
          <span>Difficulty</span>
        </div>

        <div className={styles.cardItem}>
          <strong>₹1499 & ₹1599</strong>
          <span>Starting</span>
        </div>

      </div>

    </div>

    {/* BOTTOM FLOATING BAR */}

    <div className={styles.bottomBar}>

      <div className={styles.bottomItem}>
        Pune Pickup
      </div>

      <div className={styles.bottomItem}>
        Forest Trail
      </div>

      <div className={styles.bottomItem}>
        Reverse Waterfall
      </div>

    </div>

  </div>

</section>






      {/* UPCOMING BATCHES */}

{/* ===============================
      BATCH CALENDAR
================================ */}

<section className={styles.batchSection}>

  <div className={styles.batchBg1}></div>
  <div className={styles.batchBg2}></div>

  <div className={styles.batchHeading}>

    <span className={styles.batchSubtitle}>
      🌿 Upcoming Departures
    </span>

    <h2>
      Choose Your
      <span> Adventure Date</span>
    </h2>

    <p>
      Limited seats every weekend with experienced trek leaders.
      Comfortable pickup from Pune & Mumbai.
    </p>

  </div>

  <div className={styles.batchGrid}>

    {batches.map((item) => (

      <div
        key={item.id}
        className={`${styles.batchCard} ${
          item.popular ? styles.popular : ""
        }`}
      >

        {/* {item.popular && (
          <div className={styles.popularTag}>
            🔥 Popular
          </div>
        )} */}

        {/* DATE */}

        <div className={styles.dateBox}>

          <span className={styles.month}>
            {item.month}
          </span>

          <h3>
            {item.day}
          </h3>

          <small>
            {item.weekday}
          </small>

        </div>

        {/* CONTENT */}

        <div className={styles.batchContent}>

          <div className={styles.topRow}>

            <div>

              <h4>
                {item.title}
              </h4>

              <p>
                {item.date}
              </p>

            </div>

            <div className={styles.priceBox}>
              ₹{item.price} &
              ₹{item.price2}
            </div>

          </div>

          {/* INFO */}

          <div className={styles.infoRow}>

            <span>
              {item.pickup}
            </span>

            <span>
              {item.level}
            </span>

            <span>
              {item.duration}
            </span>

          </div>

          {/* FOOTER */}

          <div className={styles.bottomRow}>

            <div className={styles.seats}>

              <span className={styles.dot}></span>

              <strong>
                {item.seats}
              </strong>

              Seats Left

            </div>

            <button className={styles.bookBtn}>
              Book Now →
            </button>

          </div>

        </div>

      </div>

    ))}

  </div>

</section>





      {/* TOUR HIGHLIGHTS */}

{/* =======================================================
        PREMIUM TOUR HIGHLIGHTS
======================================================= */}

<section className={styles.thSection}>

    {/* Background Elements */}

    <div className={styles.thBgCircle1}></div>
    <div className={styles.thBgCircle2}></div>

    {/* Heading */}

    <div className={styles.thHeading}>

        <span className={styles.thSubtitle}>
            TOUR HIGHLIGHTS
        </span>

        <h2 className={styles.thTitle}>
            Everything Included
            <br />
            In Your Adventure
        </h2>

        <p className={styles.thDescription}>
            Every batch is carefully planned with premium facilities,
            experienced trek leaders and everything required for a
            safe, memorable and adventure-filled experience.
        </p>

    </div>

    {/* Cards */}

    <div className={styles.thGrid}>

        {highlights.map((item, index) => (

            <article
                key={index}
                className={styles.thCard}
            >

                {/* Image */}

                <div className={styles.thImageWrap}>

                    <Image
                        src={item.icon}
                        alt={item.title}
                        fill
                        className={styles.thImage}
                    />

                    <div className={styles.thImageOverlay}></div>

                </div>

                {/* Badge */}

                <div className={styles.thBadge}>

                    <span>

                        Included

                    </span>

                </div>

                {/* Bottom Content */}

                <div className={styles.thContent}>

                    <div className={styles.thContentTop}>

                        <h3>

                            {item.title}

                        </h3>

                    </div>

                    <p>

                        {item.desc}

                    </p>

                    <div className={styles.thBottom}>

                        <div className={styles.thLine}></div>

                        <span className={styles.thExplore}>

                            Explore →

                        </span>

                    </div>

                </div>

            </article>

        ))}

    </div>

</section>






      
      {/* ITINERARY */}

{/* ==========================================================
                LUXURY ITINERARY SECTION
========================================================== */}

<section className={styles.journeySection}>

    <div className={styles.journeyGlow}></div>
    <div className={styles.journeyGlowTwo}></div>

    {/* Heading */}

    <div className={styles.journeyHeading}>

        <span className={styles.journeyTag}>
            ADVENTURE TIMELINE
        </span>

        <h2>
            Your Journey Begins Here
        </h2>

        <p>
            Every hour of the Aadrai Jungle Trek has been carefully planned
            so you can simply enjoy the experience while we take care of
            everything else.
        </p>

    </div>

    {/* Cards */}

    <div className={styles.journeyGrid}>


        {/* =======================
                DAY 1
        ======================== */}

        <article className={styles.journeyCard}>

            <div className={styles.cardTop}>

                <div className={styles.dayNumber}>
                    DAY 01
                </div>

                <h3>
                    Reporting & Overnight Journey
                </h3>

            </div>

            <div className={styles.stepList}>


                <div className={styles.stepItem}>

                    <div className={styles.stepIcon}></div>

                    <div className={styles.stepBody}>

                        <span>
                            11:00 PM
                        </span>

                        <h4>
                            Reporting Point
                        </h4>

                        <p>
                            Meet our trek leaders, verify your booking
                            and board the vehicle.
                        </p>

                    </div>

                </div>


                <div className={styles.stepItem}>

                    <div className={styles.stepIcon}></div>

                    <div className={styles.stepBody}>

                        <span>
                            11:30 PM
                        </span>

                        <h4>
                            Fun Journey
                        </h4>

                        <p>
                            Music, games, introductions and lots of fun
                            with fellow travellers.
                        </p>

                    </div>

                </div>


            </div>

        </article>



        {/* =======================
                DAY 2
        ======================== */}

        <article className={styles.journeyCard}>

            <div className={styles.cardTop}>

                <div className={styles.dayNumber}>
                    DAY 02
                </div>

                <h3>
                    Explore Aadrai Jungle
                </h3>

            </div>

            <div className={styles.stepList}>


                <div className={styles.stepItem}>

                    <div className={styles.stepIcon}></div>

                    <div className={styles.stepBody}>

                        <span>04:00 AM</span>

                        <h4>Freshen Up</h4>

                        <p>
                            Reach base village and get ready
                            for the adventure.
                        </p>

                    </div>

                </div>


                <div className={styles.stepItem}>

                    <div className={styles.stepIcon}></div>

                    <div className={styles.stepBody}>

                        <span>05:00 AM</span>

                        <h4>Breakfast</h4>

                        <p>
                            Fresh breakfast followed by safety
                            briefing.
                        </p>

                    </div>

                </div>


                <div className={styles.stepItem}>

                    <div className={styles.stepIcon}></div>

                    <div className={styles.stepBody}>

                        <span>06:00 AM</span>

                        <h4>Start Trek</h4>

                        <p>
                            Walk through waterfalls, forests,
                            rivers and scenic viewpoints.
                        </p>

                    </div>

                </div>


                <div className={styles.stepItem}>

                    <div className={styles.stepIcon}></div>

                    <div className={styles.stepBody}>

                        <span>12:00 PM</span>

                        <h4>Lunch</h4>

                        <p>
                            Enjoy delicious local lunch at the
                            base village.
                        </p>

                    </div>

                </div>


                <div className={styles.stepItem}>

                    <div className={styles.stepIcon}></div>

                    <div className={styles.stepBody}>

                        <span>After Lunch</span>

                        <h4>Return Journey</h4>

                        <p>
                            Leave with unforgettable memories
                            and new friendships.
                        </p>

                    </div>

                </div>


                <div className={styles.stepItem}>

                    <div className={styles.stepIcon}></div>

                    <div className={styles.stepBody}>

                        <span>09:00 PM</span>

                        <h4>Trip Ends</h4>

                        <p>
                            Reach home safely with amazing
                            memories.
                        </p>

                    </div>

                </div>


            </div>

        </article>

    </div>

</section>









{/* PICKUP LOCATIONS */}

<section className={styles.pickupSection}>

    <div className={styles.pickupHeading}>

        <span className={styles.pickupBadge}>
            Pickup Locations
        </span>

        <h2>
            Pune & Mumbai Pickup Points
        </h2>

        <p>
            Comfortable boarding points with fixed reporting timings.
        </p>

    </div>

    <div className={styles.pickupWrapper}>

        <div className={styles.pickupBox}>

            <div className={styles.pickupTop}>

                <div className={styles.pickupIcon}>
                    📍
                </div>

                <div>

                    <h3>Pune Pickup</h3>
                    <small>Boarding Points</small>

                </div>

            </div>

            <ul className={styles.pickupList}>

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

        <div className={styles.pickupBox}>

            <div className={styles.pickupTop}>

                <div className={styles.pickupIcon}>
                    🚍
                </div>

                <div>

                    <h3>Mumbai Pickup</h3>
                    <small>Boarding Points</small>

                </div>

            </div>

            <ul className={styles.pickupList}>

                <li>
                    <strong>Borivali</strong>
                    <span>09:45 PM</span>
                </li>

                <li>
                    <strong>Goregaon</strong>
                    <span>10:10 PM</span>
                </li>

                <li>
                    <strong>Andheri East</strong>
                    <span>10:30 PM</span>
                </li>

                <li>
                    <strong>Bandra</strong>
                    <span>10:45 PM</span>
                </li>

                <li>
                    <strong>Sion</strong>
                    <span>11:00 PM</span>
                </li>

                <li>
                    <strong>Ghatkopar</strong>
                    <span>11:10 PM</span>
                </li>

                <li>
                    <strong>Thane</strong>
                    <span>11:30 PM</span>
                </li>

                <li>
                    <strong>Kalyan</strong>
                    <span>12:15 AM</span>
                </li>

            </ul>

        </div>

    </div>

</section>









     {/* COST DETAILS */}

<section className={styles.section}>

  <div className={styles.titleBox}>
    <span>Pricing</span>
    <h2>Choose Your Pickup</h2>
  </div>

  <div className={styles.priceGrid}>

    <div className={styles.priceCard}>

      <div className={styles.priceBadge}>EX PUNE</div>

      <h3>₹1499</h3>

      <p>Per Person</p>

      <div className={styles.priceLine}></div>

      <ul className={styles.priceFeatures}>
        <li>✔ Pickup Included</li>
        <li>✔ Breakfast</li>
        <li>✔ Trek Leader</li>
      </ul>

      <a
        href="https://wa.me/917620697285"
        className={styles.bookBtn}
      >
        Book Now
      </a>

    </div>

    <div className={styles.priceCard}>

      <div className={styles.priceBadge}>EX MUMBAI</div>

      <h3>₹1599</h3>

      <p>Per Person</p>

      <div className={styles.priceLine}></div>

      <ul className={styles.priceFeatures}>
        <li>✔ Pickup Included</li>
        <li>✔ Breakfast</li>
        <li>✔ Trek Leader</li>
      </ul>

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
