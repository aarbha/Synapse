'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { NAV_LINKS } from '@/lib/constants';
import { PkgIcon } from './IconsRef';
import styles from './NavBar.module.css';

const SECTION_IDS = ['hero', 'features', 'pricing', 'testimonials'];

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>('hero');
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active-link IntersectionObserver: marks whichever section the user is
  // currently reading. Uses rootMargin to bias the activation toward the
  // top half of the viewport.
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const elements = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const visible = new Map<Element, number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target, entry.intersectionRatio);
          } else {
            visible.delete(entry.target);
          }
        }
        if (visible.size > 0) {
          // Pick the topmost visible section (first in document order)
          const topmost = elements.find((el) => visible.has(el));
          if (topmost?.id) setActiveId(topmost.id);
        }
      },
      {
        // Activate when section enters top 40% of viewport
        rootMargin: '-40% 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );
    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
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
          <a href="#hero" className={styles.brand} onClick={closeMenu} aria-label="Synapse home">
            <span className={styles.logoRing} aria-hidden="true">
              <span className={styles.logoInner}>
                <PkgIcon src="/svgs/cube-16-solid.svg" size={14} alt="" />
              </span>
            </span>
            <span className={`${styles.brandName} font-display`}>Synapse</span>
          </a>

          <span className={styles.divider} aria-hidden="true" />

          <ul className={styles.links}>
            {NAV_LINKS.map((link) => {
              const id = link.href.replace(/^#/, '');
              const isActive = activeId === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`${styles.link} font-display interactive ${isActive ? styles.linkActive : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <span className={styles.divider} aria-hidden="true" />

          <a
            href="#pricing"
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
          {NAV_LINKS.map((link) => {
            const id = link.href.replace(/^#/, '');
            const isActive = activeId === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`${styles.mobileLink} font-display ${isActive ? styles.mobileLinkActive : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
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
