import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { showToast } from '../lib/toast';

export function Stats() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#050505]">
      <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        <div className="lg:col-span-5">
          <div className="font-mono text-xs text-[#114C5A] mb-6 flex items-center gap-2">
            <span className="w-1 h-1 bg-[#114C5A] inline-block"></span> STAT_37A712105
          </div>
          <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-8 text-[#F1F6F4]">
            Quantifiable impact across every deployment. We measure success by the speed and scale of your neural ops.
          </h2>
          <div>
            <button
              type="button"
              onClick={() => showToast('View Report Initiated')}
              aria-label="View the Q1 2026 deployment performance report"
              title="Open the full Q1 2026 deployment performance report"
              className="btn-hover-arrow inline-flex items-center border border-[#114C5A] pl-4 pr-6 py-2 rounded-sm text-sm text-[#F1F6F4] hover:bg-[#114C5A]/10 transition-colors cursor-pointer"
            >
              <span className="mr-4 w-6 h-6 flex items-center justify-center bg-[#FFC801] text-[#172B36] rounded-sm">
                <ChevronRight className="w-3 h-3" />
              </span>
              View Report
            </button>
            <p className="font-mono text-[11px] text-[#D9E8E2]/55 tracking-wide mt-3 uppercase">
              Q1 2026 &middot; 38 pages &middot; PDF + interactive dashboard
            </p>
          </div>
        </div>

        <Reveal stagger className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t lg:border-t-0 lg:border-l border-[#114C5A] lg:pl-12 pt-8 lg:pt-0">
          <div>
            <div className="text-6xl md:text-7xl font-medium tracking-tight mb-4 text-[#F1F6F4]">12<span className="text-3xl text-[#114C5A]">ms</span></div>
            <div className="text-[#D9E8E2]/70 text-sm leading-relaxed">Average latency for real-time inference.</div>
          </div>
          <div>
            <div className="text-6xl md:text-7xl font-medium tracking-tight mb-4 text-[#F1F6F4]">10<span className="text-3xl text-[#114C5A]">x</span></div>
            <div className="text-[#D9E8E2]/70 text-sm leading-relaxed">Increase in manual task processing speed.</div>
          </div>
          <div>
            <div className="text-6xl md:text-7xl font-medium tracking-tight mb-4 text-[#F1F6F4]">99<span className="text-3xl text-[#114C5A]">%</span></div>
            <div className="text-[#D9E8E2]/70 text-sm leading-relaxed">Uptime for critical agent infrastructure.</div>
          </div>
        </Reveal>
      </Reveal>
    </section>
  );
}
