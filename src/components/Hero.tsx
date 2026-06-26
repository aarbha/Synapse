import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { showToast } from '../lib/toast';

export function Hero() {
  return (
    <section className="relative min-h-screen pt-24 pb-12 flex flex-col justify-end px-6 md:px-12 lg:px-24">
      <div className="absolute inset-0 hero-grid pointer-events-none"></div>

      <div className="flex flex-col z-10 w-full h-full pb-10 justify-end">

        {/* Left Side */}
        <div className="max-w-3xl">
          <Reveal>
            <h1 className="text-6xl md:text-[5.5rem] font-medium text-[#F1F6F4] tracking-tight leading-[1.05] mb-6 drop-shadow-[0_0_25px_rgba(241,246,244,0.15)] hover:drop-shadow-[0_0_40px_rgba(241,246,244,0.4)] transition-all duration-700 cursor-default">
              Power your <br /> future with AI
            </h1>
            <p className="text-[#D9E8E2]/70 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
              Deploy custom enterprise agents and automate complex workflows.
              Scale your intelligence with Synapse today.
            </p>
            <div>
              <button
                type="button"
                onClick={() => showToast('Workflow Builder')}
                aria-label="Build a workflow — open the visual workflow builder"
                title="Open the visual workflow builder"
                className="btn-hover-arrow group flex items-center bg-[#FFC801] text-[#172B36] pl-6 pr-4 py-3 rounded-sm font-medium hover:bg-[#FF9932] transition-colors cursor-pointer"
              >
                Build A Workflow
                <span className="ml-4 w-8 h-8 flex items-center justify-center bg-[#172B36] text-[#FFC801] rounded-sm arrow-icon">
                  <ChevronRight className="w-4 h-4" />
                </span>
              </button>
              <p className="font-mono text-[11px] text-[#D9E8E2]/55 tracking-wide mt-3 uppercase">
                Drag &middot; drop &middot; deploy &mdash; no code required, ship in minutes
              </p>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
