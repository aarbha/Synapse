import styles from './Stats.module.css';

const STATS = [
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '120+',   label: 'Native integrations' },
  { value: '50M+',   label: 'Executions / month' },
] as const;

export function Stats() {
  return (
    <div className={`shell section section-dark ${styles.wrap}`}>
      <ul className={styles.grid} aria-label="Synapse platform statistics">
        {STATS.map((stat) => (
          <li key={stat.label} className={styles.item}>
            <span className={`${styles.value} font-display`}>{stat.value}</span>
            <span className={styles.label}>{stat.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
