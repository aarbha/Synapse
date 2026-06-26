import React from 'react';
import { Reveal } from './Reveal';

export function ShowcaseCards() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/10 bg-[#172B36] flex flex-col items-center overflow-hidden">
      <Reveal className="w-full flex flex-col items-center">
        <div className="max-w-2xl mb-16 text-center">
          <div className="font-mono text-xs text-gray-500 mb-6 flex items-center justify-center gap-2 uppercase tracking-widest">
            <span className="w-1 h-1 bg-white inline-block"></span> PLATFORM
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
            Synapse Ecosystem
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">Hover over the platform nodes below to expand and see how Synapse agents connect, compute, and act in real time.</p>
        </div>

        <div className="card-container bg-[#114C5A] shadow-2xl relative transform transition-transform duration-500 hover:scale-105">
            <div className="card-custom bg-blue-900 rounded-2xl h-[300px] w-full top-0 left-0"
                style={{ backgroundImage: "url('/case-studies/cigna-healthcare.png')" }}>
                <div className="card-content">
                    <div className="card-title">Clinical Agents</div>
                    <div className="card-description">Synapse clinical agents read patient signals, surface risk patterns, and route the right care to the right provider in seconds. Built for HIPAA-grade health systems and tuned to your protocols.</div>
                </div>
            </div>
            <div className="card-custom bg-teal-900 rounded-2xl h-[200px] w-[200px] top-[305px] left-0 bottom-0"
                style={{ backgroundImage: "url('/case-studies/aetna-datasystem.png')" }}>
                <div className="card-content">
                    <div className="card-title">Live Data Fabric</div>
                    <div className="card-description">Stream, transform, and unify every signal across your stack. Synapse turns raw records into live decisions that agents can act on with millisecond latency.</div>
                </div>
            </div>
            <div className="card-d3 bg-teal-800 rounded-2xl border-4 hover:border-0 border-white/10 h-[280px] w-[305px] right-0 bottom-0"
                style={{ backgroundImage: "url('/case-studies/anthem-neural.png')" }}>
                <div className="card-content">
                    <div className="card-title">Neural Mesh</div>
                    <div className="card-description">A self-organising mesh of reasoning models, memory stores, and tool adapters. Synapse routes every request through the cheapest path that returns the right answer.</div>
                </div>
            </div>
        </div>
      </Reveal>
    </section>
  );
}
