"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from '@/components/admin/Sidebar';
import styles from './AdminDashboard.module.css';

// Import Tabs
import Overview from '@/components/admin/tabs/Overview';
import ManageTours from '@/components/admin/tabs/ManageTours';
import Bookings from '@/components/admin/tabs/Bookings';
import Ambassador from '@/components/admin/tabs/Ambassador';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const savedTab = sessionStorage.getItem('adminActiveTab');
    if (savedTab) setActiveTab(savedTab);
    setIsMounted(true);
  }, []);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    sessionStorage.setItem('adminActiveTab', tabName);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    localStorage.removeItem('isAdmin');
    window.location.href = '/login';
  };

  // Tab mapping
  const renderContent = () => {
    switch (activeTab) {
      case 'Overview': return <Overview />;
      case 'ManageTours': return <ManageTours />;
      case 'Bookings': return <Bookings />;
      case 'Ambassador': return <Ambassador />;
      default: return <Overview />;
    }
  };

  if (!isMounted) return null;

  return (
    <div className={styles.dashboard}>
      <Sidebar 
        setActiveTab={handleTabChange} 
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
        handleLogout={handleLogout} 
      />
      
      <main className={styles.main}>
        <motion.div className={styles.header}>
          <h1>{activeTab}</h1>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.section 
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className={styles.content}
          >
            {renderContent()}
          </motion.section>
        </AnimatePresence>
      </main>
    </div>
  );
}