import type { Cycle } from '../lib/pricingMatrix';
import { showToast } from '../lib/toast';

interface BillingToggleProps {
  cycle: Cycle;
  onChange: (cycle: Cycle) => void;
  id?: string;
}

export function BillingToggle({ cycle, onChange, id }: BillingToggleProps) {
  const isAnnual = cycle === 'annual';

  return (
    <div className="inline-flex items-center gap-2.5">
      <button
        type="button"
        onClick={() => {
          onChange('monthly');
          showToast('Billing: Monthly');
        }}
        className={`font-mono text-xs tracking-wider uppercase font-semibold cursor-pointer select-none transition-colors duration-150 ease-out ${
          isAnnual ? 'text-[#172B36]/65 hover:text-[#172B36]' : 'text-[#172B36] font-bold'
        }`}
      >
        Monthly
      </button>

      <button
        type="button"
        role="switch"
        aria-checked={isAnnual}
        aria-label="Toggle annual billing"
        id={id}
        onClick={() => {
          onChange(isAnnual ? 'monthly' : 'annual');
          showToast(`Billing: ${isAnnual ? 'Monthly' : 'Annual'}`);
        }}
        className={`pricing-billing-switch relative w-11 h-6 rounded-full border flex-shrink-0 transition-colors duration-150 ease-out ${
          isAnnual
            ? 'bg-[#172B36] border-[#172B36]'
            : 'bg-[#D9E8E2] border-[#172B36]/10'
        }`}
      >
        <span
          aria-hidden="true"
          className={`pricing-billing-knob absolute top-0.5 left-0.5 w-[18px] h-[18px] rounded-full bg-[#F1F6F4] transition-transform duration-150 ease-out ${
            isAnnual ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>

      <button
        type="button"
        onClick={() => {
          onChange('annual');
          showToast('Billing: Annual');
        }}
        className={`font-mono text-xs tracking-wider uppercase font-semibold cursor-pointer select-none transition-colors duration-150 ease-out ${
          isAnnual ? 'text-[#172B36] font-bold' : 'text-[#172B36]/65 hover:text-[#172B36]'
        }`}
      >
        Annual
      </button>

      <span
        className="font-mono inline-block px-2 py-0.5 rounded-full bg-[#FFC801] text-[#172B36] text-[10px] font-bold tracking-wider uppercase ml-1"
        aria-hidden="true"
      >
        Save 20%
      </span>
    </div>
  );
}
