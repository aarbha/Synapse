'use client';

import type { BentoAccordionBridge } from './useBentoAccordionBridge';
import type { Feature } from '@/lib/constants';
import { PkgIcon } from '@/components/shared/IconsRef';
import styles from './BentoGrid.module.css';

interface BentoGridProps {
  features: Feature[];
  bridge: BentoAccordionBridge;
}

export function BentoGrid({ features, bridge }: BentoGridProps) {
  return (
    <ul className={`bento-grid ${styles.grid}`} aria-label="Platform features">
      {features.map((feature, index) => {
        const isActive = bridge.activeIndex === index;
        return (
          <li
            key={feature.id}
            className={`${styles.card} ${styles[`span-${feature.span}`]} ${
              isActive ? styles.active : ''
            } interactive`}
            onMouseEnter={() => bridge.setActiveIndex(index)}
            onMouseLeave={() => bridge.setActiveIndex(null)}
            onFocus={() => bridge.setActiveIndex(index)}
            onBlur={() => bridge.setActiveIndex(null)}
            tabIndex={0}
          >
            <div className={styles.iconWrap}>
              <PkgIcon src={feature.icon} size={32} alt="" className={styles.icon} />
            </div>
            <div className={styles.body}>
              <h3 className={`${styles.title} font-display`}>{feature.title}</h3>
              <p className={styles.short}>{feature.short}</p>
            </div>
            <p className={`${styles.long} ${isActive ? styles.longOpen : ''}`}>
              {feature.long}
            </p>
          </li>
        );
      })}
    </ul>
  );
}