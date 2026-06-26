import React, { useRef } from 'react';
import { Lock, Layers, Server, Database, Plus, Settings, Box } from 'lucide-react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Reveal } from './Reveal';

const Word = ({ children, progress, range }: { children: string, progress: MotionValue<number>, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }}>{children}</motion.span>
  );
};

function ScrollRevealText({ children, className }: { children: string, className?: string }) {
  const targetRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 85%", "end 50%"]
  });

  const words = children.split(/(\s+)/);
  const totalWords = words.filter(w => w.trim() !== '').length;
  let wordIndex = 0;

  return (
    <h2 ref={targetRef} className={className}>
      {words.map((word, i) => {
        if (word.trim() === '') {
          return <span key={i}>{word}</span>;
        }
        const start = wordIndex / totalWords;
        const end = start + (1 / totalWords);
        wordIndex++;
        
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        )
      })}
    </h2>
  );
}

export function Features() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-[#114C5A] relative bg-black">
      <div className="max-w-4xl mb-24">
        <Reveal>
          <div className="flex items-center gap-4 mb-8 text-[#114C5A]">
            <div className="p-2 border border-[#114C5A] rounded-sm bg-black"><Plus className="w-4 h-4 text-[#FFC801]" /></div>
            <div className="p-2 border border-[#114C5A] rounded-sm bg-black"><Settings className="w-4 h-4 text-[#FFC801]" /></div>
            <div className="p-2 border border-[#114C5A] rounded-sm bg-black"><Box className="w-4 h-4 text-[#FFC801]" /></div>
          </div>
          <ScrollRevealText className="text-3xl md:text-5xl font-medium leading-tight mb-8 text-[#F1F6F4]">
            Integrate with the world's most powerful neural engines. Seamlessly connect your custom data to GPT-4, Claude 3, and Perplexity for unmatched precision. Build agents that don't just process, they understand.
          </ScrollRevealText>
          <p className="text-[#D9E8E2]/70 text-lg">
            Unlock the full potential of LLM-native workflows. Our infrastructure ensures low latency and high-fidelity output for every request.
          </p>
        </Reveal>
      </div>

      <Reveal stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-l border-[#114C5A] bg-black">
        {[
          { icon: Lock, title: "Secure Guard", desc: "We fortify your AI deployments with robust security protocols. Our team ensures every model adheres to strict data privacy standards." },
          { icon: Layers, title: "Agent Build", desc: "Tailored AI agents designed for your specific needs. We develop custom logic and workflows that integrate deeply with your existing tools." },
          { icon: Server, title: "Cloud Scale", desc: "Infrastructure optimization for high-traffic AI apps. We ensure your systems remain fast, responsive, and ready for any level of demand." },
          { icon: Database, title: "Data Mining", desc: "Transform raw information into actionable intelligence. We build the pipelines and vector stores that power your organization's future." }
        ].map((feat, i) => (
          <div key={i} className="p-8 border-b border-r border-[#114C5A] hover:bg-[#114C5A]/10 hover-glow transition-all duration-300 group cursor-pointer relative overflow-hidden">
            <feat.icon className="w-8 h-8 mb-6 text-[#114C5A] group-hover:text-[#FFC801] group-hover:-translate-y-1 transition-all duration-300" strokeWidth={1.5} />
            <h3 className="text-lg font-medium mb-3 text-[#F1F6F4]">{feat.title}</h3>
            <p className="text-[#D9E8E2]/70 text-sm leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

