"use client";
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import styles from './AmbassadorHub.module.css';

export default function AmbassadorHub() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState({ open: false, id: null });
  const [detailModal, setDetailModal] = useState({ open: false, user: null });
  const [creds, setCreds] = useState({ ambId: '', pass: '' });

  const fetchData = async () => {
    const { data: list } = await supabase.from('ambassadors').select('*');
    if (list) setData(list);
  };

  useEffect(() => { fetchData(); }, []);

  const handleApprove = async () => {
    await supabase.from('ambassadors')
      .update({ status: 'active', ambassador_id: creds.ambId, password: creds.pass })
      .eq('id', modal.id);
    setModal({ open: false, id: null });
    fetchData();
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>Dashboard</h1>
        <a href="/ambassador-signup" className={styles.linkBtn}>+ Link</a>
      </header>

      <section className={styles.stats}>
        <div className={styles.card}><h3>{data.length}</h3><p>Total</p></div>
        <div className={styles.card}><h3>{data.filter(i => i.status === 'active').length}</h3><p>Active</p></div>
        <div className={styles.card}><h3>{data.filter(i => i.status !== 'active').length}</h3><p>Pending</p></div>
      </section>

      <div className={styles.tableWrapper}>
        <table className={styles.dataTable}>
          <thead>
            <tr><th>Name</th><th>Contact</th><th>Email</th><th>Status</th><th>Action</th></tr>
          </thead>
          <tbody>
            {data.map(u => (
              <tr key={u.id}>
                <td>{u.name}</td><td>{u.contact}</td><td>{u.email}</td>
                <td><span className={u.status === 'active' ? styles.active : styles.pending}>{u.status || 'pending'}</span></td>
                <td>
                  <button className={styles.viewBtn} onClick={() => setDetailModal({ open: true, user: u })}>View</button>
                  {u.status !== 'active' && <button className={styles.actionBtn} onClick={() => setModal({open: true, id: u.id})}>Approve</button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detail Modal - Updated with 'Type' field */}
      {detailModal.open && (
        <div className={styles.modalOverlay} onClick={() => setDetailModal({ open: false, user: null })}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <h3>Ambassador Details</h3>
            <div className={styles.detailGrid}>
              <p><span>Name:</span> {detailModal.user.name}</p>
              <p><span>Email:</span> {detailModal.user.email}</p>
              <p><span>Contact:</span> {detailModal.user.contact}</p>
              <p><span>Location:</span> {detailModal.user.location}</p>
              <p><span>Status:</span> {detailModal.user.type || 'N/A'}</p>
              <p><span>Profession:</span> {detailModal.user.profession}</p>
              <p><span>Amb. ID:</span> {detailModal.user.ambassador_id || '-'}</p>
              <p><span>Pass:</span> {detailModal.user.password || '-'}</p>
            </div>
            <button className={styles.saveBtn} onClick={() => setDetailModal({ open: false, user: null })} style={{width: '100%'}}>Close</button>
          </div>
        </div>
      )}

      {/* Approval Modal */}
      {modal.open && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Assign Credentials</h3>
            <input placeholder="Ambassador ID" onChange={(e) => setCreds({...creds, ambId: e.target.value})} />
            <input placeholder="Password" type="password" onChange={(e) => setCreds({...creds, pass: e.target.value})} />
            <div className={styles.modalActions}>
              <button onClick={() => setModal({open: false})}>Cancel</button>
              <button className={styles.saveBtn} onClick={handleApprove}>Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}