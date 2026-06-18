import styles from "./NewLaunch.module.css";

export default function NewLaunch() {
  const launches = [
    { id: 1, title: "Spiti Valley Expedition", price: "₹18,500" },
    { id: 2, title: "Kerala Backwaters", price: "₹12,000" }
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>New Launches</h2>
      <div className={styles.grid}>
        {launches.map(tour => (
          <div key={tour.id} className={styles.card}>
            <div className={styles.imgDiv}></div>
            <div className={styles.cardBody}>
              <h3>{tour.title}</h3>
              <p>Starting from {tour.price}</p>
              <button className={styles.cardBtn}>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}