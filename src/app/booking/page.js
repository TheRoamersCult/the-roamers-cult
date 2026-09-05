"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Calendar, Users, MapPin, CheckCircle, MessageCircle, ShieldCheck, Clock, Sparkles, Utensils, HeartPulse, User } from "lucide-react";
import styles from "./booking.module.css";

const toursData = {
  "hidden-waterfall": {
    title: "Hidden Dreamy Waterfall & Blue Lagoon",
    location: "Murud, Maharashtra",
    pricePerHead: 1799,
    duration: "1 Day",
    image: "/DreamyW/DW (16).jpg",
    dates: ["12 Oct 2026", "19 Oct 2026", "26 Oct 2026"],
  },
  "rajmachi-camping": {
    title: "Rajmachi Starry Night Camping",
    location: "Lonavala",
    pricePerHead: 1499,
    duration: "1 Night / 1 Day",
    image: "/rajmachi/rajmachi (1).jpg",
    dates: ["11 Oct 2026", "18 Oct 2026", "25 Oct 2026"],
  },
  "kalu-waterfall": {
    title: "Kalu Waterfall Expedition",
    location: "Malshej Ghat",
    pricePerHead: 1499,
    duration: "1 Day",
    image: "/kalu/kalu (4).jpg",
    dates: ["15 Oct 2026", "22 Oct 2026"],
  },
};

function BookingContent() {
  const searchParams = useSearchParams();
  const tourKey = searchParams.get("tour") || "hidden-waterfall";
  const selectedTour = toursData[tourKey] || toursData["hidden-waterfall"];

  const [selectedDate, setSelectedDate] = useState(selectedTour.dates[0]);
  const [ticketCount, setTicketCount] = useState(1);
  const [travelerName, setTravelerName] = useState("");
  const [age, setAge] = useState("");
  const [mealPref, setMealPref] = useState("Veg");
  const [medicalCondition, setMedicalCondition] = useState("");
  const [pickupPoint, setPickupPoint] = useState("Shivajinagar Metro Station");
  const [error, setError] = useState("");

  const totalPrice = selectedTour.pricePerHead * ticketCount;

  const handleWhatsAppBooking = (e) => {
    e.preventDefault();
    if (!travelerName.trim()) {
      setError("Please enter your full name.");
      return;
    }
    if (!age.trim()) {
      setError("Please enter your age.");
      return;
    }
    setError("");

    const adminPhoneNumber = "7620697285";
    
    const message = `*New Live Booking Request!* 🏕️\n\n` +
      `-Tour: ${selectedTour.title}\n` +
      `-Batch Date: ${selectedDate}\n` +
      `-Explorers Count: ${ticketCount}\n` +
      `-Primary Guest: ${travelerName} (Age: ${age})\n` +
      `-Meal Preference: ${mealPref}\n` +
      `-Medical Condition: ${medicalCondition || "None"}\n` +
      `-Pickup Location: ${pickupPoint}\n` +
      `-Total Amount: ₹${totalPrice}\n\n` +
      `Please confirm slot availability.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${adminPhoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className={styles.bookingWrapper}>
      <div className={styles.tourSummaryCard}>
        <div className={styles.imgBox}>
          <img src={selectedTour.image} alt={selectedTour.title} />
          <span className={styles.badge}><Sparkles size={12} /> Live Active Batch</span>
        </div>
        <div className={styles.summaryContent}>
          <h2>{selectedTour.title}</h2>
          <p className={styles.location}><MapPin size={14} /> {selectedTour.location}</p>
          
          <div className={styles.highlightsRow}>
            <span><Clock size={14} /> {selectedTour.duration}</span>
            <span><ShieldCheck size={14} /> Verified Guide</span>
          </div>

          <div className={styles.priceTagBox}>
            <span>Price per explorer</span>
            <h3>₹{selectedTour.pricePerHead}</h3>
          </div>
        </div>
      </div>

      <div className={styles.formCard}>
        <div className={styles.formHeader}>
          <h1>Secure Live Slot</h1>
          <p>Fill out details to instantly connect via WhatsApp.</p>
        </div>

        <form onSubmit={handleWhatsAppBooking} className={styles.form}>
          <div className={styles.rowGrid}>
            <div className={styles.inputGroup}>
              <label><User size={13} /> Full Name *</label>
              <input 
                type="text" 
                placeholder="full name" 
                value={travelerName}
                onChange={(e) => setTravelerName(e.target.value)}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Age *</label>
              <input 
                type="number" 
                placeholder="24" 
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>
          </div>

          <div className={styles.rowGrid}>
            <div className={styles.inputGroup}>
              <label><Utensils size={13} /> Meal Preference</label>
              <select 
                value={mealPref} 
                onChange={(e) => setMealPref(e.target.value)}
                className={styles.selectInput}
              >
                <option value="Veg">Vegetarian</option>
                <option value="Non-Veg">Non-Vegetarian</option>
                <option value="Jain">Jain Meal</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label>Pickup Location</label>
              <select 
                value={pickupPoint} 
                onChange={(e) => setPickupPoint(e.target.value)}
                className={styles.selectInput}
              >
                <option value="Shivajinagar Metro Station">Shivajinagar Metro Station</option>
                <option value="Aundh police line bus stop">Aundh police line bus stop</option>
                <option value="Wakad Shani Mandir">Wakad Shani Mandir</option>
                <option value="Chandni Chowk">Chandni Chowk</option>
              </select>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label><HeartPulse size={13} /> Medical Conditions / Allergies</label>
            <input 
              type="text" 
              placeholder="Mention any issues (Asthma, Vertigo, etc. or None)" 
              value={medicalCondition}
              onChange={(e) => setMedicalCondition(e.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <label><Calendar size={13} /> Select Live Batch Date</label>
            <div className={styles.dateGrid}>
              {selectedTour.dates.map((date) => (
                <button
                  type="button"
                  key={date}
                  className={`${styles.dateBtn} ${selectedDate === date ? styles.activeDate : ""}`}
                  onClick={() => setSelectedDate(date)}
                >
                  {date}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label><Users size={13} /> Number of Explorers</label>
            <div className={styles.counterRow}>
              <button type="button" onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}>-</button>
              <span className={styles.countDisplay}>{ticketCount}</span>
              <button type="button" onClick={() => setTicketCount(ticketCount + 1)}>+</button>
            </div>
          </div>

          {error && <p className={styles.errorText}>{error}</p>}

          <div className={styles.checkoutFooter}>
            <div className={styles.totalBox}>
              <span>Total Amount</span>
              <h2>₹{totalPrice}</h2>
            </div>

            <button type="submit" className={styles.whatsappBtn}>
              <MessageCircle size={16} /> Book via WhatsApp
            </button>
          </div>

          <p className={styles.secureNote}>
            <CheckCircle size={11} /> Instant confirmation on WhatsApp. No upfront online payment needed.
          </p>
        </form>
      </div>
    </div>
  );
}

export default function BookingPage() {
  return (
    <main className={styles.mainContainer}>
      <Suspense fallback={<div style={{ color: "#fff", textAlign: "center", padding: "4rem" }}>Loading booking page...</div>}>
        <BookingContent />
      </Suspense>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} The Roamers Cult. All rights reserved.</p>
      </footer>
    </main>
  );
}