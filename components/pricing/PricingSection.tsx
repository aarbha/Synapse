import { PricingMatrix } from './PricingMatrix';
import styles from './PricingSection.module.css';

export function PricingSection() {
  return (
    <div className={`shell section section-light ${styles.wrap}`}>
      <header className={styles.header}>
        <span className={`${styles.eyebrow} font-display`}>Pricing</span>
        <h2 className={styles.title}>
          Simple, transparent pricing.
          <br />
          <span className="accent-text">Change currency or billing anytime.</span>
        </h2>
        <p className={styles.lead}>
          Every price is computed live from our pricing matrix — no hardcoded numbers.
          Switch between currencies and billing cycles to see real regional rates and
          annual savings.
        </p>
      </header>

      <PricingMatrix />
    </div>
  );
}