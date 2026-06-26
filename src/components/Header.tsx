import React from 'react';
import { Menu } from 'lucide-react';
import { showToast } from '../lib/toast';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 nav-blur border-b border-[#114C5A]">
      <div 
        onClick={() => showToast('Navigate to Home')}
        className="flex items-center gap-2 cursor-pointer"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2L2 22h20L14 2z" fill="#FFC801"/>
          <path d="M10 2L20 22H0L10 2z" fill="rgba(255,153,50,0.8)"/>
        </svg>
        <span className="font-bold text-xl tracking-tight text-[#F1F6F4] scramble-hover" data-text="synapse">synapse</span>
      </div>
      <button 
        onClick={() => showToast('Toggle Navigation Menu')}
        className="p-2 hover:bg-[#114C5A] rounded-md transition-colors cursor-pointer"
      >
        <Menu className="w-6 h-6 text-[#F1F6F4]" />
      </button>
    </header>
  );
}

