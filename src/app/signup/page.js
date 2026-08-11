"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Eye, EyeOff, Loader2, CheckCircle, ArrowRight } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import styles from './Signup.module.css';

export default function Signup() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const { error: authError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            name: data.name,
            phone: data.phone,
            location: data.location
          }
        }
      });

      if (authError) throw authError;

      setSuccess(true);
      setTimeout(() => router.push('/dashboard'), 1500);
    } catch (err) {
      console.error("Signup Error:", err);
      setErrorMsg(err.message || "Registration failed.");
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {success ? (
        <div className={styles.statusBox}>
          <CheckCircle size={56} color="#d4af37" />
          <h1>WELCOME TO THE CULT</h1>
          <p>Redirecting to your dashboard...</p>
        </div>
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.brandSide}>
            <div className={styles.brandContent}>
              <img src="/roamers cult BG logo.png" alt="The Roamer's Cult" className={styles.logoImg} />
              <h1 className={styles.brandTitle}>JOIN THE CULT</h1>
              <p className={styles.brandSubtitle}>Become an official member of the ultimate expedition network.</p>
              <Link href="/login" className={styles.loginSwitch}>
                Already a member? Log In <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className={styles.formSide}>
            <div className={styles.formHeader}>
              <h2 className={styles.title}>CREATE ACCOUNT</h2>
              <p className={styles.subtitle}>Fill in your details to get started</p>
            </div>

            <form onSubmit={handleSignup} className={styles.form}>
              {errorMsg && <div className={styles.errorBanner}>{errorMsg}</div>}
              
              <div className={styles.inputBox}>
                <input className={styles.inputField} name="name" type="text" placeholder=" " required />
                <label className={styles.inputLabel}>Full Name</label>
              </div>

              <div className={styles.inputBox}>
                <input className={styles.inputField} name="email" type="email" placeholder=" " required />
                <label className={styles.inputLabel}>Email Address</label>
              </div>

              <div className={styles.inputBox}>
                <input className={styles.inputField} name="phone" type="tel" placeholder=" " required />
                <label className={styles.inputLabel}>Contact Number</label>
              </div>

              <div className={styles.inputBox}>
                <input className={styles.inputField} name="location" type="text" placeholder=" " required />
                <label className={styles.inputLabel}>Location</label>
              </div>

              <div className={styles.inputBox}>
                <input className={styles.inputField} name="password" type={show ? "text" : "password"} placeholder=" " required />
                <label className={styles.inputLabel}>Password</label>
                <button type="button" onClick={() => setShow(!show)} className={styles.eyeBtn}>
                  {show ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <button type="submit" disabled={loading} className={styles.submitBtn}>
                {loading ? <Loader2 className="animate-spin" size={18} /> : "ACCESS GRANTED"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}