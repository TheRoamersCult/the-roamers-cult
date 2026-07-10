"use client";
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import styles from './AmbassadorSignup.module.css';

export default function AmbassadorSignup() {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ 
    name: '', contact: '', email: '', location: '', profession: '', type: '' 
  });

  useEffect(() => {
    const status = localStorage.getItem('ambassadorSubmitted');
    if (status === 'true') setIsSubmitted(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from('ambassadors').insert([formData]);

    if (!error) {
      localStorage.setItem('ambassadorSubmitted', 'true');
      setIsSubmitted(true);
    } else {
      alert('Error: ' + error.message);
    }
    setLoading(false);
  };

  const handleReset = () => {
    localStorage.removeItem('ambassadorSubmitted');
    setIsSubmitted(false);
    setFormData({ name: '', contact: '', email: '', location: '', profession: '', type: '' });
  };

  if (isSubmitted) {
    return (
      <div className={styles.container}>
        <div className={styles.formWrapper} style={{ textAlign: 'center' }}>
          <h1 className={styles.title}>Thank You!</h1>
          <p style={{ color: '#ccc', marginBottom: '20px' }}>Your application has been received.</p>
          <button className={styles.submitBtn} onClick={handleReset}>Submit Another Response</button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>Ambassador Application</h1>
        <form onSubmit={handleSubmit}>
          <input className={styles.inputField} type="text" placeholder="Full Name" onChange={e => setFormData({...formData, name: e.target.value})} required />
          <input className={styles.inputField} type="text" placeholder="Contact Number" onChange={e => setFormData({...formData, contact: e.target.value})} required />
          <input className={styles.inputField} type="email" placeholder="Gmail Address" onChange={e => setFormData({...formData, email: e.target.value})} required />
          <input className={styles.inputField} type="text" placeholder="Location" onChange={e => setFormData({...formData, location: e.target.value})} required />
          <select className={styles.inputField} onChange={e => setFormData({...formData, type: e.target.value})} required>
            <option value="">Select Status</option>
            <option value="College Student">College Student</option>
            <option value="Employee">Employee</option>
            <option value="Non-Working">Non-Working</option>
          </select>
          <input className={styles.inputField} type="text" placeholder="Profession" onChange={e => setFormData({...formData, profession: e.target.value})} required />
          <button className={styles.submitBtn} type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit Application'}</button>
        </form>
      </div>
    </div>
  );
}