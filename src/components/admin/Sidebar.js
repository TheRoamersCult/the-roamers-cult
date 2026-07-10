"use client";
import styles from './Sidebar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Sidebar({ setActiveTab, isOpen, setIsOpen, handleLogout }) {
  return (
    <>
      <button className={styles.midHamburger} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.logo}>ADMIN PANEL</div>
        
        <nav className={styles.navLinks}>
          <div className={styles.navItem} onClick={() => {setActiveTab('Overview'); setIsOpen(false);}}>Overview</div>
          <div className={styles.navItem} onClick={() => {setActiveTab('ManageTours'); setIsOpen(false);}}>Manage Tours</div>
          <div className={styles.navItem} onClick={() => {setActiveTab('Bookings'); setIsOpen(false);}}>Bookings</div>
           <div className={styles.navItem} onClick={() => {setActiveTab('Ambassador'); setIsOpen(false);}}>Ambassador</div>
        </nav>

        {/* Bottom Logout */}
        <div className={styles.bottomLogout}>
          <button onClick={handleLogout} className={styles.logoutBtn}>Logout</button>
        </div>
      </aside>

      {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)}></div>}
    </>
  );
}