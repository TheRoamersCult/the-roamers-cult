"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Loader2, ArrowRight } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import styles from './Login.module.css';

export default function Login() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);
    
    // 1. Admin Logic: .env se match karo
    if (email === process.env.NEXT_PUBLIC_ADMIN_EMAIL && password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      // Admin ke liye session storage ya local storage mein flag set karo
      localStorage.setItem('isAdmin', 'true');
      router.push('/admin/dashboard'); 
      return;
    }

    // 2. Normal User Login
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      router.push('/dashboard');
      router.refresh();
    } catch (err) {
      alert(err.message || "Invalid Credentials");
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.heroSection}>
          <h1 style={{fontSize: '2.5rem', color: '#d4af37'}}>MEMBER PORTAL</h1>
          <p>Login to continue your Roamers journey.</p>
          <button onClick={() => router.push('/signup')} className={styles.teamBtn}>
            Sign Up <ArrowRight size={16}/>
          </button>
        </div>

        <form className={styles.formSection} onSubmit={handleLogin}>
          <input className={styles.input} name="email" type="email" placeholder="EMAIL" required />
          <div className={styles.inputGroup}>
            <input className={styles.input} name="password" type={show ? "text" : "password"} placeholder="PASSWORD" required />
            <span className={styles.eyeIcon} onClick={() => setShow(!show)}>
              {show ? <EyeOff size={20}/> : <Eye size={20}/>}
            </span>
          </div>
          <button className={styles.btn} type="submit" disabled={loading}>
            {loading ? <Loader2 className="animate-spin"/> : "SIGN IN"}
          </button>
        </form>
      </div>
    </div>
  );
}