import { Reveal } from './Reveal';
import { PricingCards } from './PricingCards';

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="bg-[#F1F6F4] text-[#172B36] py-24 px-6 md:px-12 lg:px-24 border-t border-[#114C5A]/30 relative"
    >
      <Reveal className="max-w-4xl mx-auto flex flex-col items-center text-center gap-4 mb-16">
        <div className="inline-flex items-center gap-3">
          <span aria-hidden="true" className="w-8 h-px bg-[#172B36]/20 inline-block" />
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#172B36]/65 font-medium">
            Pricing
          </span>
        </div>
        <h2 className="font-mono text-[clamp(34px,5vw,56px)] font-bold tracking-tight leading-[1.05] text-[#172B36]">
          Simple, transparent pricing.
          <br />
          <span className="font-mono italic font-medium text-[#FFC801] [text-shadow:0_1px_0_rgba(23,43,54,0.15)]">
            Change currency or billing anytime.
          </span>
        </h2>
        <p className="text-[17px] text-[#172B36]/65 leading-relaxed max-w-[58ch]">
          Every price is computed live from our pricing matrix — no hardcoded numbers.
          Switch between currencies and billing cycles to see real regional rates and
          annual savings.
        </p>
      </Reveal>

      <div className="max-w-6xl mx-auto">
        <PricingCards />
      </div>
    </section>
  );
}
