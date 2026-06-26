import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
  delay?: number;
}

export function Reveal({ children, className = '', stagger = false, delay = 0 }: RevealProps) {
  const { ref, isIntersecting } = useIntersectionObserver();

  const baseClass = stagger ? 'reveal-stagger' : 'reveal';
  const activeClass = isIntersecting ? 'active' : '';

  return (
    <div 
      ref={ref} 
      className={`${baseClass} ${activeClass} ${className}`} 
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}
