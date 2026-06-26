import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { showToast } from '../lib/toast';

const caseStudies = [
  {
    id: 'cigna',
    year: '2026',
    title: 'Cigna Smart Health Systems',
    desc: 'Revolutionizing patient care through predictive analytics and seamless AI-driven diagnostic integration tools.',
    image: '/case-studies/cigna-healthcare.png',
    fallback: { color: 'bg-gradient-to-br from-[#D9E8E2] to-[#F1F6F4]', logo: 'Cigna' },
  },
  {
    id: 'aetna',
    year: '2026',
    title: 'Aetna Health Data Ecosystem',
    desc: 'We automated Aetna\'s member data management using secure AI to provide personalized care and clinical insights.',
    image: '/case-studies/aetna-datasystem.png',
    fallback: { color: 'bg-gradient-to-br from-[#FFC801] to-[#FF9932]', logo: 'aetna' },
  },
  {
    id: 'anthem',
    year: '2026',
    title: 'Anthem Neural Care Network',
    desc: 'We deployed a custom LLM to automate Anthem\'s provider relations, reducing ticket latency by eighty-five percent.',
    image: '/case-studies/anthem-neural.png',
    fallback: { color: 'bg-gradient-to-br from-[#FF9932] to-[#D9E8E2]', logo: 'Anthem' },
  },
];

export function CaseStudies() {
  const [hovered, setHovered] = useState(caseStudies[0].id);

  return (
    <section className="bg-[#F1F6F4] text-[#172B36] py-24 px-6 md:px-12 lg:px-24">
      <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 min-h-[600px]">
        {/* Left column - Title and Image */}
        <div className="flex flex-col">
          <div className="font-mono text-xs text-[#114C5A] mb-6 flex items-center gap-2 uppercase tracking-widest">
            <span className="w-1 h-1 bg-[#172B36] inline-block"></span> CASE STUDIES
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8 max-w-md leading-tight">
            Proven neural solutions
          </h2>
          <p className="text-[#172B36]/70 mb-12 max-w-sm leading-relaxed">
            We partner with industry leaders to deploy bespoke AI agents that solve complex operational hurdles and drive measurable growth.
          </p>

          {/* Dynamic Image Area */}
          <div className="mt-auto relative w-full aspect-[4/3] rounded bg-[#D9E8E2] overflow-hidden shadow-2xl">
            {caseStudies.map((study) => (
              <img
                key={study.id}
                src={study.image}
                alt={study.title}
                loading="lazy"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out ${hovered === study.id ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105'}`}
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
              />
            ))}
            {caseStudies.map((study) => (
              <div
                key={`fallback-${study.id}`}
                className={`absolute inset-0 transition-all duration-1000 ease-out flex flex-col items-center justify-center ${study.fallback.color} ${hovered === study.id ? 'opacity-0 z-0' : 'opacity-100 z-0'}`}
              >
                <div className="text-5xl font-bold opacity-30 mix-blend-multiply tracking-tighter">{study.fallback.logo}</div>
                <div className="absolute inset-0 bg-[#172B36]/5 mix-blend-overlay"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column - List */}
        <div className="flex flex-col justify-end pt-12 lg:pt-0">
          <div className="border-t border-[#172B36]/10">
            {caseStudies.map((study) => (
              <button
                type="button"
                key={study.id}
                onMouseEnter={() => setHovered(study.id)}
                onFocus={() => setHovered(study.id)}
                onClick={() => showToast(`View ${study.title}`)}
                aria-label={`${study.title} — ${study.desc}`}
                title={study.desc}
                className="group w-full text-left border-b border-[#172B36]/10 py-10 flex flex-col md:flex-row md:items-start gap-4 md:gap-12 cursor-pointer hover:bg-[#172B36]/[0.02] transition-colors px-4 -mx-4 rounded-sm bg-transparent"
              >
                <div className="font-mono text-xs text-[#114C5A] pt-2 w-16">// {study.year}</div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-medium mb-2 transition-transform duration-500 ${hovered === study.id ? 'translate-x-2' : ''}`}>{study.title}</h3>
                  <div className={`grid transition-all duration-500 ease-in-out ${hovered === study.id ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                    <p className="text-[#172B36]/70 max-w-md text-sm leading-relaxed overflow-hidden">
                      {study.desc}
                    </p>
                  </div>
                </div>
                <div className="pt-2 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  <ChevronRight className="w-6 h-6 text-[#172B36]/50" />
                </div>
              </button>
            ))}
          </div>
          <div className="mt-12">
            <button
              type="button"
              onClick={() => showToast('More Projects Directory')}
              aria-label="Browse the full case study archive"
              title="Browse 12+ enterprise deployments in the case archive"
              className="btn-hover-arrow inline-flex items-center border border-[#172B36]/20 pl-4 pr-6 py-2 rounded-sm text-sm hover:bg-[#172B36]/5 transition-colors cursor-pointer"
            >
              <span className="mr-4 w-6 h-6 flex items-center justify-center bg-[#172B36] text-[#FFC801] rounded-sm">
                <ChevronRight className="w-3 h-3" />
              </span>
              More Projects
            </button>
            <p className="font-mono text-[11px] text-[#172B36]/55 tracking-wide mt-3 uppercase">
              12+ enterprise case studies &middot; full archive with metrics
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
