import { CURRENCY_ORDER, type Currency } from '../lib/pricingMatrix';
import { showToast } from '../lib/toast';

interface CurrencySwitcherProps {
  currency: Currency;
  onChange: (currency: Currency) => void;
  id?: string;
}

export function CurrencySwitcher({ currency, onChange, id }: CurrencySwitcherProps) {
  const activeIndex = CURRENCY_ORDER.indexOf(currency);

  return (
    <div
      role="radiogroup"
      aria-label="Display prices in"
      id={id}
      className="pricing-currency relative inline-flex p-1 border border-[#172B36]/10 rounded-full bg-[#D9E8E2]"
    >
      {CURRENCY_ORDER.map((cur) => {
        const isActive = currency === cur;
        return (
          <button
            key={cur}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => {
              onChange(cur);
              showToast(`Currency: ${cur}`);
            }}
            className={`relative z-10 px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase transition-colors duration-150 ease-out font-mono ${
              isActive
                ? 'text-[#F1F6F4]'
                : 'text-[#172B36]/65 hover:text-[#172B36]'
            }`}
          >
            {cur}
          </button>
        );
      })}
      <span
        aria-hidden="true"
        className="pricing-currency-indicator absolute z-0 top-1 left-1 rounded-full bg-[#172B36] pointer-events-none"
        style={{ transform: `translateX(${activeIndex * 100}%)` }}
      />
    </div>
  );
}
