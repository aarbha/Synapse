import React from 'react';
import { ChevronRight, Plus } from 'lucide-react';
import { Reveal } from './Reveal';
import { showToast } from '../lib/toast';

const quickLinks = [
  { label: 'Home',      hint: 'Back to the top of the page',         toast: 'Navigate to Home' },
  { label: 'Pricing',   hint: 'See plans and per-seat pricing',      toast: 'Navigate to Pricing' },
  { label: 'Projects',  hint: 'Browse the public project directory', toast: 'Navigate to Projects' },
  { label: 'Articles',  hint: 'Read field notes and product updates',toast: 'Navigate to Articles' },
];

const companyLinks = [
  { label: 'About Us',    hint: 'Meet the team behind Synapse',     toast: 'About Us' },
  { label: 'Contact Us',  hint: 'Reach support, sales, or press',   toast: 'Contact Us' },
  { label: 'Book A Call', hint: 'Schedule a 30-minute product demo', toast: 'Book A Call' },
  { label: 'More Templates', hint: 'See all the templates we ship',  toast: 'More Templates' },
];

const legalLinks = [
  { label: 'Privacy', hint: 'Read the privacy policy',           toast: 'Privacy Policy' },
  { label: 'Terms',   hint: 'Read the terms of service',         toast: 'Terms of Service' },
  { label: 'Security',hint: 'Read our security & compliance docs',toast: 'Security Docs' },
];

export function Footer() {
  return (
    <footer className="bg-black pt-24 pb-8 px-6 md:px-12 lg:px-24 border-t border-[#114C5A] relative overflow-hidden">
      {/* Abstract dark gradient background effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-[#114C5A]/[0.15] blur-[120px] rounded-full pointer-events-none"></div>

      <Reveal className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-32">
        <div className="lg:col-span-2 md:pr-12">
          <div className="font-mono text-xs text-[#114C5A] mb-6 flex items-center gap-2 uppercase tracking-widest">
            <span className="w-1 h-1 bg-[#114C5A] inline-block"></span> GET STARTED
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 leading-tight text-[#F1F6F4]">
            Get smarter about <br /> AI systems
          </h2>
          <p className="text-[#D9E8E2]/70 mb-8 max-w-sm leading-relaxed">
            Weekly insights on automation, AI workflows, and real builds. No fluff, just what works.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md">
            <input
              type="email"
              placeholder="jane@synapse.com"
              aria-label="Email address for the newsletter"
              title="Enter your work email to receive the weekly newsletter"
              className="bg-white/5 border border-[#114C5A] rounded-sm px-4 py-3.5 flex-1 text-sm focus:outline-none focus:border-[#FFC801] transition-colors placeholder:text-[#114C5A] text-[#F1F6F4]"
            />
            <button
              type="button"
              onClick={() => showToast('Subscribed to Newsletter')}
              aria-label="Subscribe to the Synapse weekly newsletter"
              title="Subscribe — receive one email every Tuesday at 9am"
              className="bg-[#FFC801] text-[#172B36] font-medium px-6 py-3.5 rounded-sm text-sm hover:bg-[#FF9932] transition-colors flex items-center justify-center cursor-pointer"
            >
              Subscribe <ChevronRight className="w-4 h-4 ml-2" />
            </button>
          </div>
          <p className="font-mono text-[10px] text-[#D9E8E2]/45 tracking-wider uppercase mt-3">
            Free forever &middot; one issue per Tuesday &middot; unsubscribe in one click
          </p>
        </div>

        <div>
          <h4 className="font-mono text-xs text-[#114C5A] mb-6 uppercase tracking-widest">QUICK LINKS</h4>
          <ul className="space-y-4 text-sm text-[#D9E8E2]/70">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <button
                  type="button"
                  onClick={() => showToast(link.toast)}
                  aria-label={`${link.label} — ${link.hint}`}
                  title={link.hint}
                  className="hover:text-[#FFC801] transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs text-[#114C5A] mb-6 uppercase tracking-widest">COMPANY</h4>
          <ul className="space-y-4 text-sm text-[#D9E8E2]/70">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <button
                  type="button"
                  onClick={() => showToast(link.toast)}
                  aria-label={`${link.label} — ${link.hint}`}
                  title={link.hint}
                  className="hover:text-[#FFC801] transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className="relative z-10 flex flex-col border-t border-[#114C5A] pt-12 items-center">
        {/* Huge Text Logo */}
        <h1 className="text-[18vw] leading-[0.8] font-bold tracking-tighter text-[#F1F6F4] opacity-[0.97] select-none text-center w-full overflow-hidden flex justify-center pb-8 scramble-hover" data-text="synapse">
          synapse
        </h1>

        <div className="w-full flex flex-col md:flex-row justify-between items-center text-xs font-mono text-[#D9E8E2]/50 gap-4 mt-8">
          <span>&copy; 2026 Synapse AI. All rights reserved.</span>
          <div className="flex gap-4">
            {legalLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => showToast(link.toast)}
                aria-label={`${link.label} — ${link.hint}`}
                title={link.hint}
                className="hover:text-[#FFC801] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
