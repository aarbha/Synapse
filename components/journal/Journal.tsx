import { FEATURES } from '@/lib/constants';
import { PkgIcon } from '@/components/shared/IconsRef';
import styles from './Journal.module.css';

export function Journal() {
  return (
    <div className={`shell section section-dark ${styles.wrap}`}>
      <header className={styles.header}>
        <div className={styles.eyebrowRow}>
          <span className={styles.eyebrowRule} aria-hidden="true" />
          <span className={`${styles.eyebrow} font-display`}>Field Notes</span>
        </div>
        <div className={styles.titleRow}>
          <div>
            <h2 className={styles.title}>
              Recent <span className={`${styles.titleItalic} font-display accent-text`}>thinking</span>
            </h2>
            <p className={styles.lead}>
              How we approach orchestration, evaluation, and reliability inside Synapse.
            </p>
          </div>
          <a
            href="#features"
            className={`${styles.viewAll} font-display`}
            aria-label="View all capabilities"
          >
            <span className={styles.viewAllRing} aria-hidden="true" />
            <span className={styles.viewAllInner}>
              <span>View all</span>
              <span className={styles.viewAllArrow} aria-hidden="true">→</span>
            </span>
          </a>
        </div>
      </header>

      <ul className={styles.list} aria-label="Capability deep-dives">
        {FEATURES.map((feature) => (
          <li key={feature.id} className={`${styles.entry} interactive`}>
            <span className={styles.entryIcon} aria-hidden="true">
              <PkgIcon src={feature.icon} size={20} alt="" className={styles.icon} />
            </span>
            <div className={styles.entryBody}>
              <h3 className={`${styles.entryTitle} font-display`}>{feature.title}</h3>
              <p className={styles.entryDesc}>{feature.short}</p>
            </div>
            <span className={styles.entryMeta} aria-hidden="true">
              <span className={styles.entryRead}>{Math.max(2, Math.min(9, Math.ceil(feature.long.length / 30)))} min read</span>
              <span className={styles.entryArrow}>→</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
