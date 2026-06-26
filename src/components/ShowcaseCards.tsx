import React from 'react';
import { Reveal } from './Reveal';

export function ShowcaseCards() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/10 bg-[#172B36] flex flex-col items-center overflow-hidden">
      <Reveal className="w-full flex flex-col items-center">
        <div className="max-w-2xl mb-16 text-center">
          <div className="font-mono text-xs text-gray-500 mb-6 flex items-center justify-center gap-2 uppercase tracking-widest">
            <span className="w-1 h-1 bg-white inline-block"></span> EXPLORATION
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
            Interactive Ecosystem
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">Hover over the environment nodes below to expand and discover real-time details.</p>
        </div>

        <div className="card-container bg-[#114C5A] shadow-2xl relative transform transition-transform duration-500 hover:scale-105">
            <div className="card-custom bg-blue-900 rounded-2xl h-[300px] w-full top-0 left-0"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}>
                <div className="card-content">
                    <div className="card-title">Mountain View</div>
                    <div className="card-description">Explore the breathtaking heights of natural wonders. These majestic mountains offer spectacular views and unforgettable experiences for all adventure seekers.</div>
                </div>
            </div>
            <div className="card-custom bg-teal-900 rounded-2xl h-[200px] w-[200px] top-[305px] left-0 bottom-0"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}>
                <div className="card-content">
                    <div className="card-title">Calm Waters</div>
                    <div className="card-description">Experience the serene beauty of this peaceful lake destination. Perfect for relaxation and connecting with nature's gentle side.</div>
                </div>
            </div>
            <div className="card-d3 bg-teal-800 rounded-2xl border-4 hover:border-0 border-white/10 h-[280px] w-[305px] right-0 bottom-0"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}>
                <div className="card-content">
                    <div className="card-title">Forest Journey</div>
                    <div className="card-description">Discover the mysteries hidden within ancient forests. A lush green sanctuary where time seems to stand still among the towering trees.</div>
                </div>
            </div>
        </div>
      </Reveal>
    </section>
  );
}
