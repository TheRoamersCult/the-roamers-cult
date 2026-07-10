"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
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
      // User sign-up with metadata (metadata trigger mein use hoga)
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
          <CheckCircle size={64} color="#d4af37" />
          <h1>WELCOME TO THE CULT</h1>
        </div>
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.hero}>
            <h1>JOIN THE CULT</h1>
            <button className={styles.loginSwitch} onClick={() => router.push('/login')}>
              Already a member? Log In <ArrowRight size={16} />
            </button>
          </div>
          <form onSubmit={handleSignup} className={styles.form}>
            {errorMsg && <div className={styles.errorBanner}>{errorMsg}</div>}
            <input name="name" placeholder="FULL NAME" required />
            <input name="email" type="email" placeholder="EMAIL" required />
            <input name="phone" placeholder="CONTACT" required />
            <input name="location" placeholder="LOCATION" required />
            <div className={styles.passContainer}>
              <input name="password" type={show ? "text" : "password"} placeholder="PASSWORD" required />
              <button type="button" onClick={() => setShow(!show)} className={styles.eyeBtn}>
                {show ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <button type="submit" disabled={loading} className={styles.submitBtn}>
              {loading ? <Loader2 className="animate-spin" /> : "ACCESS GRANTED"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}