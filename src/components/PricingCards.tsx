import { useCallback, useEffect, useRef, useState } from 'react';
import {
  pricingMatrix,
  TIER_ORDER,
  type Currency,
  type Cycle,
  type Tier,
} from '../lib/pricingMatrix';
import { CurrencySwitcher } from './CurrencySwitcher';
import { BillingToggle } from './BillingToggle';
import { showToast } from '../lib/toast';

interface TierRefs {
  price: HTMLSpanElement | null;
  period: HTMLSpanElement | null;
  savings: HTMLSpanElement | null;
  savingsWrap: HTMLParagraphElement | null;
}

export function PricingCards() {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [cycle, setCycle] = useState<Cycle>('monthly');

  const refs = useRef<Record<Tier, TierRefs>>({
    starter: { price: null, period: null, savings: null, savingsWrap: null },
    pro: { price: null, period: null, savings: null, savingsWrap: null },
    enterprise: { price: null, period: null, savings: null, savingsWrap: null },
  });

  const updateAllPrices = useCallback(() => {
    TIER_ORDER.forEach((tier) => {
      const result = pricingMatrix.compute(tier, currency, cycle);
      const r = refs.current[tier];
      if (r.price) r.price.textContent = result.formatted;
      if (r.period) r.period.textContent = result.perPeriod;
      if (r.savings && r.savingsWrap) {
        if (result.savings) {
          r.savings.textContent = result.savings;
          r.savingsWrap.classList.remove('pricing-savings-hidden');
        } else {
          r.savingsWrap.classList.add('pricing-savings-hidden');
        }
      }
    });
  }, [currency, cycle]);

  useEffect(() => {
    updateAllPrices();
  }, [updateAllPrices]);

  return (
    <div className="flex flex-col gap-14">
      {/* Controls — toggle + currency */}
      <div className="pricing-controls flex flex-col gap-4 items-center">
        <BillingToggle cycle={cycle} onChange={setCycle} id="billing-cycle" />
        <CurrencySwitcher currency={currency} onChange={setCurrency} id="currency" />
      </div>

      {/* Tier grid */}
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 md:items-stretch">
        {TIER_ORDER.map((tierId) => {
          const tier = pricingMatrix.tiers[tierId];
          const initial = pricingMatrix.compute(tierId, currency, cycle);
          const isFeatured = tier.highlighted;

          return (
            <li
              key={tierId}
              className={`pricing-card group relative flex flex-col gap-5 p-8 rounded-2xl border transition-all duration-200 ease-out isolate ${
                isFeatured
                  ? 'bg-[#F1F6F4] border-[#FFC801] md:-translate-y-2 shadow-[0_24px_48px_-24px_rgba(255,200,1,0.45)] hover:-translate-y-3'
                  : 'bg-[#D9E8E2] border-[#172B36]/10 hover:-translate-y-1'
              }`}
            >
              {/* Gradient border ring (hover) */}
              <span
                aria-hidden="true"
                className="pricing-card-ring absolute -inset-0.5 -z-10 rounded-[calc(1rem+2px)] bg-gradient-to-br from-[#FFC801] to-[#FF9932] opacity-0 transition-opacity duration-200 ease-out pointer-events-none"
              />

              {isFeatured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#FFC801] text-[#172B36] font-mono text-[10px] font-bold tracking-widest uppercase whitespace-nowrap">
                  Most popular
                </span>
              )}

              <h3 className="font-mono text-2xl font-bold tracking-tight text-[#172B36]">
                {tier.name}
              </h3>
              <p className="text-[13px] text-[#172B36]/65 leading-relaxed min-h-[2.6em]">
                {tier.tagline}
              </p>

              <div className="flex items-baseline flex-wrap gap-1.5 mt-3">
                <span
                  ref={(el) => { refs.current[tierId].price = el; }}
                  className="font-mono text-5xl font-extrabold tracking-tight leading-none text-[#172B36]"
                >
                  {initial.formatted}
                </span>
                <span
                  ref={(el) => { refs.current[tierId].period = el; }}
                  className="text-[13px] text-[#172B36]/65 font-medium"
                >
                  {initial.perPeriod}
                </span>
              </div>

              <p
                ref={(el) => { refs.current[tierId].savingsWrap = el; }}
                className={`pricing-savings-wrap -mt-2 mb-1 min-h-[22px] ${
                  initial.savings ? '' : 'pricing-savings-hidden'
                }`}
              >
                <span
                  ref={(el) => { refs.current[tierId].savings = el; }}
                  role="status"
                  aria-live="polite"
                  className="font-mono inline-block px-2.5 py-1 rounded-full bg-[#172B36] border border-[#172B36] text-[#FFC801] text-[10px] font-bold tracking-widest uppercase"
                >
                  {initial.savings ?? ''}
                </span>
              </p>

              <button
                type="button"
                onClick={() => showToast(`${tier.name}: ${tier.cta}`)}
                className={`font-mono w-full mt-2 inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl text-[13px] font-semibold tracking-wider uppercase cursor-pointer transition-all duration-200 ease-out ${
                  isFeatured
                    ? 'bg-[#FFC801] text-[#172B36] border border-[#FFC801] hover:bg-[#FF9932] hover:border-[#FF9932] hover:-translate-y-px hover:shadow-[0_8px_24px_-8px_rgba(255,200,1,0.45)]'
                    : 'bg-[#172B36] text-[#F1F6F4] border border-[#172B36] hover:bg-[#114C5A] hover:border-[#114C5A] hover:-translate-y-px'
                }`}
              >
                {tier.cta}
              </button>

              <ul className="flex flex-col gap-3 mt-2 pt-6 border-t border-[#172B36]/10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-[13px] text-[#172B36] leading-relaxed">
                    <span
                      aria-hidden="true"
                      className="flex-shrink-0 inline-flex items-center justify-center w-[18px] h-[18px] mt-px rounded-full bg-[#172B36] text-[#FFC801] text-[11px] font-bold leading-none"
                    >
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
