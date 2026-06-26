export const BREAKPOINTS = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
} as const;

export const MOBILE_BREAKPOINT = 768;

export interface Feature {
  id: string;
  title: string;
  short: string;
  long: string;
  icon: string;          // path inside /svgs (package)
  span: 'sm' | 'md' | 'lg';
}

export const FEATURES: Feature[] = [
  {
    id: 'agents',
    title: 'Autonomous agents',
    short: 'Drop in agents that reason, plan, and act across your tools.',
    long:
      'Synapse agents read context from any connected app, decompose goals into steps, and execute them with guardrails. You write the intent — they handle the orchestration, retries, and human-in-the-loop checkpoints.',
    icon: '/svgs/cube-16-solid.svg',
    span: 'lg',
  },
  {
    id: 'realtime',
    title: 'Real-time stream',
    short: 'Sub-second triggers from webhooks, queues, and event buses.',
    long:
      'Connect Kafka, NATS, Pub/Sub, or plain webhooks. Synapse scales horizontally to absorb spikes and backpressures gracefully when downstream slows.',
    icon: '/svgs/arrow-path.svg',
    span: 'sm',
  },
  {
    id: 'observability',
    title: 'Built-in observability',
    short: 'Trace every step. Replay any run. Debug at warp speed.',
    long:
      'Every workflow execution produces a structured trace, token-level cost breakdown, and replayable timeline. Ship agents with confidence — you always know what they did and why.',
    icon: '/svgs/arrow-trending-up.svg',
    span: 'sm',
  },
  {
    id: 'security',
    title: 'Enterprise security',
    short: 'SOC 2, HIPAA, GDPR, BYOK encryption, on-prem option.',
    long:
      'Field-level encryption, customer-managed keys via AWS KMS or GCP, and granular RBAC. Compliance is the default, not a paid add-on.',
    icon: '/svgs/cog-8-tooth.svg',
    span: 'sm',
  },
  {
    id: 'integrations',
    title: '120+ integrations',
    short: 'Native connectors for the tools your team already uses.',
    long:
      'Slack, Notion, Linear, GitHub, Salesforce, HubSpot, Snowflake, BigQuery, Postgres, S3, and many more. If we don’t have it, our SDK makes it 20 lines of TypeScript.',
    icon: '/svgs/link-solid.svg',
    span: 'md',
  },
  {
    id: 'models',
    title: 'Model agnostic',
    short: 'Swap between GPT-4, Claude, Gemini, Llama, or your own.',
    long:
      'Route different steps to different models based on cost, latency, and capability. Run evaluations in CI to catch regressions before they hit production.',
    icon: '/svgs/chart-pie.svg',
    span: 'sm',
  },
];

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  accent: 'forsythia' | 'deep-saffron' | 'mystic-mint';
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote:
      'Synapse cut our incident triage time from 14 minutes to 38 seconds. The agent literally reads the alert, pulls context, and pings the right on-call. It feels like cheating.',
    name: 'Maya Okafor',
    role: 'Staff SRE',
    company: 'Lattice',
    accent: 'forsythia',
  },
  {
    id: 't2',
    quote:
      'We replaced four internal tools with one Synapse workflow. Our data team ships pipelines in hours now, not weeks. The observability is what sealed the deal.',
    name: 'Daniel Park',
    role: 'Head of Data',
    company: 'Plaid',
    accent: 'deep-saffron',
  },
  {
    id: 't3',
    quote:
      'I shipped my first production agent in an afternoon. The SDK is the most thoughtful I’ve used — every primitive feels like it was designed by someone who has actually debugged at 3am.',
    name: 'Priya Raman',
    role: 'Founding Engineer',
    company: 'Linear',
    accent: 'mystic-mint',
  },
];

export const TRUSTED_LOGOS: string[] = [
  'Vercel',
  'Linear',
  'Stripe',
  'Notion',
  'Figma',
  'Plaid',
  'Datadog',
  'Cloudflare',
];

export const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#testimonials', label: 'Customers' },
  { href: '#hero', label: 'Changelog' },
] as const;
