'use client';

import { useEffect, useState } from 'react';
import { LoadingScreen } from '@/components/shared/LoadingScreen';

interface PageClientProps {
  children: React.ReactNode;
}

export function PageClient({ children }: PageClientProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Lock body scroll while the loading screen is up.
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (isLoading) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      {children}
    </>
  );
}
