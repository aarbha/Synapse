export type Currency = 'INR' | 'USD' | 'EUR';
export type Cycle = 'monthly' | 'annual';
export type Tier = 'starter' | 'pro' | 'enterprise';

export interface PriceResult {
  price: number;
  formatted: string;
  perPeriod: string;
  monthlyEquivalent: number;
  monthlyEquivalentFormatted: string;
  annualTotal: number;
  annualTotalFormatted: string;
  savings?: string;
}

export interface PricingConfig {
  baseRates: Record<Tier, number>;
  currencyMultipliers: Record<Currency, number>;
  currencySymbols: Record<Currency, string>;
  currencyLocales: Record<Currency, string>;
  annualDiscountMultiplier: number;
  tiers: Record<Tier, TierMeta>;
  compute: (tier: Tier, currency: Currency, cycle: Cycle) => PriceResult;
}

export interface TierMeta {
  id: Tier;
  name: string;
  tagline: string;
  highlighted: boolean;
  cta: string;
  features: string[];
}

const baseRates: Record<Tier, number> = {
  starter: 19,
  pro: 49,
  enterprise: 149,
};

const currencyMultipliers: Record<Currency, number> = {
  USD: 1,
  EUR: 0.92,
  INR: 83.5,
};

const currencySymbols: Record<Currency, string> = {
  USD: '$',
  EUR: '€',
  INR: '₹',
};

const currencyLocales: Record<Currency, string> = {
  USD: 'en-US',
  EUR: 'de-DE',
  INR: 'en-IN',
};

const annualDiscountMultiplier = 0.8;

const tiers: Record<Tier, TierMeta> = {
  starter: {
    id: 'starter',
    name: 'Starter',
    tagline: 'For individuals and small projects',
    highlighted: false,
    cta: 'Start free trial',
    features: [
      'Up to 3 active workflows',
      '1,000 monthly executions',
      'Core AI models',
      'Community support',
      'Basic analytics dashboard',
    ],
  },
  pro: {
    id: 'pro',
    name: 'Pro',
    tagline: 'For growing teams shipping fast',
    highlighted: true,
    cta: 'Start 14-day trial',
    features: [
      'Unlimited active workflows',
      '50,000 monthly executions',
      'Advanced AI agents + GPT-4 class',
      'Priority support, < 4h response',
      'Real-time analytics + custom reports',
      'Webhooks, REST & gRPC APIs',
      'Team roles & permissions',
    ],
  },
  enterprise: {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'For organizations with scale',
    highlighted: false,
    cta: 'Contact sales',
    features: [
      'Everything in Pro',
      'Unlimited executions',
      'Custom model fine-tuning',
      'Dedicated success manager',
      'SSO, SAML, SCIM provisioning',
      'SOC 2 Type II, HIPAA, GDPR',
      '99.99% uptime SLA',
      'On-prem deployment option',
    ],
  },
};

function format(amount: number, currency: Currency): string {
  const locale = currencyLocales[currency];
  const fractionDigits = currency === 'INR' ? 0 : 0;
  const formatter = new Intl.NumberFormat(locale, {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: fractionDigits,
  });
  const symbol = currencySymbols[currency];
  return `${symbol}${formatter.format(Math.round(amount))}`;
}

function compute(tier: Tier, currency: Currency, cycle: Cycle): PriceResult {
  const baseMonthlyUsd = baseRates[tier];
  const multiplier = currencyMultipliers[currency];

  const monthlyLocal = baseMonthlyUsd * multiplier;

  let billedLocal: number;
  let perPeriod: string;
  let annualTotal: number;
  let savings: string | undefined;

  if (cycle === 'monthly') {
    billedLocal = monthlyLocal;
    perPeriod = '/month';
    annualTotal = monthlyLocal * 12;
  } else {
    const annualFull = monthlyLocal * 12;
    const discounted = annualFull * annualDiscountMultiplier;
    billedLocal = discounted / 12;
    perPeriod = '/month, billed annually';
    annualTotal = discounted;
    const saved = annualFull - discounted;
    savings = `Save ${format(saved, currency)}/year`;
  }

  return {
    price: billedLocal,
    formatted: format(billedLocal, currency),
    perPeriod,
    monthlyEquivalent: billedLocal,
    monthlyEquivalentFormatted: format(billedLocal, currency),
    annualTotal,
    annualTotalFormatted: format(annualTotal, currency),
    savings,
  };
}

export const pricingMatrix: PricingConfig = {
  baseRates,
  currencyMultipliers,
  currencySymbols,
  currencyLocales,
  annualDiscountMultiplier,
  tiers,
  compute,
};

export const TIER_ORDER: Tier[] = ['starter', 'pro', 'enterprise'];
export const CURRENCY_ORDER: Currency[] = ['USD', 'EUR', 'INR'];
