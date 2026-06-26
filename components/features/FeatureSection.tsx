'use client';

import { BentoGrid } from './BentoGrid';
import { Accordion } from './Accordion';
import { useBentoAccordionBridge } from './useBentoAccordionBridge';
import { FEATURES } from '@/lib/constants';
import styles from './FeatureSection.module.css';

export function FeatureSection() {
  const bridge = useBentoAccordionBridge(FEATURES.length);

  return (
    <div className={`shell section section-secondary ${styles.wrap}`}>
      <header className={styles.header}>
        <div className={styles.eyebrowRow}>
          <span className={styles.eyebrowRule} aria-hidden="true" />
          <span className={`${styles.eyebrow} font-display`}>Selected Capabilities</span>
        </div>
        <h2 className={styles.title}>
          Everything you need to ship
          <br />
          <span className={`${styles.titleItalic} font-display accent-text`}>
            production-grade automation.
          </span>
        </h2>
        <p className={styles.lead}>
          From autonomous agents to enterprise compliance — Synapse is the connective
          tissue for every workflow in your stack.
        </p>
      </header>

      <BentoGrid features={FEATURES} bridge={bridge} />
      <Accordion features={FEATURES} bridge={bridge} />
    </div>
  );
}
