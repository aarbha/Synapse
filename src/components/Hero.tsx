import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { showToast } from '../lib/toast';

export function Hero() {
  return (
    <section className="relative min-h-screen pt-24 pb-12 flex flex-col justify-end px-6 md:px-12 lg:px-24">
      <div className="absolute inset-0 hero-grid pointer-events-none"></div>
      
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end z-10 w-full h-full pb-10">
        
        {/* Left Side */}
        <div className="max-w-3xl mb-16 lg:mb-0">
          <Reveal>
            <h1 className="text-6xl md:text-[5.5rem] font-medium text-[#F1F6F4] tracking-tight leading-[1.05] mb-6 drop-shadow-[0_0_25px_rgba(241,246,244,0.15)] hover:drop-shadow-[0_0_40px_rgba(241,246,244,0.4)] transition-all duration-700 cursor-default">
              Power your <br /> future with AI
            </h1>
            <p className="text-[#D9E8E2]/70 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
              Deploy custom enterprise agents and automate complex workflows.
              Scale your intelligence with Synapse today.
            </p>
            <button 
              onClick={() => showToast('Workflow Builder')}
              className="btn-hover-arrow group flex items-center bg-[#FFC801] text-[#172B36] pl-6 pr-4 py-3 rounded-sm font-medium hover:bg-[#FF9932] transition-colors cursor-pointer"
            >
              Build A Workflow
              <span className="ml-4 w-8 h-8 flex items-center justify-center bg-[#172B36] text-[#FFC801] rounded-sm arrow-icon">
                <ChevronRight className="w-4 h-4" />
              </span>
            </button>
          </Reveal>
        </div>

        {/* Right Side Menu */}
        <div className="flex flex-col items-start lg:items-end space-y-6">
          <Reveal stagger className="flex flex-col space-y-3 text-2xl md:text-3xl font-medium text-[#114C5A] lg:text-right">
            <button onClick={() => showToast('AI Strategy')} className="hover:text-[#F1F6F4] transition-colors text-left lg:text-right">AI Strategy</button>
            <button onClick={() => showToast('Custom Agents')} className="hover:text-[#F1F6F4] transition-colors text-left lg:text-right">Custom Agents</button>
            <button onClick={() => showToast('Process Automation')} className="hover:text-[#F1F6F4] transition-colors text-left lg:text-right">Process Automation</button>
            <button onClick={() => showToast('Data Intelligence')} className="hover:text-[#F1F6F4] transition-colors text-left lg:text-right">Data Intelligence</button>
          </Reveal>

          <Reveal delay={400} className="mt-12 flex items-center gap-8 text-[#114C5A] pt-8 border-t border-[#114C5A] w-full lg:w-auto lg:justify-end">
            <span onClick={() => showToast('Aetna Partner')} className="font-bold text-xl flex items-center gap-1 cursor-pointer hover:text-[#F1F6F4] transition-colors">
              <span className="w-3 h-3 bg-current rounded-full inline-block mr-1"></span>
              aetna
            </span>
            <span onClick={() => showToast('Cigna Partner')} className="font-bold text-2xl italic tracking-tighter cursor-pointer hover:text-[#F1F6F4] transition-colors">
              Cigna
            </span>
            <span onClick={() => showToast('Anthem Partner')} className="font-medium text-xl tracking-tight cursor-pointer hover:text-[#F1F6F4] transition-colors">
              Anthem
            </span>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
