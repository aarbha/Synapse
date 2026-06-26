interface IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
  'aria-hidden'?: boolean;
}

const baseProps = (size: number, className?: string, rest: Record<string, string | boolean | undefined> = {}) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  className,
  ...rest,
});

export function CheckIcon({ size = 18, className, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, className, rest as Record<string, string | boolean | undefined>)} stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-label={rest['aria-label'] ?? 'Included'}>
      <path d="M5 12.5L10 17.5L19 7" />
    </svg>
  );
}

export function StarIcon({ size = 14, className, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, className, rest as Record<string, string | boolean | undefined>)} fill="currentColor" aria-label={rest['aria-label'] ?? 'Star'}>
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  );
}

export function MenuIcon({ size = 22, className, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, className, rest as Record<string, string | boolean | undefined>)} stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
      <path d="M4 7H20M4 12H20M4 17H20" />
    </svg>
  );
}

export function ArrowRightIcon({ size = 16, className, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, className, rest as Record<string, string | boolean | undefined>)} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12H19M19 12L13 6M19 12L13 18" />
    </svg>
  );
}

export function QuoteIcon({ size = 32, className, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, className, rest as Record<string, string | boolean | undefined>)} fill="currentColor" aria-hidden="true">
      <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z" />
    </svg>
  );
}

export function GitHubIcon({ size = 18, className, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, className, rest as Record<string, string | boolean | undefined>)} fill="currentColor" aria-label={rest['aria-label'] ?? 'GitHub'}>
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.4 9.4 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

export function XIcon({ size = 18, className, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, className, rest as Record<string, string | boolean | undefined>)} fill="currentColor" aria-label={rest['aria-label'] ?? 'X'}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817-5.964 6.817H1.68l7.73-8.835L1.254 2.25h6.83l4.713 6.231 5.447-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
    </svg>
  );
}

export function DiscordIcon({ size = 18, className, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, className, rest as Record<string, string | boolean | undefined>)} fill="currentColor" aria-label={rest['aria-label'] ?? 'Discord'}>
      <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.35 16.35 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09a.1.1 0 0 0-.07-.03c-1.5.26-2.93.71-4.27 1.33a.07.07 0 0 0-.03.03C2.36 9.79 1.7 14.14 2.01 18.44a.08.08 0 0 0 .03.05 19.9 19.9 0 0 0 5.99 3.03.08.08 0 0 0 .08-.03c.46-.63.87-1.3 1.22-2a.08.08 0 0 0-.04-.11c-.65-.25-1.27-.55-1.87-.89a.08.08 0 0 1-.01-.13l.15-.12a.07.07 0 0 1 .07-.01c3.92 1.79 8.16 1.79 12.03 0a.07.07 0 0 1 .08.01l.15.12a.08.08 0 0 1-.01.13c-.6.34-1.22.64-1.87.89a.08.08 0 0 0-.04.11c.36.71.77 1.38 1.22 2a.08.08 0 0 0 .08.04 19.84 19.84 0 0 0 6-3.03.08.08 0 0 0 .03-.05c.37-4.98-.62-9.3-3.14-13.08a.06.06 0 0 0-.03-.03ZM8.52 15.91c-1.18 0-2.16-1.08-2.16-2.41 0-1.33.96-2.41 2.16-2.41 1.21 0 2.18 1.09 2.16 2.41 0 1.33-.96 2.41-2.16 2.41Zm7.97 0c-1.18 0-2.16-1.08-2.16-2.41 0-1.33.96-2.41 2.16-2.41 1.21 0 2.18 1.09 2.16 2.41 0 1.33-.95 2.41-2.16 2.41Z" />
    </svg>
  );
}

export function LogoMark({ size = 28, className, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={rest['aria-label'] ?? 'Synapse logo'}
      fill="currentColor"
    >
      <path d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z" />
    </svg>
  );
}
