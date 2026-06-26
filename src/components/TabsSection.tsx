import React, { useState } from 'react';
import { Reveal } from './Reveal';
import { showToast } from '../lib/toast';

const tabs = ['DISCOVERY', 'ANALYSIS', 'TRAINING', 'DEPLOY'];

export function TabsSection() {
  const [activeTab, setActiveTab] = useState(1); // Default ANALYSIS

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-[#114C5A] bg-[#030303]">
      <Reveal>
        <div className="max-w-2xl mb-16">
          <div className="font-mono text-xs text-[#114C5A] mb-6 flex items-center gap-2 uppercase tracking-widest">
            <span className="w-1 h-1 bg-[#114C5A] inline-block"></span> PRODUCT FEATURES
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#F1F6F4] tracking-tight mb-6">
            Engineered for autonomy
          </h2>
          <p className="text-[#D9E8E2]/70 text-lg leading-relaxed">
            Go beyond simple chat interfaces. Synapse provides the underlying architecture to build, test, and scale enterprise-grade agents.
          </p>
        </div>

        <div className="border border-[#114C5A] rounded bg-[#0a0a0a] overflow-hidden">
          {/* Tabs header */}
          <div className="flex border-b border-[#114C5A] overflow-x-auto hide-scrollbar relative">
            {tabs.map((tab, i) => (
              <button
                type="button"
                key={tab}
                onClick={() => setActiveTab(i)}
                aria-label={`${tab.charAt(0)}${tab.slice(1).toLowerCase()} — view this stage of the agent lifecycle`}
                title={`View the ${tab.charAt(0)}${tab.slice(1).toLowerCase()} stage`}
                aria-pressed={activeTab === i}
                className={`flex-1 py-5 text-xs font-mono text-center tracking-widest transition-colors whitespace-nowrap px-8 relative
                  ${activeTab === i ? 'text-[#FFC801] bg-[#114C5A]/10' : 'text-[#D9E8E2]/50 hover:text-[#D9E8E2] hover:bg-white/[0.02] cursor-pointer'}`}
              >
                {tab}
                {activeTab === i && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FFC801]"></div>
                )}
              </button>
            ))}
          </div>

          {/* Tab content area */}
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
            {/* Visual Column */}
            <div className="p-12 lg:p-24 border-b lg:border-b-0 lg:border-r border-[#114C5A] flex items-center justify-center bg-black relative overflow-hidden">
               {/* Abstract Grid background */}
               <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #114C5A 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
               
              {/* Abstract UI representing the tab */}
              <div className="w-full max-w-sm aspect-video bg-[#0a0a0a] border border-[#114C5A] rounded-lg flex flex-col p-6 shadow-2xl relative z-10 transition-all duration-500" key={activeTab}>
                 
                 {activeTab === 0 && (
                   <div className="flex-1 flex items-center justify-center gap-4">
                     <div className="w-12 h-12 rounded-full border border-[#FFC801]/30 border-t-[#FFC801] animate-spin" style={{ animationDuration: '3s'}}></div>
                     <div className="space-y-2 flex-1">
                       <div className="h-2 w-full bg-[#114C5A]/50 rounded"></div>
                       <div className="h-2 w-2/3 bg-[#114C5A]/50 rounded"></div>
                     </div>
                   </div>
                 )}

                 {activeTab === 1 && (
                   <>
                    <div className="flex justify-between items-center mb-6">
                      <div className="h-2 w-1/3 bg-[#114C5A] rounded"></div>
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FFC801]/40"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FFC801]/40"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FFC801]/40"></div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-4">
                        <div className="w-8 text-xs font-mono text-[#D9E8E2]/50">9/10</div>
                        <div className="flex-1 h-1.5 bg-[#114C5A]/30 rounded overflow-hidden"><div className="h-full bg-[#FFC801] animate-expand-width" style={{ width: '90%' }}></div></div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-8 text-xs font-mono text-[#D9E8E2]/50">8/10</div>
                        <div className="flex-1 h-1.5 bg-[#114C5A]/30 rounded overflow-hidden"><div className="h-full bg-[#FFC801]/60 animate-expand-width" style={{ width: '80%' }}></div></div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-8 text-xs font-mono text-[#D9E8E2]/50">100%</div>
                        <div className="flex-1 h-1.5 bg-[#114C5A]/30 rounded overflow-hidden"><div className="h-full bg-[#FFC801]/40 animate-expand-width" style={{ width: '100%' }}></div></div>
                      </div>
                    </div>
                   </>
                 )}

                 {activeTab === 2 && (
                   <div className="h-full flex items-end gap-2 pb-2">
                     <div className="w-1/5 bg-[#114C5A]/30 rounded-t hover:bg-[#FFC801]/50 transition-all duration-300 animate-expand-height origin-bottom" style={{ height: '40%' }}></div>
                     <div className="w-1/5 bg-[#114C5A]/30 rounded-t hover:bg-[#FFC801]/50 transition-all duration-300 animate-expand-height origin-bottom" style={{ height: '60%', animationDelay: '0.1s' }}></div>
                     <div className="w-1/5 bg-[#114C5A]/50 rounded-t hover:bg-[#FFC801]/50 transition-all duration-300 animate-expand-height origin-bottom" style={{ height: '80%', animationDelay: '0.2s' }}></div>
                     <div className="w-1/5 bg-[#114C5A] rounded-t hover:bg-[#FFC801]/50 transition-all duration-300 animate-expand-height origin-bottom" style={{ height: '100%', animationDelay: '0.3s' }}></div>
                     <div className="w-1/5 bg-[#114C5A]/30 rounded-t hover:bg-[#FFC801]/50 transition-all duration-300 animate-expand-height origin-bottom" style={{ height: '70%', animationDelay: '0.4s' }}></div>
                   </div>
                 )}

                 {activeTab === 3 && (
                   <div className="flex-1 border border-[#114C5A]/50 rounded bg-[#172B36]/50 flex flex-col items-center justify-center text-center p-4">
                     <div className="w-8 h-8 rounded-full bg-[#FFC801]/20 text-[#FFC801] flex items-center justify-center mb-3">
                       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                     </div>
                     <div className="text-xs font-mono text-[#F1F6F4]">DEPLOYMENT_LIVE</div>
                   </div>
                 )}

                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none rounded-lg"></div>
              </div>
            </div>

            {/* Text Column */}
            <div className="p-12 lg:p-24 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-medium mb-6 leading-tight text-[#F1F6F4]">
                {activeTab === 0 && 'Uncover hidden patterns and streamline complex data ingestion automatically.'}
                {activeTab === 1 && 'Evaluate agent performance with surgical precision. Get real-time scoring on accuracy, safety, and contextual relevance.'}
                {activeTab === 2 && 'Fine-tune neural weights seamlessly. Train models on your specific enterprise datasets for targeted outcomes.'}
                {activeTab === 3 && 'Push agents to production with a single click. Enjoy zero-downtime deployments and instant rollback capabilities.'}
              </h3>
              <p className="text-[#D9E8E2]/70 text-base mb-10 flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[#114C5A] flex items-center justify-center text-[#FFC801]"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg></span>
                Quantify every interaction for total quality.
              </p>
              <div>
                <button
                  type="button"
                  onClick={() => showToast('More Metrics Data')}
                  aria-label="Open the full performance dashboard with historical trends"
                  title="Open the full performance dashboard with historical trends"
                  className="border border-[#114C5A] text-[#F1F6F4] px-6 py-3 rounded-sm text-xs font-mono tracking-widest hover:bg-[#114C5A] hover:text-[#FFC801] transition-colors cursor-pointer"
                >
                  MORE METRICS
                </button>
                <p className="font-mono text-[11px] text-[#D9E8E2]/55 tracking-wide mt-3 uppercase">
                  90-day rolling window &middot; exportable CSV &middot; live updates
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
