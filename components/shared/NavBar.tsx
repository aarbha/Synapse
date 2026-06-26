'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { NAV_LINKS } from '@/lib/constants';
import { LogoMark, MenuIcon, XMarkSvg } from './IconsRef';
import styles from './NavBar.module.css';

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
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
    <nav aria-label="Primary" className={`${styles.nav} ${scrolled ? styles.scrolled : ''} interactive`}>
      <div className={`shell ${styles.inner}`}>
        <a href="#hero" className={styles.brand} onClick={closeMenu}>
          <span className={styles.logoWrap}>
            <LogoMark size={24} />
          </span>
          <span className={`${styles.brandName} font-display`}>Synapse</span>
        </a>

        <ul className={styles.links}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={`${styles.link} font-display interactive`}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <a href="#pricing" className={`${styles.signIn} font-display interactive`}>
            Sign in
          </a>
          <a href="#pricing" className="btn btn-primary">
            Get started
          </a>
        </div>

        <button
          ref={buttonRef}
          type="button"
          className={styles.menuBtn}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={toggleMenu}
        >
          {open ? <XMarkSvg size={20} /> : <MenuIcon size={22} />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${open ? styles.mobileOpen : ''} layout-transition`}
        hidden={!open}
      >
        <ul className={styles.mobileLinks}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={`${styles.mobileLink} font-display`} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#pricing" className="btn btn-ghost" onClick={closeMenu}>
              Sign in
            </a>
          </li>
          <li>
            <a href="#pricing" className="btn btn-primary" onClick={closeMenu}>
              Get started
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}