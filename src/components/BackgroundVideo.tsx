import { useEffect, useRef } from 'react';

const VIDEO_SRC = '/designarena_video.mp4';
const SCRUB_SENSITIVITY = 2.5;
const LERP_FACTOR = 0.22;
const DELTA_THRESHOLD = 0.05;

export function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rawXRef = useRef<number>(0);
  const smoothXRef = useRef<number>(0);
  const prevSmoothXRef = useRef<number>(0);
  const targetTimeRef = useRef<number>(0);
  const isSeekingRef = useRef<boolean>(false);
  const readyRef = useRef<boolean>(false);
  const metadataLoadedRef = useRef<boolean>(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;

    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      if (!readyRef.current) {
        readyRef.current = true;
        smoothXRef.current = e.clientX;
        prevSmoothXRef.current = e.clientX;
        targetTimeRef.current = video.currentTime || 0;
      }
      rawXRef.current = e.clientX;
    };

    const tick = () => {
      if (readyRef.current && metadataLoadedRef.current) {
        smoothXRef.current += (rawXRef.current - smoothXRef.current) * LERP_FACTOR;
        const delta = smoothXRef.current - prevSmoothXRef.current;
        prevSmoothXRef.current = smoothXRef.current;

        if (Math.abs(delta) > DELTA_THRESHOLD) {
          const timeOffset = (delta / window.innerWidth) * SCRUB_SENSITIVITY * video.duration;
          targetTimeRef.current = Math.max(
            0,
            Math.min(video.duration, targetTimeRef.current + timeOffset),
          );

          if (!isSeekingRef.current && !video.seeking) {
            isSeekingRef.current = true;
            video.currentTime = targetTimeRef.current;
          }
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    const onSeeked = () => {
      isSeekingRef.current = false;
      if (Math.abs(video.currentTime - targetTimeRef.current) > 0.01) {
        isSeekingRef.current = true;
        video.currentTime = targetTimeRef.current;
      }
    };

    const onLoadedMetadata = () => {
      metadataLoadedRef.current = true;
      targetTimeRef.current = 0;
      video.currentTime = 0;
      video.pause();
    };

    if (video.readyState >= 1) {
      onLoadedMetadata();
    } else {
      video.addEventListener('loadedmetadata', onLoadedMetadata);
    }
    window.addEventListener('mousemove', onMouseMove);
    video.addEventListener('seeked', onSeeked);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      video.removeEventListener('seeked', onSeeked);
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="bg-video fixed inset-0 -z-0 overflow-hidden pointer-events-none"
    >
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#0A0A0A]/65" />
    </div>
  );
}
