'use client';

import { useState } from 'react';
import { FEATURES } from '@/lib/constants';
import { PkgIcon } from '@/components/shared/IconsRef';
import { useScrollReveal } from './useScrollReveal';
import styles from './Explorations.module.css';

// Reuse the 6 features as the exploration gallery — Synapse data only.
const ITEMS = FEATURES.map((feature, i) => ({
  ...feature,
  serial: String(i + 1).padStart(2, '0'),
}));

export function Explorations() {
  const { containerRef, isActive } = useScrollReveal({ range: 22, stagger: 80 });
  const [rotatedIdx, setRotatedIdx] = useState<number | null>(null);

  // Split into 2 columns alternating items for the parallax effect
  const colA = ITEMS.filter((_, i) => i % 2 === 0);
  const colB = ITEMS.filter((_, i) => i % 2 === 1);

  return (
    <div className={`shell section section-dark ${styles.wrap}`}>
      <header className={styles.header}>
        <div className={styles.eyebrowRow}>
          <span className={styles.eyebrowRule} aria-hidden="true" />
          <span className={`${styles.eyebrow} font-display`}>Explorations</span>
        </div>
        <h2 className={styles.title}>
          Visual <span className={`${styles.titleItalic} font-display accent-text`}>playground</span>
        </h2>
        <p className={styles.lead}>
          A small set of explorations on how Synapse renders identity, motion,
          and hierarchy across the platform surface.
        </p>
      </header>

      <div ref={containerRef} className={styles.grid} role="list" aria-label="Exploration cards">
        <div className={styles.col}>
          {colA.map((item, i) => {
            const idx = i * 2;
            return (
              <article
                key={item.id}
                role="listitem"
                data-reveal=""
                data-parallax=""
                className={`${styles.card} ${isActive(idx) ? styles.cardRevealed : ''} ${
                  rotatedIdx === idx ? styles.cardRotated : ''
                } interactive`}
                style={{ transform: 'translateY(var(--parallax-y, 0))' }}
                onClick={() => setRotatedIdx(rotatedIdx === idx ? null : idx)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setRotatedIdx(rotatedIdx === idx ? null : idx);
                  }
                }}
              >
                <span className={`${styles.serial} font-display`} aria-hidden="true">
                  {item.serial}
                </span>
                <div className={styles.cardBody}>
                  <div className={styles.iconWrap}>
                    <PkgIcon src={item.icon} size={28} alt="" className={styles.icon} />
                  </div>
                  <h3 className={`${styles.cardTitle} font-display`}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.short}</p>
                </div>
                <span className={styles.hoverOverlay} aria-hidden="true" />
                <span className={styles.hoverLabel} aria-hidden="true">
                  <span className={styles.hoverLabelRing} />
                  <span className={styles.hoverLabelInner}>
                    <span>View</span>
                    <span className={styles.hoverLabelDash} aria-hidden="true">—</span>
                    <span className={styles.hoverLabelName}>{item.title}</span>
                  </span>
                </span>
              </article>
            );
          })}
        </div>
        <div className={`${styles.col} ${styles.colOffset}`}>
          {colB.map((item, i) => {
            const idx = i * 2 + 1;
            return (
              <article
                key={item.id}
                role="listitem"
                data-reveal=""
                data-parallax=""
                className={`${styles.card} ${isActive(idx) ? styles.cardRevealed : ''} ${
                  rotatedIdx === idx ? styles.cardRotated : ''
                } interactive`}
                style={{ transform: 'translateY(var(--parallax-y, 0))' }}
                onClick={() => setRotatedIdx(rotatedIdx === idx ? null : idx)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setRotatedIdx(rotatedIdx === idx ? null : idx);
                  }
                }}
              >
                <span className={`${styles.serial} font-display`} aria-hidden="true">
                  {item.serial}
                </span>
                <div className={styles.cardBody}>
                  <div className={styles.iconWrap}>
                    <PkgIcon src={item.icon} size={28} alt="" className={styles.icon} />
                  </div>
                  <h3 className={`${styles.cardTitle} font-display`}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.short}</p>
                </div>
                <span className={styles.hoverOverlay} aria-hidden="true" />
                <span className={styles.hoverLabel} aria-hidden="true">
                  <span className={styles.hoverLabelRing} />
                  <span className={styles.hoverLabelInner}>
                    <span>View</span>
                    <span className={styles.hoverLabelDash} aria-hidden="true">—</span>
                    <span className={styles.hoverLabelName}>{item.title}</span>
                  </span>
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
