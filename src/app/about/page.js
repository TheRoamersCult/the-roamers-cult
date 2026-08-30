import Image from "next/image";
import {
  ShieldCheck,
  Mountain,
  Camera,
  Sparkles,
  Bus,
  Users,
  HeartHandshake,
  Compass,
  Instagram,
  ArrowRight,
  CheckCircle2,
  Star,
  Footprints,
  MessageCircle,
  Phone,
} from "lucide-react";

import styles from "./about.module.css";

export default function AboutUs() {
  const services = [
    {
      icon: Mountain,
      title: "Expert Trek Leaders",
      text: "Our leaders handle the trek from start to finish — route, pace, coordination and safety, so you can simply enjoy the journey.",
    },
    {
      icon: Sparkles,
      title: "Vibe Creators",
      text: "Roamers Cult hires dedicated vibe creators who bring energy, games, interactions and unforgettable moments to every trip.",
    },
    {
      icon: Camera,
      title: "Content Creators",
      text: "Enjoy the view instead of fighting with your camera. Our creators capture your best moments, candid shots and cinematic memories.",
    },
    {
      icon: ShieldCheck,
      title: "Safety First",
      text: "Safety is never optional. Our team stays alert throughout the experience, with extra attention towards the comfort and safety of women.",
    },
    {
      icon: Bus,
      title: "Comfortable Bus Travel",
      text: "The adventure starts from the bus. We focus on reliable, comfortable and well-managed travel so the journey itself feels memorable.",
    },
    {
      icon: Users,
      title: "A Community, Not A Crowd",
      text: "Come as a stranger, leave with stories, memories and people you might actually want to travel with again.",
    },
  ];

  const values = [
    "Experienced trek leaders",
    "Dedicated safety coordination",
    "Women-friendly travel environment",
    "Professional content creators",
    "Dedicated vibe creators",
    "Comfortable bus journeys",
  ];

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroImage} />

        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              <Compass size={13} />
              EXPLORE • CONNECT • ROAM
            </span>

            <h1>
              THE <span>ROAMERS</span> CULT
            </h1>

            <p className={styles.heroSubtitle}>
              Where ancient trails meet modern explorers.
            </p>

            <p className={styles.heroDescription}>
              More than trips. We create experiences filled with adventure,
              people, stories, energy and moments worth remembering.
            </p>

            <div className={styles.heroActions}>
              <a href="#experience" className={styles.primaryButton}>
                Discover Our Experience
                <ArrowRight size={14} />
              </a>

              <a href="#story" className={styles.secondaryButton}>
                Our Story
              </a>
            </div>
          </div>
        </div>

        <div className={styles.heroBottom}>
          <div>
            <strong>TRAVEL</strong>
            <span>with purpose</span>
          </div>

          <div>
            <strong>ROAM</strong>
            <span>with people</span>
          </div>

          <div>
            <strong>RETURN</strong>
            <span>with stories</span>
          </div>
        </div>
      </section>

      <section id="story" className={styles.storySection}>
        <div className={styles.sectionHeading}>
          <span>THE CULT</span>
          <h2>Not Just A Trip.</h2>
          <h3>An Experience.</h3>
        </div>

        <div className={styles.storyGrid}>
          <div className={styles.storyText}>
            <p>
              Born in the rugged landscapes of Maharashtra,{" "}
              <strong>The Roamers Cult</strong> was created for people who
              don't want ordinary weekends.
            </p>

            <p>
              From mist-covered forts and monsoon trails to forest adventures
              and nights under the stars, we bring everything that
              makes travelling special — <strong>adventure, people, music,
              laughter, nature and memories.</strong>
            </p>

            <p>
              We don't simply take you somewhere. Our team works behind the
              scenes to make sure you feel safe, comfortable, entertained and
              completely present in the moment.
            </p>
          </div>

          <div className={styles.storyHighlight}>
            <Footprints size={24} />

            <h3>Made For The Wild</h3>

            <p>
              Ancient trails. Raw landscapes. Real people. Zero boring
              weekends.
            </p>

            <div className={styles.highlightLine} />
          </div>
        </div>
      </section>

      <section id="experience" className={styles.experienceSection}>
        <div className={styles.sectionTitle}>
          <span>THE ROAMERS EXPERIENCE</span>
          <h2>We Handle The Details.</h2>
          <p>You live the moment.</p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article className={styles.serviceCard} key={service.title}>
                <div className={styles.iconBox}>
                  <Icon size={18} strokeWidth={1.8} />
                </div>

                <span className={styles.cardNumber}>
                  0{index + 1}
                </span>

                <h3>{service.title}</h3>

                <p>{service.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.creatorSection}>
        <div className={styles.creatorImage}>
          <Image
            src="/DreamyW/DW (22).jpg"
            alt="Roamers Cult capturing travel moments"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          <div className={styles.imageBadge}>
            <Camera size={13} />
            MOMENTS, CAPTURED.
          </div>
        </div>

        <div className={styles.creatorContent}>
          <span>DON'T MISS THE VIEW</span>

          <h2>
            You enjoy the moment.
            <br />
            <strong>We capture it.</strong>
          </h2>

          <p>
            We've all been there — trying to take the perfect picture while
            everyone else is already enjoying the view.
          </p>

          <p>
            That's why our <strong>content creators</strong> travel with you.
            From candid laughs to epic mountain frames, they capture the
            moments you would otherwise miss.
          </p>

          <div className={styles.creatorFeatures}>
            <div>
              <CheckCircle2 size={14} />
              Candid moments
            </div>

            <div>
              <CheckCircle2 size={14} />
              Group memories
            </div>

            <div>
              <CheckCircle2 size={14} />
              Adventure shots
            </div>

            <div>
              <CheckCircle2 size={14} />
              Cinematic content
            </div>
          </div>
        </div>
      </section>

      <section className={styles.safetySection}>
        <div className={styles.safetyIcon}>
          <ShieldCheck size={26} />
        </div>

        <div className={styles.safetyContent}>
          <span>OUR PROMISE</span>

          <h2>Adventure should feel safe.</h2>

          <p>
            We believe the best adventure is one where you can let your guard
            down without worrying about what comes next. Our leaders stay
            involved throughout the trek, manage the route and group, and
            remain attentive to everyone's comfort.
          </p>

          <p>
            <strong>
              For women travellers especially, comfort, respect and safety are
              non-negotiable parts of the Roamers experience.
            </strong>
          </p>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className={styles.valuesImage}>
          <Image
            src="/DreamyW/DW (21).jpg"
            alt="Mountain adventure"
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </div>

        <div className={styles.valuesContent}>
          <span>WHY ROAMERS CULT?</span>

          <h2>
            Built around
            <br />
            <strong>your experience.</strong>
          </h2>

          <div className={styles.checkList}>
            {values.map((value) => (
              <div key={value}>
                <CheckCircle2 size={15} />
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.founderSection}>
        <div className={styles.sectionTitle}>
          <span>THE PERSON BEHIND THE CULT</span>
          <h2>The Visionary.</h2>
        </div>

        <div className={styles.founderCard}>
          <div className={styles.founderImage}>
            <Image
              src="/aboutus/Akshay Bhaiya.jpeg"
              alt="Akshay Jire - Founder of The Roamers Cult"
              fill
              sizes="(max-width: 768px) 160px, 200px"
            />
          </div>

          <div className={styles.founderInfo}>
            <span>FOUNDER & LEAD EXPLORER</span>

            <h2>Akshay Jire</h2>

            <div className={styles.rating}>
              <Star size={13} fill="currentColor" />
              <Star size={13} fill="currentColor" />
              <Star size={13} fill="currentColor" />
              <Star size={13} fill="currentColor" />
              <Star size={13} fill="currentColor" />
            </div>

            <p>
              An avid trekker and explorer who turned a passion for the wild
              into a community built around authentic experiences.
            </p>

            <p>
              The vision is simple — create journeys where people discover
              places, meet people, laugh a little louder and return home with
              stories worth telling.
            </p>

            <div className={styles.founderContactActions}>
              <a
                href="https://www.instagram.com/akshayjire666"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialButton}
              >
                <Instagram size={14} />
                @akshayjire666
              </a>

              <a
                href="https://wa.me/917620697285"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappButton}
              >
                <MessageCircle size={14} />
                Chat on WhatsApp
              </a>

              <a
                href="tel:7620697285"
                className={styles.phoneButton}
              >
                <Phone size={14} />
                +91 76206 97285
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaIcon}>
          <HeartHandshake size={22} />
        </div>

        <span>YOUR NEXT STORY STARTS HERE</span>

        <h2>Ready to roam?</h2>

        <p>
          Leave the ordinary behind. Find your trail. Find your people.
        </p>

        <a href="/tours/hidden-waterfall" className={styles.primaryButton}>
          Explore Our Trips
          <ArrowRight size={14} />
        </a>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <div className={styles.logo}>
              THE <strong>ROAMERS</strong> CULT
            </div>

            <p>
              Adventure, people, stories and memories — one trail at a time.
            </p>

            <a
              href="https://www.instagram.com/the_roamers_cult"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerInstagram}
            >
              <Instagram size={14} />
              @the_roamers_cult
            </a>
          </div>

          <div className={styles.footerColumn}>
            <h4>EXPLORE</h4>
            <a href="/tours">Upcoming Trips</a>
            <a href="/treks">Treks</a>
            <a href="/camping">Camping</a>
            <a href="/about">About Us</a>
          </div>

          <div className={styles.footerColumn}>
            <h4>THE CULT</h4>
            <a href="#experience">Our Experience</a>
            <a href="#story">Our Story</a>
            <a href="/contact">Contact</a>
            <a href="/faq">FAQs</a>
          </div>

          <div className={styles.footerColumn}>
            <h4>OUR PROMISE</h4>
            <div className={styles.footerPromise}>
              <ShieldCheck size={13} />
              Safety First
            </div>

            <div className={styles.footerPromise}>
              <Camera size={13} />
              Memories Captured
            </div>

            <div className={styles.footerPromise}>
              <Sparkles size={13} />
              Vibes Guaranteed
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>
            © {new Date().getFullYear()} The Roamers Cult. All rights reserved.
          </span>

          <span>Made for people who choose the road less travelled.</span>
        </div>
      </footer>
    </main>
  );
}