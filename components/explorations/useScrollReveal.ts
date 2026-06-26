'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollRevealOptions {
  // Pixels of translateY range for the parallax effect (per-element)
  range?: number;
  // Stagger delay in ms applied via --reveal-delay CSS variable
  stagger?: number;
}

export function useScrollReveal({
  range = 24,
  stagger = 60,
}: ScrollRevealOptions = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndices, setActiveIndices] = useState<Set<number>>(new Set());

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      // Fallback: just activate everything
      const all = root.querySelectorAll<HTMLElement>('[data-reveal]');
      setActiveIndices(new Set(Array.from(all).map((_, i) => i)));
      return;
    }

    const targets = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'));

    // Reveal on enter
    const revealIo = new IntersectionObserver(
      (entries) => {
        setActiveIndices((prev) => {
          const next = new Set(prev);
          for (const entry of entries) {
            if (entry.isIntersecting) {
              const idx = Number((entry.target as HTMLElement).dataset.revealIndex);
              if (!Number.isNaN(idx)) next.add(idx);
            }
          }
          return next;
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    targets.forEach((t, i) => {
      t.style.setProperty('--reveal-delay', `${i * stagger}ms`);
      t.dataset.revealIndex = String(i);
      revealIo.observe(t);
    });

    return () => revealIo.disconnect();
  }, [stagger]);

  // Parallax: gentle translateY based on each card's position relative to
  // the viewport center. We use a single passive scroll listener gated by
  // requestAnimationFrame to avoid jank.
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    if (typeof window === 'undefined') return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

    const targets = Array.from(root.querySelectorAll<HTMLElement>('[data-parallax]'));
    if (targets.length === 0) return;

    let rafId = 0;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const vh = window.innerHeight;
        const center = vh / 2;
        for (const el of targets) {
          const rect = el.getBoundingClientRect();
          const elCenter = rect.top + rect.height / 2;
          const distance = elCenter - center;
          // Normalize: when card is at viewport center, distance=0 → translate=0
          // when card is far above/below, distance=±vh → translate=±range
          const norm = Math.max(-1, Math.min(1, distance / vh));
          const y = -norm * range;
          el.style.setProperty('--parallax-y', `${y.toFixed(1)}px`);
        }
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [range]);

  return { containerRef, isActive: (i: number) => activeIndices.has(i) };
}
