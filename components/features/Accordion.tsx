'use client';

import { useCallback, useEffect, useRef } from 'react';
import type { BentoAccordionBridge } from './useBentoAccordionBridge';
import type { Feature } from '@/lib/constants';
import { PkgIcon } from '@/components/shared/IconsRef';
import styles from './Accordion.module.css';

interface AccordionProps {
  features: Feature[];
  bridge: BentoAccordionBridge;
}

const DURATION = 350;

interface PanelRefs {
  panel: HTMLDivElement | null;
  content: HTMLDivElement | null;
}

function expandPanel(panel: HTMLDivElement, content: HTMLDivElement) {
  const targetHeight = content.scrollHeight;
  panel.style.removeProperty('height');
  const anim = panel.animate(
    [
      { height: '0px', opacity: 0 },
      { height: `${targetHeight}px`, opacity: 1 },
    ],
    { duration: DURATION, easing: 'cubic-bezier(0.4,0,0.2,1)', fill: 'forwards' }
  );
  anim.onfinish = () => { panel.style.height = 'auto'; };
}

function collapsePanel(panel: HTMLDivElement) {
  const current = panel.offsetHeight;
  panel.style.height = `${current}px`;
  const anim = panel.animate(
    [
      { height: `${current}px`, opacity: 1 },
      { height: '0px', opacity: 0 },
    ],
    { duration: DURATION, easing: 'cubic-bezier(0.4,0,0.2,1)', fill: 'forwards' }
  );
  anim.onfinish = () => { panel.style.height = '0px'; };
}

export function Accordion({ features, bridge }: AccordionProps) {
  const refs = useRef<Record<number, PanelRefs>>({});

  const toggle = useCallback(
    (index: number) => {
      const next = bridge.activeIndex === index ? null : index;
      const currentOpen = bridge.activeIndex;
      if (currentOpen !== null) {
        const cur = refs.current[currentOpen];
        if (cur?.panel && cur.content) collapsePanel(cur.panel);
      }
      if (next !== null) {
        const nx = refs.current[next];
        if (nx?.panel && nx.content) expandPanel(nx.panel, nx.content);
      }
      bridge.setActiveIndex(next);
    },
    [bridge]
  );

  useEffect(() => {
    if (bridge.isMobile && bridge.activeIndex !== null) {
      const nx = refs.current[bridge.activeIndex];
      if (nx?.panel && nx.content) {
        nx.panel.style.height = 'auto';
        nx.panel.style.opacity = '1';
      }
    }
  }, [bridge.isMobile, bridge.activeIndex]);

  return (
    <ul className={`accordion-stack ${styles.list}`} aria-label="Platform features accordion">
      {features.map((feature, index) => {
        const isOpen = bridge.activeIndex === index;
        return (
          <li key={feature.id} className={styles.item}>
            <h3 className={styles.heading}>
              <button
                type="button"
                className={`${styles.trigger} interactive`}
                aria-expanded={isOpen}
                aria-controls={`panel-${feature.id}`}
                id={`trigger-${feature.id}`}
                onClick={() => toggle(index)}
              >
                <span className={styles.triggerInner}>
                  <span className={styles.iconWrap}>
                    <PkgIcon src={feature.icon} size={24} alt={`${feature.title} icon`} className={styles.icon} />
                  </span>
                  <span className={styles.triggerText}>
                    <span className={`${styles.triggerTitle} font-display`}>{feature.title}</span>
                    <span className={styles.triggerShort}>{feature.short}</span>
                  </span>
                </span>
                <img
                  src="/svgs/chevron-down.svg"
                  width="20"
                  height="20"
                  alt=""
                  aria-hidden="true"
                  className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
                />
              </button>
            </h3>
            <div
              id={`panel-${feature.id}`}
              role="region"
              aria-labelledby={`trigger-${feature.id}`}
              className={styles.panel}
              style={{ height: '0px', opacity: 0 }}
              ref={(el) => {
                const entry = (refs.current[index] ??= { panel: null, content: null });
                entry.panel = el;
              }}
            >
              <div
                className={styles.content}
                ref={(el) => {
                  const entry = (refs.current[index] ??= { panel: null, content: null });
                  entry.content = el;
                }}
              >
                <p>{feature.long}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}