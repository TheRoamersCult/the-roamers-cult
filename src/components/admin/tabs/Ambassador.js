"use client";
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import styles from './Ambassador.module.css';

export default function Ambassador() {
  const [stats, setStats] = useState({ total: 0, pending: 0 });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    const { count: total } = await supabase.from('ambassadors').select('*', { count: 'exact', head: true }).eq('status', 'active');
    const { count: pending } = await supabase.from('ambassadors').select('*', { count: 'exact', head: true }).eq('status', 'pending');
    setStats({ total: total || 0, pending: pending || 0 });
  };

  return (
    <div className={styles.container}>
      {/* Mini Stats Section */}
      <div className={styles.statsRow}>
        <div className={styles.statCard}>
          <h4>Active Ambassadors</h4>
          <p>{stats.total}</p>
        </div>
        <div className={styles.statCard}>
          <h4>Pending Requests</h4>
          <p>{stats.pending}</p>
        </div>
      </div>

      {/* Access Button */}
      <div className={styles.actionBox}>
        <h3>Manage Full Ambassador Program</h3>
        <p>Access the main ambassador management hub to view detailed reports and bulk actions.</p>
        <button 
          className={styles.mainAccessBtn} 
          onClick={() => window.location.href = '/admin/ambassador-hub'}
        >
          Go to Main Ambassador Page
        </button>
      </div>
    </div>
  );
}