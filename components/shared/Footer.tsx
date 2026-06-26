import { TRUSTED_LOGOS } from '@/lib/constants';
import { PkgIcon } from './IconsRef';
import { HeroVideo } from '@/components/hero/HeroVideo';
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

const MARQUEE_PHRASE = 'BUILDING THE FUTURE • ';
const MARQUEE_REPEAT = 10;

const HLS_SRC =
  'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';

export function Footer() {
  return (
    <footer role="contentinfo" className={styles.wrap}>
      {/* Video-backed marquee + CTA band */}
      <div className={styles.videoBand}>
        <HeroVideo src={HLS_SRC} flip className={styles.video} />
        <div className={styles.videoBandInner}>
          {/* Banner marquee (portfolio pattern) */}
          <div className={styles.marqueeBar} aria-hidden="true">
            <div className="marquee">
              <div className={`marquee-track ${styles.marqueeTrack}`}>
                {Array.from({ length: MARQUEE_REPEAT }).map((_, i) => (
                  <span key={i} className={`${styles.marqueeItem} font-display`}>
                    {MARQUEE_PHRASE}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className={`shell ${styles.ctaShell}`}>
            <div className={styles.ctaBlock}>
              <span className={`${styles.eyebrow} font-display`}>Get in touch</span>
              <h2 className={`${styles.ctaHeading} font-display`}>
                Let&apos;s build the <span className={styles.ctaHeadingItalic}>next workflow</span>.
              </h2>
              <a
                href="mailto:hello@synapse.dev"
                className={`${styles.ctaButton} font-display`}
                aria-label="Email Synapse at hello@synapse.dev"
              >
                <span className={styles.ctaRing} aria-hidden="true" />
                <span className={styles.ctaInner}>
                  <span>hello@synapse.dev</span>
                  <span className={styles.ctaArrow} aria-hidden="true">↗</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={`shell ${styles.inner}`}>
        {/* Footer top: brand + columns */}
        <div className={styles.top}>
          <div className={styles.brandBlock}>
            <a href="#hero" className={`${styles.brand} interactive`} aria-label="Synapse home">
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

        {/* Trust marquee */}
        <div className={styles.trustBar}>
          <span className={`${styles.trustLabel} font-display`}>Trusted by teams at</span>
          <div className="marquee" role="img" aria-label="Trusted logos scrolling marquee">
            <div className="marquee-track">
              {[...TRUSTED_LOGOS, ...TRUSTED_LOGOS].map((name, i) => (
                <span key={`${name}-${i}`} className={`${styles.logo} font-display`}>
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar with status dot */}
        <div className={styles.bottom}>
          <p className={styles.copy}>&copy; {new Date().getFullYear()} Synapse, Inc. All rights reserved.</p>
          <p className={styles.statusRow}>
            <span className={styles.statusDot} aria-hidden="true">
              <span className={styles.statusPulse} />
            </span>
            <span>Available for projects</span>
          </p>
          <p className={styles.made}>Built with Next.js · Native CSS · Zero animation libraries</p>
        </div>
      </div>
    </footer>
  );
}
