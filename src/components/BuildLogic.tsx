import React from 'react';
import { Reveal } from './Reveal';

export function BuildLogic() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#050505] relative overflow-hidden">
      <Reveal>
        <div className="max-w-2xl mb-16">
          <div className="font-mono text-xs text-[#114C5A] mb-6 flex items-center gap-2 uppercase tracking-widest">
            <span className="w-1 h-1 bg-[#114C5A] inline-block"></span> OUR PRODUCT
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 text-[#F1F6F4]">
            Build logic at scale
          </h2>
          <p className="text-[#D9E8E2]/70 text-lg leading-relaxed max-w-xl">
            Design, deploy, and manage sophisticated AI workflows through an intuitive visual interface. No complex coding — just pure logic.
          </p>
        </div>

        {/* Node Editor Abstract UI */}
        <div className="w-full aspect-square md:aspect-[21/9] bg-[#0a0a0a] border border-[#114C5A] rounded overflow-hidden relative flex flex-col items-center justify-center shadow-2xl">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(17,76,90,0.4)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          {/* Floating UI Elements */}
          <div className="absolute top-4 left-4 bg-black/40 border border-[#114C5A] px-4 py-2 rounded text-xs font-mono text-[#D9E8E2]/50 flex gap-4 backdrop-blur-md">
            <span>IN RECENT</span>
            <span className="text-[#FFC801]">IN DRAFT</span>
          </div>

          {/* Node Graph Representation */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 relative z-10 p-8">
            
            {/* Node 1 */}
            <div className="bg-[#172B36] border border-[#114C5A] text-[#F1F6F4] p-5 rounded-lg w-56 text-sm shadow-2xl relative group animate-float-node" style={{ animationDelay: '0s' }}>
              <div className="flex justify-between items-center mb-3">
                <span className="font-medium">Email Trigger</span>
                <span className="text-xs text-[#D9E8E2]/50 font-mono">IMAP</span>
              </div>
              <div className="h-1.5 w-full bg-[#114C5A] rounded overflow-hidden">
                <div className="h-full bg-[#FFC801] w-1/3"></div>
              </div>
              {/* Output dot */}
              <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#FFC801] border-2 border-[#172B36] rounded-full"></div>
            </div>

            {/* Connection line (hidden on mobile) */}
            <div className="hidden md:block h-px w-16 flowing-line relative">
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 border-t border-r border-[#FFC801] rotate-45 transform translate-x-1"></div>
            </div>

            {/* Node 2 - AI Agent (Highlighted) */}
            <div className="bg-[#FFC801] text-[#172B36] p-5 rounded-lg w-56 text-sm shadow-[0_0_40px_rgba(255,200,1,0.2)] relative transform scale-105 animate-float-node" style={{ animationDelay: '1s' }}>
              {/* Input dot */}
              <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#172B36] border-2 border-[#FFC801] rounded-full"></div>
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 22h20L12 2z" fill="#172B36"/>
                  </svg>
                  AI Agent
                </span>
                <span className="text-xs text-[#172B36]/60 font-mono">v4.0</span>
              </div>
              <div className="text-xs text-[#172B36]/80 mb-2 font-medium">Processing payload...</div>
              <div className="h-1.5 w-full bg-[#172B36]/20 rounded overflow-hidden">
                <div className="h-full bg-[#172B36] w-3/4 animate-pulse"></div>
              </div>
              {/* Output dots */}
              <div className="absolute -right-1.5 top-1/3 -translate-y-1/2 w-3 h-3 bg-[#172B36] border-2 border-[#FFC801] rounded-full"></div>
              <div className="absolute -right-1.5 top-2/3 -translate-y-1/2 w-3 h-3 bg-[#172B36] border-2 border-[#FFC801] rounded-full"></div>
            </div>

            {/* Connection line (hidden on mobile) */}
            <div className="hidden md:block h-px w-16 flowing-line relative transform translate-y-[-20px]">
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 border-t border-r border-[#FFC801]/50 rotate-45 transform translate-x-1"></div>
            </div>

            {/* Node 3 */}
            <div className="bg-[#172B36] border border-[#114C5A] text-[#F1F6F4] p-5 rounded-lg w-56 text-sm shadow-2xl relative md:transform md:translate-y-[-20px] animate-float-node" style={{ animationDelay: '2s' }}>
              {/* Input dot */}
              <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#FFC801] border-2 border-[#172B36] rounded-full"></div>
              <div className="flex justify-between items-center mb-3">
                <span className="font-medium">Database</span>
                <span className="text-xs text-[#D9E8E2]/50 font-mono">SQL</span>
              </div>
              <div className="h-1.5 w-full bg-[#114C5A] rounded"></div>
            </div>

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-16 border-t border-[#114C5A]">
          <div>
            <h3 className="font-medium text-lg mb-3 text-[#F1F6F4]">Infinite Visual Canvas</h3>
            <p className="text-[#D9E8E2]/70 text-sm leading-relaxed">Map out multi-step agent behaviors on a high-precision grid. Drag and drop triggers, logic gates, and actions to craft custom paths.</p>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-3 text-[#F1F6F4]">Autonomous Execution</h3>
            <p className="text-[#D9E8E2]/70 text-sm leading-relaxed">Run complex decision trees without manual intervention. Our engine handles conditional branching and error recovery automatically.</p>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-3 text-[#F1F6F4]">End-to-End Encryption</h3>
            <p className="text-[#D9E8E2]/70 text-sm leading-relaxed">Every node and data transfer is shielded by industrial-grade security. Maintain total control over your organizational data flow.</p>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-3 text-[#F1F6F4]">Production-Ready Stack</h3>
            <p className="text-[#D9E8E2]/70 text-sm leading-relaxed">Connect core business platforms and internal services through secure, ready integrations that scale with your volume.</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
