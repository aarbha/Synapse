import { useEffect, useRef } from 'react';

const VIDEO_SRC = '/designarena_video.mp4';
const SCRUB_SENSITIVITY = 0.8;

export function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const prevXRef = useRef<number>(0);
  const targetTimeRef = useRef<number>(0);
  const isSeekingRef = useRef<boolean>(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onMouseMove = (e: MouseEvent) => {
      const currentX = e.clientX;
      const delta = currentX - prevXRef.current;
      prevXRef.current = currentX;

      const timeOffset = (delta / window.innerWidth) * SCRUB_SENSITIVITY * video.duration;
      targetTimeRef.current = Math.max(
        0,
        Math.min(video.duration, targetTimeRef.current + timeOffset),
      );

      if (!isSeekingRef.current) {
        isSeekingRef.current = true;
        video.currentTime = targetTimeRef.current;
      }
    };

    const onSeeked = () => {
      isSeekingRef.current = false;
      if (Math.abs(video.currentTime - targetTimeRef.current) > 0.01) {
        isSeekingRef.current = true;
        video.currentTime = targetTimeRef.current;
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    video.addEventListener('seeked', onSeeked);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      video.removeEventListener('seeked', onSeeked);
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
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#0A0A0A]/65" />
    </div>
  );
}
