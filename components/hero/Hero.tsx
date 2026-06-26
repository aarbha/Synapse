import { HeroVideo } from './HeroVideo';
import styles from './Hero.module.css';

const HLS_SRC =
  'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';

export function Hero() {
  return (
    <div className={styles.hero}>
      <HeroVideo src={HLS_SRC} />

      <div className={`shell ${styles.content}`}>
        <span className={`${styles.pill} font-display blur-in`}>
          <span className={`${styles.pillDot} hero-dot`} aria-hidden="true" />
          Now in general availability
        </span>

        <h1 className={`${styles.headline} font-display name-reveal`}>
          <span className={styles.line1}>Automate the impossible.</span>
          <br />
          <span className={`${styles.line2} accent-text`}>Orchestrate the future.</span>
        </h1>

        <p className={`${styles.subhead} blur-in`} style={{ animationDelay: '500ms' }}>
          Synapse is the AI automation platform where workflows interact. Spin up
          autonomous agents, wire every tool in your stack, and ship reliable
          pipelines in hours — not quarters.
        </p>

        <div
          className={`${styles.ctas} blur-in`}
          style={{ animationDelay: '700ms' }}
        >
          <a href="#pricing" className={`${styles.cta} ${styles.ctaPrimary} font-display`}>
            <span className={styles.ctaRing} aria-hidden="true" />
            <span className={styles.ctaInner}>
              Start building free
              <span className={styles.arrow} aria-hidden="true">→</span>
            </span>
          </a>
          <a href="#features" className={`${styles.cta} ${styles.ctaGhost} font-display`}>
            <span className={styles.ctaRing} aria-hidden="true" />
            <span className={styles.ctaInner}>
              Explore the platform
            </span>
          </a>
        </div>
      </div>

      <a href="#features" className={`${styles.scroll} font-display`} aria-label="Scroll to features">
        <span className={styles.scrollLabel}>SCROLL</span>
        <span className={styles.scrollLine} aria-hidden="true">
          <span className={`${styles.scrollDot} animate-scroll-down`} />
        </span>
      </a>
    </div>
  );
}
