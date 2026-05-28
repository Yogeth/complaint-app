import { useState, useEffect } from "react";
import ComplaintCard from "../components/ComplaintCard";
import StatsRow from "../components/StatsRow";
import { fetchComplaints } from "../services/complaintService";
import styles from "./ViewPage.module.css";

export default function ViewPage() {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading]       = useState(false);
  const [error, setError]           = useState(false);

  useEffect(() => {
    loadComplaints();
  }, []);

  const loadComplaints = async () => {
    setLoading(true);
    setError(false);
    try {
      const data = await fetchComplaints();
      setComplaints([...data].reverse());
    } catch {
      setError(true);
    }
    setLoading(false);
  };

  const uniqueCategories = new Set(complaints.map((c) => c.issues)).size;

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <h1 className={styles.heading}>All Complaints</h1>
        <button className={styles.refreshBtn} onClick={loadComplaints}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path fill="currentColor" d="M17.65 6.35A7.96 7.96 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
          </svg>
          Refresh
        </button>
      </div>

      <StatsRow
        total={complaints.length}
        categories={uniqueCategories}
        latestName={complaints[0]?.name}
      />

      {loading && (
        <div className={styles.loading}>
          <span className={styles.spinner} />
          Loading complaints…
        </div>
      )}

      {error && !loading && (
        <div className={styles.empty}>
          <span className={styles.emptyIcon}>⚠️</span>
          <p>Could not load complaints. Make sure the backend is running at <strong>localhost:8080</strong>.</p>
        </div>
      )}

      {!loading && !error && complaints.length === 0 && (
        <div className={styles.empty}>
          <span className={styles.emptyIcon}>📋</span>
          <p>No complaints registered yet.</p>
        </div>
      )}

      {!loading && !error && complaints.length > 0 && (
        <div className={styles.list}>
          {complaints.map((c, i) => (
            <ComplaintCard key={c.email + i} complaint={c} />
          ))}
        </div>
      )}
    </div>
  );
}
