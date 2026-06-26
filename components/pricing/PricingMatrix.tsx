'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import {
  pricingMatrix,
  TIER_ORDER,
  type Currency,
  type Cycle,
  type Tier,
} from '@/lib/pricingMatrix';
import { CurrencySwitcher } from './CurrencySwitcher';
import { BillingToggle } from './BillingToggle';
import { CheckIcon } from '@/components/shared/IconsRef';
import styles from './PricingMatrix.module.css';

interface TierRefs {
  price: HTMLSpanElement | null;
  period: HTMLSpanElement | null;
  savings: HTMLSpanElement | null;
}

export function PricingMatrix() {
  // STATE IS ENCAPSULATED ENTIRELY IN THIS COMPONENT
  // PricingSection knows nothing of currency/cycle
  const [currency, setCurrency] = useState<Currency>('USD');
  const [cycle, setCycle] = useState<Cycle>('monthly');

  const refs = useRef<Record<Tier, TierRefs>>({
    starter: { price: null, period: null, savings: null },
    pro: { price: null, period: null, savings: null },
    enterprise: { price: null, period: null, savings: null },
  });

  // Update ONLY refs — no setState on parent, no context, no global re-render
  const updateAllPrices = useCallback(() => {
    TIER_ORDER.forEach((tier) => {
      const result = pricingMatrix.compute(tier, currency, cycle);
      const r = refs.current[tier];
      if (r.price) r.price.textContent = result.formatted;
      if (r.period) r.period.textContent = result.perPeriod;
      if (r.savings) {
        if (result.savings) {
          r.savings.textContent = result.savings;
          r.savings.parentElement?.classList.remove(styles.savingsHidden);
        } else {
          r.savings.parentElement?.classList.add(styles.savingsHidden);
        }
      }
    });
  }, [currency, cycle]);

  useEffect(() => {
    updateAllPrices();
  }, [updateAllPrices]);

  return (
    <div className={styles.matrix}>
      <div className={styles.controls}>
        <BillingToggle cycle={cycle} onChange={setCycle} id="billing-cycle" />
        <CurrencySwitcher currency={currency} onChange={setCurrency} id="currency" />
      </div>

      <ul className={styles.tiers}>
        {TIER_ORDER.map((tierId) => {
          const tier = pricingMatrix.tiers[tierId];
          const initial = pricingMatrix.compute(tierId, currency, cycle);
          return (
            <li
              key={tierId}
              className={`${styles.tier} ${tier.highlighted ? styles.featured : ''}`}
            >
              {tier.highlighted && (
                <span className={`${styles.badge} font-display`} aria-label="Most popular plan">
                  Most popular
                </span>
              )}
              <h3 className={`${styles.tierName} font-display`}>{tier.name}</h3>
              <p className={styles.tierTagline}>{tier.tagline}</p>

              <div className={styles.priceRow}>
                <span
                  ref={(el) => { refs.current[tierId].price = el; }}
                  className={`${styles.price} font-display`}
                >
                  {initial.formatted}
                </span>
                <span
                  ref={(el) => { refs.current[tierId].period = el; }}
                  className={styles.period}
                >
                  {initial.perPeriod}
                </span>
              </div>

              <p
                className={`${styles.savingsWrap} ${
                  initial.savings ? '' : styles.savingsHidden
                }`}
              >
                <span
                  ref={(el) => { refs.current[tierId].savings = el; }}
                  className={`${styles.savings} font-display`}
                  role="status"
                  aria-live="polite"
                >
                  {initial.savings ?? ''}
                </span>
              </p>

              <a
                href="#"
                className={`btn ${tier.highlighted ? 'btn-primary' : 'btn-light-ghost'} ${styles.tierCta}`}
              >
                {tier.cta}
              </a>

              <ul className={styles.features}>
                {tier.features.map((feature) => (
                  <li key={feature} className={styles.featureItem}>
                    <span className={styles.check}>
                      <CheckIcon size={18} aria-label="Included" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}