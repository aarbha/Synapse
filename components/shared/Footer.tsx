import { TRUSTED_LOGOS } from '@/lib/constants';
import { GitHubIcon, XIcon, DiscordIcon, LogoMark } from './IconsRef';
import styles from './Footer.module.css';

const FOOTER_COLUMNS = [
  { title: 'Product',   links: ['Features', 'Pricing', 'Integrations', 'Changelog', 'Status'] },
  { title: 'Developers',links: ['Documentation', 'SDK Reference', 'API', 'Guides', 'Examples'] },
  { title: 'Company',   links: ['About', 'Blog', 'Careers', 'Security', 'Contact'] },
  { title: 'Legal',     links: ['Privacy', 'Terms', 'DPA', 'SOC 2', 'GDPR'] },
] as const;

const SOCIALS = [
  { href: 'https://github.com',   label: 'Synapse on GitHub',   Icon: GitHubIcon },
  { href: 'https://x.com',        label: 'Synapse on X',        Icon: XIcon },
  { href: 'https://discord.com',  label: 'Synapse Discord',     Icon: DiscordIcon },
] as const;

export function Footer() {
  return (
    <div className={`shell ${styles.wrap}`}>
      <div className={styles.top}>
        <div className={styles.brandBlock}>
          <a href="#hero" className={`${styles.brand} interactive`} aria-label="Synapse home">
            <span className={styles.logoWrap}>
              <LogoMark size={24} aria-label="Synapse logo" />
            </span>
            <span className={`${styles.brandName} font-display`}>Synapse</span>
          </a>
          <p className={styles.tagline}>
            Where workflows interact. Build, ship, and scale AI automation with confidence.
          </p>
          <ul className={styles.socials}>
            {SOCIALS.map(({ href, label, Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.social} interactive`}
                  aria-label={label}
                >
                  <Icon size={18} aria-label="" />
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

      <div className={styles.trustBar}>
        <span className={`${styles.trustLabel} font-display`}>Trusted by teams at</span>
        <ul className={styles.logoStrip}>
          {TRUSTED_LOGOS.map((name) => (
            <li key={name} className={`${styles.logoItem} font-display`}>
              {name}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>&copy; {new Date().getFullYear()} Synapse, Inc. All rights reserved.</p>
        <p className={styles.made}>Built with Next.js · Native CSS · Three.js</p>
      </div>
    </div>
  );
}