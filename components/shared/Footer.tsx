import { PkgIcon } from './IconsRef';
import styles from './Footer.module.css';

const FOOTER_COLUMNS = [
  { title: 'Product',    links: ['Features', 'Pricing', 'Integrations', 'Changelog', 'Status'] },
  { title: 'Developers', links: ['Documentation', 'SDK Reference', 'API', 'Guides', 'Examples'] },
  { title: 'Company',    links: ['About', 'Blog', 'Careers', 'Security', 'Contact'] },
  { title: 'Legal',      links: ['Privacy', 'Terms', 'DPA', 'SOC 2', 'GDPR'] },
] as const;

const SOCIALS = [
  { href: 'https://github.com',  label: 'GitHub',  text: 'GH' },
  { href: 'https://x.com',       label: 'X',       text: 'X' },
  { href: 'https://discord.com', label: 'Discord', text: 'DC' },
] as const;

export function Footer() {
  return (
    <footer role="contentinfo" className={styles.wrap}>
      <div className={`shell ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brandBlock}>
            <a href="#tiers" className={`${styles.brand} interactive`} aria-label="Synapse home">
              <span className={styles.logoWrap} aria-hidden="true">
                <PkgIcon src="/svgs/cube-16-solid.svg" size={18} alt="" />
              </span>
              <span className={`${styles.brandName} font-display`}>Synapse</span>
            </a>
            <p className={styles.tagline}>
              Where workflows interact. Build, ship, and scale AI automation with confidence.
            </p>
            <ul className={styles.socials}>
              {SOCIALS.map(({ href, label, text }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.social} font-display interactive`}
                    aria-label={`Synapse on ${label}`}
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer" className={styles.columns}>
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title} className={styles.column}>
                <h3 className={`${styles.columnTitle} font-display`}>{col.title}</h3>
                <ul>
                  {col.links.map((label) => (
                    <li key={label}>
                      <a href="#" className={`${styles.colLink} interactive`}>
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>&copy; {new Date().getFullYear()} Synapse, Inc. All rights reserved.</p>
          <p className={styles.statusRow}>
            <span className={styles.statusDot} aria-hidden="true">
              <span className={styles.statusPulse} />
            </span>
            <span>Available for projects</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
