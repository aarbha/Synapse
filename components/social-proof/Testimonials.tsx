import { TESTIMONIALS, TRUSTED_LOGOS } from '@/lib/constants';
import styles from './Testimonials.module.css';

function initials(name: string): string {
  return name.split(' ').map((p) => p[0]).join('').slice(0, 2).toUpperCase();
}

function Stars() {
  return (
    <ul className={styles.stars} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <li key={i} className={styles.star} aria-hidden="true">★</li>
      ))}
    </ul>
  );
}

export function Testimonials() {
  return (
    <div className={`shell section section-dark ${styles.wrap}`}>
      <header className={styles.header}>
        <div className={styles.eyebrowRow}>
          <span className={styles.eyebrowRule} aria-hidden="true" />
          <span className={`${styles.eyebrow} font-display`}>Social Proof</span>
        </div>
        <h2 className={styles.title}>
          Trusted by teams <span className={`${styles.titleItalic} font-display accent-text`}>shipping fast.</span>
        </h2>
      </header>

      <div className="marquee" role="img" aria-label="Trusted logos scrolling marquee">
        <div className="marquee-track">
          {[...TRUSTED_LOGOS, ...TRUSTED_LOGOS].map((name, i) => (
            <span key={`${name}-${i}`} className={`${styles.logo} font-display`}>
              {name}
            </span>
          ))}
        </div>
      </div>

      <ul className={styles.cards} aria-label="Customer testimonials">
        {TESTIMONIALS.map((t) => (
          <li key={t.id} className={styles.cardWrap}>
            <article className={`${styles.card} interactive`}>
              <span className={styles.quoteMark} aria-hidden="true">“</span>
              <figure className={styles.quote}>
                <Stars />
                <blockquote className={styles.quoteText}>{t.quote}</blockquote>
                <figcaption className={styles.author}>
                  <span
                    className={`${styles.avatar} ${styles[`avatar-${t.accent}`]}`}
                    aria-hidden="true"
                  >
                    {initials(t.name)}
                  </span>
                  <span className={styles.authorMeta}>
                    <span className={`${styles.authorName} font-display`}>{t.name}</span>
                    <span className={styles.authorRole}>
                      {t.role}, {t.company}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
