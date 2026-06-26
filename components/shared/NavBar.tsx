'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { NAV_LINKS } from '@/lib/constants';
import { PkgIcon } from './IconsRef';
import styles from './NavBar.module.css';

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const toggleMenu = useCallback(() => setOpen((v) => !v), []);
  const closeMenu = useCallback(() => setOpen(false), []);

  return (
    <nav
      aria-label="Primary"
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${open ? styles.menuOpen : ''}`}
    >
      <div className={styles.pillWrap}>
        <div className={`${styles.pill} ${scrolled ? styles.pillScrolled : ''}`}>
          <a href="#tiers" className={styles.brand} onClick={closeMenu} aria-label="Synapse home">
            <span className={styles.logoRing} aria-hidden="true">
              <span className={styles.logoInner}>
                <PkgIcon src="/svgs/cube-16-solid.svg" size={14} alt="" />
              </span>
            </span>
            <span className={`${styles.brandName} font-display`}>Synapse</span>
          </a>

          <span className={styles.divider} aria-hidden="true" />

          <ul className={styles.links}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`${styles.link} font-display interactive`}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <span className={styles.divider} aria-hidden="true" />

          <a
            href="#tiers"
            className={`${styles.cta} font-display interactive`}
            onClick={closeMenu}
          >
            <span className={styles.ctaRing} aria-hidden="true" />
            <span className={styles.ctaInner}>
              <span>Get started</span>
              <span className={styles.ctaArrow} aria-hidden="true">↗</span>
            </span>
          </a>

          <button
            ref={buttonRef}
            type="button"
            className={styles.menuBtn}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={toggleMenu}
          >
            {open ? (
              <PkgIcon src="/svgs/x-mark.svg" size={18} alt="" />
            ) : (
              <span className={styles.hamburger} aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${open ? styles.mobileOpen : ''} layout-transition`}
        hidden={!open}
      >
        <ul className={styles.mobileLinks}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`${styles.mobileLink} font-display`}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#tiers" className="btn btn-primary" onClick={closeMenu}>
              Get started
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
