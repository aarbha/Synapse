'use client';

import type { Currency } from '@/lib/pricingMatrix';
import { CURRENCY_ORDER } from '@/lib/pricingMatrix';
import styles from './CurrencySwitcher.module.css';

interface CurrencySwitcherProps {
  currency: Currency;
  onChange: (currency: Currency) => void;
  id?: string;
}

export function CurrencySwitcher({ currency, onChange, id }: CurrencySwitcherProps) {
  const activeIndex = CURRENCY_ORDER.indexOf(currency);

  return (
    <div
      role="radiogroup"
      aria-label="Display prices in"
      className={styles.root}
      id={id}
    >
      {CURRENCY_ORDER.map((cur) => (
        <button
          key={cur}
          type="button"
          role="radio"
          aria-checked={currency === cur}
          className={`${styles.option} ${currency === cur ? styles.active : ''} interactive font-display`}
          onClick={() => onChange(cur)}
        >
          {cur}
        </button>
      ))}
      <span
        className={styles.indicator}
        aria-hidden="true"
        style={{ transform: `translateX(${activeIndex * 100}%)` }}
      />
    </div>
  );
}