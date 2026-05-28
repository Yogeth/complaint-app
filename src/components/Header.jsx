import styles from "./Header.module.css";

export default function Header({ activeTab, onTabChange }) {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <div className={styles.logo}>
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
            <path
              fill="#fff"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
            />
          </svg>
        </div>
        <span className={styles.title}>ComplainTrack</span>
      </div>

      <nav className={styles.nav}>
        {[
          { key: "register", label: "Register Complaint" },
          { key: "view",     label: "View Complaints"   },
        ].map(({ key, label }) => (
          <button
            key={key}
            className={`${styles.navBtn} ${activeTab === key ? styles.active : ""}`}
            onClick={() => onTabChange(key)}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
}
