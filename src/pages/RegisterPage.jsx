import { useState } from "react";
import Toast from "../components/Toast";
import { postComplaint } from "../services/complaintService";
import styles from "./RegisterPage.module.css";

const INITIAL_FORM = { name: "", email: "", issues: "", message: "" };
const ISSUE_OPTIONS = ["Hardware", "Software", "Network", "Billing", "Other"];

function validate({ name, email, issues, message }) {
  if (!name || !email || !issues || !message) return "Please fill in all fields before submitting.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Please enter a valid email address.";
  return null;
}

export default function RegisterPage() {
  const [form, setForm]   = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    const error = validate(form);
    if (error) { setToast({ message: error, type: "error" }); return; }

    setLoading(true);
    try {
      const result = await postComplaint(form);
      setToast({ message: result, type: "success" });
      setForm(INITIAL_FORM);
    } catch (err) {
      setToast({ message: err.message || "Could not reach the server. Is the backend running at localhost:8080?", type: "error" });
    }
    setLoading(false);
  };

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.heading}>Submit a Complaint</h1>
        <p className={styles.sub}>We'll look into every issue. Please fill out all fields clearly.</p>
      </div>

      <div className={styles.card}>
        <div className={styles.grid}>
          <div className={styles.field}>
            <label className={styles.label}>Full Name</label>
            <input
              name="name"
              type="text"
              className={styles.input}
              placeholder="e.g. Abc"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Email Address</label>
            <input
              name="email"
              type="email"
              className={styles.input}
              placeholder="e.g. abc@email.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Issue Category</label>
            <select
              name="issues"
              className={styles.input}
              value={form.issues}
              onChange={handleChange}
            >
              <option value="">Select a category</option>
              {ISSUE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div className={`${styles.field} ${styles.full}`}>
            <label className={styles.label}>Message</label>
            <textarea
              name="message"
              className={`${styles.input} ${styles.textarea}`}
              placeholder="Describe your issue in detail..."
              value={form.message}
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          className={styles.submitBtn}
          onClick={handleSubmit}
          disabled={loading}
        >
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
          {loading ? "Submitting…" : "Submit Complaint"}
        </button>

        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onDismiss={() => setToast(null)}
          />
        )}
      </div>
    </div>
  );
}
