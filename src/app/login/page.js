"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
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
    
    if (email === process.env.NEXT_PUBLIC_ADMIN_EMAIL && password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      localStorage.setItem('isAdmin', 'true');
      router.push('/admin/dashboard'); 
      return;
    }

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
        <div className={styles.brandSide}>
          <div className={styles.brandContent}>
            <img src="/roamers cult BG logo.png" alt="The Roamer's Cult" className={styles.logoImg} />
            <h2 className={styles.brandTitle}>WELCOME BACK</h2>
            <p className={styles.brandSubtitle}>Step back into the wild. Access your member portal and continue your expedition.</p>
          </div>
        </div>

        <div className={styles.formSide}>
          <div className={styles.formHeader}>
            <h1 className={styles.title}>MEMBER LOGIN</h1>
            <p className={styles.subtitle}>Enter your credentials to access your account</p>
          </div>

          <form className={styles.form} onSubmit={handleLogin}>
            <div className={styles.inputBox}>
              <input className={styles.inputField} name="email" type="email" placeholder=" " required />
              <label className={styles.inputLabel}>Email Address</label>
            </div>

            <div className={styles.inputBox}>
              <input className={styles.inputField} name="password" type={show ? "text" : "password"} placeholder=" " required />
              <label className={styles.inputLabel}>Password</label>
              <span className={styles.eyeBtn} onClick={() => setShow(!show)}>
                {show ? <EyeOff size={18}/> : <Eye size={18}/>}
              </span>
            </div>

            <button className={styles.submitBtn} type="submit" disabled={loading}>
              {loading ? <Loader2 className="animate-spin" size={18}/> : "SIGN IN"}
            </button>
          </form>

          <div className={styles.switchPrompt}>
            Don't have an account? <Link href="/signup" className={styles.switchLink}>Sign Up <ArrowRight size={14}/></Link>
          </div>
        </div>
      </div>
    </div>
  );
}