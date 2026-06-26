import styles from './Hero.module.css';

export function Hero() {
  return (
    <div className={styles.hero}>
      <div className="hero-bg" aria-hidden="true">
        <span className="hero-blob-c" />
      </div>
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-fade" aria-hidden="true" />

      <div className={`shell ${styles.content}`}>
        <span className={`enter-fade-up ${styles.pill} font-display`} style={{ animationDelay: '60ms' }}>
          <span className={styles.pillDot} aria-hidden="true" />
          Now in general availability
        </span>

        <h1 className={`${styles.headline} enter-fade-up`} style={{ animationDelay: '120ms' }}>
          Automate the impossible.
          <br />
          <span className="accent-text">Orchestrate the future.</span>
        </h1>

        <p className={`${styles.subhead} enter-fade-up`} style={{ animationDelay: '180ms' }}>
          Synapse is the AI automation platform where workflows interact. Spin up
          autonomous agents, wire every tool in your stack, and ship reliable
          pipelines in hours — not quarters.
        </p>

        <div className={`${styles.ctas} enter-fade-up`} style={{ animationDelay: '240ms' }}>
          <a href="#pricing" className="btn btn-primary">
            Start building free
            <span className={styles.arrow} aria-hidden="true">→</span>
          </a>
          <a href="#features" className="btn btn-ghost">
            Explore the platform
          </a>
        </div>

        <ul className={`${styles.stats} enter-fade-up`} style={{ animationDelay: '300ms' }}>
          <li className={styles.stat}>
            <span className={`${styles.statValue} font-display`}>99.99%</span>
            <span className={styles.statLabel}>Uptime SLA</span>
          </li>
          <li className={styles.stat} aria-hidden="true" />
          <li className={styles.stat}>
            <span className={`${styles.statValue} font-display`}>120+</span>
            <span className={styles.statLabel}>Native integrations</span>
          </li>
          <li className={styles.stat} aria-hidden="true" />
          <li className={styles.stat}>
            <span className={`${styles.statValue} font-display`}>50M+</span>
            <span className={styles.statLabel}>Executions / mo</span>
          </li>
        </ul>
      </div>
    </div>
  );
}