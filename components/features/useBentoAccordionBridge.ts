'use client';

import { useCallback, useEffect, useState } from 'react';
import { MOBILE_BREAKPOINT } from '@/lib/constants';

export interface BentoAccordionBridge {
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
  isMobile: boolean;
}

export function useBentoAccordionBridge(featureCount: number): BentoAccordionBridge {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let raf = 0;
    const observer = new ResizeObserver((entries) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const width = entries[0].contentRect.width;
        const newIsMobile = width < MOBILE_BREAKPOINT;
        setIsMobile((prev) => {
          // Context lock: do NOT reset activeIndex — preserve transfer
          void featureCount;
          return newIsMobile === prev ? prev : newIsMobile;
        });
      });
    });
    observer.observe(document.documentElement);
    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [featureCount]);

  const setActive = useCallback((index: number | null) => setActiveIndex(index), []);

  return { activeIndex, setActiveIndex: setActive, isMobile };
}