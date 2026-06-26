'use client';

import { useEffect, useState } from 'react';
import styles from './LoadingScreen.module.css';

interface LoadingScreenProps {
  onComplete: () => void;
  duration?: number;
}

const ROTATING_WORDS = ['Automate', 'Orchestrate', 'Ship', 'Synapse'];
const WORD_CYCLE_MS = 900;

export function LoadingScreen({ onComplete, duration = 2700 }: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [exiting, setExiting] = useState(false);

  // Counter: 0 → 100 over `duration` ms using requestAnimationFrame.
  useEffect(() => {
    const start = performance.now();
    let rafId = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(100, Math.round((elapsed / duration) * 100));
      setCount(progress);
      if (progress < 100) {
        rafId = requestAnimationFrame(tick);
      } else {
        // 400ms delay, then exit
        window.setTimeout(() => {
          setExiting(true);
          window.setTimeout(onComplete, 400);
        }, 400);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [duration, onComplete]);

  // Word cycle independent of counter
  useEffect(() => {
    const id = window.setInterval(() => {
      setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, WORD_CYCLE_MS);
    return () => window.clearInterval(id);
  }, []);

  const padded = String(count).padStart(3, '0');
  const scaleX = (count / 100).toFixed(3);

  return (
    <div
      className={`${styles.root} ${exiting ? styles.exiting : ''}`}
      role="status"
      aria-live="polite"
      aria-busy={count < 100}
      aria-label={`Loading Synapse — ${count} percent`}
    >
      <span className={`${styles.label} font-display`}>Synapse</span>

      <div className={styles.center} aria-hidden="true">
        <span key={wordIndex} className={`${styles.word} font-display ${styles.wordIn}`}>
          {ROTATING_WORDS[wordIndex]}
        </span>
      </div>

      <span className={`${styles.counter} font-display`}>{padded}</span>

      <div className={styles.progressTrack} aria-hidden="true">
        <div
          className={`${styles.progressFill} accent-gradient`}
          style={{ transform: `scaleX(${scaleX})` }}
        />
      </div>
    </div>
  );
}
