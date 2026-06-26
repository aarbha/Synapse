'use client';

import type { Cycle } from '@/lib/pricingMatrix';
import styles from './BillingToggle.module.css';

interface BillingToggleProps {
  cycle: Cycle;
  onChange: (cycle: Cycle) => void;
  id?: string;
}

export function BillingToggle({ cycle, onChange, id }: BillingToggleProps) {
  const isAnnual = cycle === 'annual';

  return (
    <div className={styles.wrap}>
      <span
        className={`${styles.label} ${!isAnnual ? styles.labelActive : ''} font-display interactive`}
        onClick={() => onChange('monthly')}
      >
        Monthly
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={isAnnual}
        aria-label="Toggle annual billing"
        className={`${styles.switch} ${isAnnual ? styles.switchOn : ''}`}
        onClick={() => onChange(isAnnual ? 'monthly' : 'annual')}
        id={id}
      >
        <span className={`${styles.knob} ${isAnnual ? styles.knobOn : ''}`} />
      </button>
      <span
        className={`${styles.label} ${isAnnual ? styles.labelActive : ''} font-display interactive`}
        onClick={() => onChange('annual')}
      >
        Annual
      </span>
      <span className={`${styles.badge} font-display`} aria-hidden="true">
        Save 20%
      </span>
    </div>
  );
}