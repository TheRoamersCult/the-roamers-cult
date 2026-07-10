"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import styles from './Dashboard.module.css';

export default function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      // 1. Session check
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        router.push('/login');
        return;
      }

      // 2. Profile fetch
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();

      if (data) {
        setUserData(data);
      } else {
        setUserData({ name: "Explorer", email: session.user.email });
      }
      setLoading(false);
    };

    fetchUserData();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  if (loading) return <div style={{padding: '50px', color: '#d4af37', textAlign: 'center'}}>Loading your journey...</div>;

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <h2>ROAMER'S HUB</h2>
        <button onClick={handleLogout} className={styles.logoutBtn}>
          Logout
        </button>
      </aside>
      
      <main className={styles.mainContent}>
        <h1>Welcome, {userData?.name || "Explorer"}</h1>
        <div className={styles.profileCard}>
          <p><strong>Email:</strong> {userData?.email}</p>
          <p><strong>Location:</strong> {userData?.location || "Not set"}</p>
        </div>
      </main>
    </div>
  );
}



 