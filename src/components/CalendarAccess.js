"use client";

import { useRouter } from "next/navigation";
import styles from "./CalendarAccess.module.css";

export default function CalendarAccess() {
  const router = useRouter();

  const handleAccess = () => {
    router.push("/calendar");
  };

  return (
    <section className={styles.matrixViewport}>
      <div className={styles.jungleGridMesh} />

      <div className={styles.matrixContainer}>
        <div className={styles.controlPanel}>
          <div className={styles.artifactBadge}>
            <span className={styles.goldNode} />
            TRC INTERFACE // TEMPORAL GATEWAY
          </div>

          <h2 className={styles.panelTitle}>
            THE ROAMERS CULT
            <br />
            <span className={styles.goldText}>EXPEDITION CALENDAR</span>
          </h2>

          <p className={styles.panelParagraph}>
            A living grid of global coordinates. Decrypt live team positions, seasonal departures, and historical tracking logs before slots collapse into the wild.
          </p>

          <div className={styles.statsMicroRow}>
            <div className={styles.microStat} onClick={handleAccess}>
              <span>08</span>
              <label>LIVE LINKS</label>
            </div>
            <div className={styles.microStat} onClick={handleAccess}>
              <span>14K</span>
              <label>ARCHIVES</label>
            </div>
            <div className={styles.microStat} onClick={handleAccess}>
              <span>ONLINE</span>
              <label>TELEMETRY</label>
            </div>
          </div>
        </div>

        <div className={styles.terminalDisplay} onClick={handleAccess}>
          <div className={styles.terminalHeader}>
            <div className={styles.terminalDots}>
              <span />
              <span />
              <span />
            </div>
            <div className={styles.terminalLabel}>TRC_PORTAL_ENCRYPTION</div>
          </div>

          <div className={styles.mosaicGrid}>
            <div className={`${styles.mosaicCell} ${styles.cellWide}`}>
              <img
                src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=600&auto=format&fit=crop"
                alt="Expedition trail locator"
              />
              <div className={styles.cellShade}>
                <span>COORDINATES: 32.27° N</span>
              </div>
            </div>

            <div className={styles.mosaicCell}>
              <img
                src="https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=500&auto=format&fit=crop"
                alt="Jungle grid track"
              />
              <div className={styles.cellShade}>
                <span>JUNGLE // SECURED</span>
              </div>
            </div>

            <div className={styles.mosaicCell}>
              <img
                src="https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=500&auto=format&fit=crop"
                alt="Team tracking log"
              />
              <div className={styles.cellShade}>
                <span>CREW: ACTIVE</span>
              </div>
            </div>
          </div>

          <div className={styles.accessBar}>
            <div className={styles.accessGlowLayer} />
            <span className={styles.accessText}>DECRYPT TRC CALENDAR</span>
            <span className={styles.accessIcon}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}