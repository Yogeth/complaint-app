import IssueBadge from "./IssueBadge";
import styles from "./ComplaintCard.module.css";

export default function ComplaintCard({ complaint }) {
  const { name, email, issues, message } = complaint;
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div>
          <p className={styles.name}>{name}</p>
          <p className={styles.email}>{email}</p>
        </div>
        <IssueBadge issue={issues} />
      </div>
      <p className={styles.message}>{message}</p>
    </div>
  );
}
