import styles from "./StatsRow.module.css";

export default function StatsRow({ total, categories, latestName }) {
  const stats = [
    { label: "Total",      value: total,      small: false },
    { label: "Categories", value: categories, small: false },
    { label: "Latest",     value: latestName || "—", small: true },
  ];

  return (
    <div className={styles.row}>
      {stats.map(({ label, value, small }) => (
        <div key={label} className={styles.card}>
          <p className={styles.label}>{label}</p>
          <p className={`${styles.value} ${small ? styles.small : ""}`}>{value}</p>
        </div>
      ))}
    </div>
  );
}
