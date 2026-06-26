'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './HeroVideo.module.css';

interface HeroVideoProps {
  src: string;
  flip?: boolean;
  className?: string;
}

const SUPPORTS_HLS =
  typeof document !== 'undefined' &&
  !!document.createElement('video').canPlayType('application/vnd.apple.mpegurl');

export function HeroVideo({ src, flip = false, className }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [supported, setSupported] = useState<boolean | null>(null);

  useEffect(() => {
    setSupported(SUPPORTS_HLS);
    const el = videoRef.current;
    if (!el) return;
    // Some browsers need an explicit load() call after setting src
    el.load();
  }, []);

  return (
    <div
      className={`${styles.root} ${flip ? styles.flip : ''} ${className ?? ''}`}
      data-hls={supported === true ? 'true' : 'false'}
      aria-hidden="true"
    >
      <video
        ref={videoRef}
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        // For HLS native playback, set src directly. Other browsers
        // will get a non-decoding <video> with the dark overlay + CSS
        // mesh fallback behind it.
        src={supported === false ? undefined : src}
        // Provide a transparent inline track to avoid audio-mode bugs
        // and reduce layout-shift on some browsers.
      >
        <track kind="captions" />
      </video>

      {/* Mesh / gradient fallback layer for browsers without HLS support */}
      <div className={styles.fallback} aria-hidden="true">
        <span className={styles.fallbackOrb1} />
        <span className={styles.fallbackOrb2} />
        <span className={styles.fallbackOrb3} />
      </div>

      {/* Always-on dark tint over the video so text remains readable
          and the bg matches MP025 Oceanic Noir even on bright frames. */}
      <div className={styles.tint} aria-hidden="true" />

      {/* Bottom fade to next section */}
      <div className={styles.bottomFade} aria-hidden="true" />
    </div>
  );
}
