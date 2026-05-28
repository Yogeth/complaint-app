import styles from "./IssueBadge.module.css";

const BADGE_MAP = {
  Hardware: styles.hardware,
  Software: styles.software,
  Network:  styles.network,
  Billing:  styles.billing,
  Other:    styles.other,
};

export default function IssueBadge({ issue }) {
  const cls = BADGE_MAP[issue] || styles.other;
  return (
    <span className={`${styles.badge} ${cls}`}>
      {issue}
    </span>
  );
}
