"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import styles from "./CalendarPage.module.css";

const upcomingTours = {
  "2026-06-20": { title: "Thar Desert Caravan", img: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=600", key: "thar", desc: "A premium camel caravan cruise traversing the deep gold crests of western Rajasthan under starlit clear skies." },
  "2026-06-28": { title: "Spiti Valley High Passes", img: "https://images.unsplash.com/photo-1506190506097-30864836b96f?q=80&w=600", key: "spiti", desc: "Navigation through high-altitude cold deserts, rough streams, ancient monasteries, and forbidden mountain ridges." },
  "2026-07-05": { title: "Meghalaya Cave Diving", img: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?q=80&w=600", key: "meghalaya", desc: "Subterranean wet cave mapping and vertical canyoning trails inside the deepest monsoon-fed limestone tunnels." }
};

const pastMemories = {
  "2026-06-03": { title: "Sahyadri Rainforest Trek", img: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=600", key: "sahyadri" },
  "2026-06-12": { title: "Zanskar Frozen River", img: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&w=600", key: "zanskar" },
  "2026-07-15": { title: "Western Ghats Monsoon", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600", key: "monsoon" }
};

const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const months = [
  "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", 
  "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
];

export default function CalendarPage() {
  const router = useRouter();
  const [currentDate, setCurrentDate] = useState(new Date(2026, 5, 1));
  const [activeBookImage, setActiveBookImage] = useState("https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1600");
  const [journalNote, setJournalNote] = useState("Tap or hover over active coordinates to map vectors and extract log files securely.");
  const [nextImmediateTour, setNextImmediateTour] = useState(null);
  const [direction, setDirection] = useState(0);
  const [mounted, setMounted] = useState(false);
  
  const [isPaused, setIsPaused] = useState(false);
  const [currentLoopIndex, setCurrentLoopIndex] = useState(0);

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const getActiveMonthTrips = () => {
    const combined = [];
    const targetPrefix = `${year}-${String(month + 1).padStart(2, "0")}-`;
    
    Object.keys(upcomingTours).forEach(date => {
      if (date.startsWith(targetPrefix)) {
        combined.push({ date, type: "upcoming", ...upcomingTours[date] });
      }
    });

    Object.keys(pastMemories).forEach(date => {
      if (date.startsWith(targetPrefix)) {
        combined.push({ date, type: "memory", ...pastMemories[date] });
      }
    });

    return combined.sort((a, b) => new Date(a.date) - new Date(b.date));
  };

  const activeTrips = getActiveMonthTrips();

  useEffect(() => {
    setMounted(true);
    const tourDates = Object.keys(upcomingTours).sort((a, b) => new Date(a) - new Date(b));
    if (tourDates.length > 0) {
      setNextImmediateTour({ date: tourDates[0], ...upcomingTours[tourDates[0]] });
    }
  }, []);

  useEffect(() => {
    setCurrentLoopIndex(0);
    if (activeTrips.length > 0) {
      const initial = activeTrips[0];
      setActiveBookImage(initial.img);
      setJournalNote(
        initial.type === "upcoming"
          ? `LOCKED COORD: ${initial.title}. High-density trajectory map synchronized.`
          : `ARCHIVE DEPLOYMENT: ${initial.title}. Structural imagery restored from logs.`
      );
    } else {
      setActiveBookImage("https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1600");
      setJournalNote("Tap or hover over active coordinates to map vectors and extract log files securely.");
    }
  }, [currentDate]);

  useEffect(() => {
    if (isPaused || activeTrips.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentLoopIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % activeTrips.length;
        const currentSelection = activeTrips[nextIndex];
        
        setActiveBookImage(currentSelection.img);
        setJournalNote(
          currentSelection.type === "upcoming"
            ? `SEQUENCE RUNNING: ${currentSelection.title}. High-density trajectory map synchronized.`
            : `SEQUENCE RUNNING: ${currentSelection.title}. Structural imagery restored from logs.`
        );
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, currentDate, activeTrips]);

  if (!mounted) return null;
  
  const firstDayIndex = new Date(year, month, 1).getDay();
  const totalDaysInMonth = new Date(year, month + 1, 0).getDate();

  const handlePrevMonth = () => {
    setDirection(-1);
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setDirection(1);
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const blankDays = Array.from({ length: firstDayIndex });
  const daysArray = Array.from({ length: totalDaysInMonth }, (_, i) => i + 1);

  const handleCellActivation = (upcomingTrip, memoryTrip) => {
    setIsPaused(true);
    if (upcomingTrip) {
      setActiveBookImage(upcomingTrip.img);
      setJournalNote(`LOCKED COORD: ${upcomingTrip.title}. High-density trajectory map synchronized.`);
    } else if (memoryTrip) {
      setActiveBookImage(memoryTrip.img);
      setJournalNote(`ARCHIVE DEPLOYMENT: ${memoryTrip.title}. Structural imagery restored from logs.`);
    }
  };

  return (
    <main className={styles.viewport}>
      <Navbar />

      <div className={styles.ambientBackground}>
        <div className={styles.topographicLines} />
      </div>

      <div className={styles.mapWorkspace}>
        <div className={styles.legendHeader}>
          <div className={styles.legendIndicator}>
            <span className={styles.upcomingWaveRing} />
            <span className={styles.legendLabel}>ACTIVE CORRIDOR</span>
          </div>
          <div className={styles.legendIndicator}>
            <span className={styles.memorySolidFrame} />
            <span className={styles.legendLabel}>ARCHIVED EXPEDITION</span>
          </div>
        </div>

        <motion.div 
          className={styles.mapScrollContainer}
          initial={{ opacity: 0, scale: 0.98, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.leftParchment}>
            <div className={styles.agedFrame}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeBookImage}
                  src={activeBookImage}
                  initial={{ opacity: 0, filter: "brightness(0.4) sepia(0.6)" }}
                  animate={{ opacity: 1, filter: "brightness(0.9) sepia(0.08)" }}
                  exit={{ opacity: 0, filter: "brightness(0.3) sepia(0.8)" }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className={styles.discoveryImage}
                />
              </AnimatePresence>
              <div className={styles.vignetteBurn} />
            </div>
            
            <div className={styles.dispatchBlock}>
              <span className={styles.inkStamp}>MANIFEST COORDINATES</span>
              <p className={styles.cursiveInkText}>{journalNote}</p>
            </div>
          </div>

          <div className={styles.spineCrease}>
            <div className={styles.stitchLine} />
          </div>

          <div className={styles.rightParchment}>
            <div className={styles.mapControllerHeader}>
              <motion.button 
                whileHover={{ x: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={handlePrevMonth} 
                className={styles.navCompassBtn}
              >
                ← PREV
              </motion.button>
              
              <div className={styles.titleWrapper}>
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.h1 
                    key={month}
                    custom={direction}
                    initial={{ opacity: 0, y: direction * 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -direction * 8 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className={styles.journalTitle}
                  >
                    {months[month]} <span className={styles.goldYearAccent}>{year}</span>
                  </motion.h1>
                </AnimatePresence>
              </div>

              <motion.button 
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleNextMonth} 
                className={styles.navCompassBtn}
              >
                NEXT →
              </motion.button>
            </div>

            <div className={styles.gridMatrixLayout}>
              {weekDays.map(d => <div key={d} className={styles.dayLabelInk}>{d}</div>)}
              {blankDays.map((_, i) => <div key={`blank-${i}`} className={styles.lostCoordinatesCell} />)}
              {daysArray.map(day => {
                const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                const upcomingTrip = upcomingTours[dateKey];
                const memoryTrip = pastMemories[dateKey];

                return (
                  <div
                    key={day}
                    className={`
                      ${styles.matrixGridSquare} 
                      ${upcomingTrip ? styles.upcomingRouteSquare : ""} 
                      ${memoryTrip ? styles.memoryRouteSquare : ""}
                    `}
                    onMouseEnter={() => handleCellActivation(upcomingTrip, memoryTrip)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => handleCellActivation(upcomingTrip, memoryTrip)}
                    onClick={() => {
                      handleCellActivation(upcomingTrip, memoryTrip);
                      if (upcomingTrip) router.push(`/tours/${upcomingTrip.key}`);
                      if (memoryTrip) router.push(`/memories/${memoryTrip.key}`);
                    }}
                  >
                    {upcomingTrip ? (
                      <div className={styles.mapThumbWrapper}>
                        <img src={upcomingTrip.img} alt="" className={styles.mapThumbAsset} />
                        <div className={styles.upcomingAuraPulseEffect} />
                        <span className={styles.activeDayIndicatorText}>{day}</span>
                        <div className={styles.topographicRadarGlowRing} />
                      </div>
                    ) : memoryTrip ? (
                      <div className={styles.mapThumbWrapper}>
                        <img src={memoryTrip.img} alt="" className={styles.mapThumbAsset} />
                        <div className={styles.burntOverlayFilter} />
                        <span className={styles.activeDayIndicatorText}>{day}</span>
                        <div className={styles.historicalCornerFrame} />
                      </div>
                    ) : (
                      <span className={styles.passiveDayText}>{day}</span>
                    )}
                  </div>
                );
              })}
            </div>

            <div className={styles.parchmentTelemetryFooter}>
              <span>DYNAMIC CHRONO MATRIX</span>
              <span>THE ROAMERS CULT</span>
            </div>
          </div>
        </motion.div>

        {nextImmediateTour && (
          <motion.div 
            className={styles.nextTourHighlightSection}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className={styles.highlightHeader}>
              <div className={styles.scoutLine} />
              <span className={styles.highlightSectionTitle}>IMMEDIATE UPCOMING ROUTE</span>
              <div className={styles.scoutLine} />
            </div>

            <div 
              className={styles.highlightBriefCard}
              onClick={() => router.push(`/tours/${nextImmediateTour.key}`)}
            >
              <div className={styles.highlightBadgeBlock}>
                <span className={styles.chronoTagLabel}>LAUNCH DATE</span>
                <span className={styles.chronoTagValue}>{nextImmediateTour.date}</span>
              </div>
              
              <div className={styles.highlightMetaBlock}>
                <h3 className={styles.highlightRouteTitle}>{nextImmediateTour.title}</h3>
                <p className={styles.highlightRouteDesc}>{nextImmediateTour.desc}</p>
              </div>

              <div className={styles.highlightActionCircle}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}