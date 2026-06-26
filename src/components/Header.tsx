import React from 'react';
import { Menu } from 'lucide-react';
import { showToast } from '../lib/toast';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 nav-blur border-b border-[#114C5A]">
      <button
        type="button"
        onClick={() => showToast('Navigate to Home')}
        aria-label="Synapse — go to home"
        className="flex items-center gap-2 cursor-pointer bg-transparent border-0 p-0"
      >
        <span
          className="font-mono text-xl tracking-[0.04em] text-[#F1F6F4] scramble-hover"
          data-text="synapse"
          style={{ fontVariantCaps: 'small-caps' }}
        >
          synapse
        </span>
      </button>
      <button
        type="button"
        onClick={() => showToast('Toggle Navigation Menu')}
        aria-label="Open navigation menu"
        title="Open the full site navigation"
        className="p-2 hover:bg-[#114C5A] rounded-md transition-colors cursor-pointer"
      >
        <Menu className="w-6 h-6 text-[#F1F6F4]" />
      </button>
    </header>
  );
}
