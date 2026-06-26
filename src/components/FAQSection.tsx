import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Reveal } from './Reveal';

const processes = [
  { title: "Consultation",                 duration: "Day 1",      desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements." },
  { title: "Research and Strategy Development", duration: "Week 1", desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements." },
  { title: "Implementation",              duration: "Weeks 2-3",  desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements." },
  { title: "Monitoring and Optimization", duration: "Ongoing",    desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements." },
  { title: "Reporting and Communication", duration: "Weekly",     desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements." },
  { title: "Continual Improvement",       duration: "Monthly",    desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements." }
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-black text-[#F1F6F4] py-24 px-6 md:px-12 lg:px-24 border-t border-[#114C5A]">
      <Reveal className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-medium bg-[#FFC801] text-[#172B36] px-4 py-2 rounded-md inline-block">
            Our Working Process
          </h2>
          <p className="text-[#D9E8E2]/70 text-lg md:max-w-md">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>

        <div className="mt-12">
          {processes.map((process, i) => {
            const isOpen = open === i;
            return (
              <div 
                key={i} 
                className={`mb-6 rounded-[30px] border border-b-[4px] overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? 'bg-[#FFC801] text-[#172B36] border-[#FFC801]' 
                    : 'bg-[#0a0a0a] text-[#F1F6F4] border-[#114C5A] hover:border-[#114C5A]/80'
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-label={`${process.title} — ${process.duration}`}
                  title={`${process.title} (${process.duration})`}
                  className="w-full flex items-center justify-between px-6 md:px-10 py-6 md:py-8 text-left cursor-pointer group"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <div className="flex items-center gap-6">
                    <span className="text-4xl md:text-5xl font-medium">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="flex flex-col">
                      <span className="text-xl md:text-2xl font-medium group-hover:translate-x-2 transition-transform duration-300">
                        {process.title}
                      </span>
                      <span className="font-mono text-[10px] tracking-widest uppercase opacity-60 mt-1">
                        {process.duration}
                      </span>
                    </span>
                  </div>
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-[1.5px] flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isOpen ? 'border-[#172B36] bg-[#172B36]/5 text-[#172B36]' : 'border-[#114C5A] bg-[#0a0a0a] text-[#F1F6F4]'
                  }`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className={`px-6 md:px-10 pb-8 pt-2 border-t ${isOpen ? 'border-[#172B36]/20' : 'border-[#114C5A]'}`}>
                      <p className={`text-lg leading-relaxed ${isOpen ? 'text-[#172B36]/80' : 'text-[#D9E8E2]/70'}`}>
                        {process.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}


