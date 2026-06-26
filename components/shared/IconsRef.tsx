export {
  CheckIcon,
  StarIcon,
  MenuIcon,
  ArrowRightIcon,
  QuoteIcon,
  GitHubIcon,
  XIcon,
  DiscordIcon,
  LogoMark,
} from './Icons';

export function PkgIcon({
  src,
  size = 24,
  className,
  alt,
}: {
  src: string;
  size?: number;
  className?: string;
  alt: string;
}) {
  return (
    <img
      src={src}
      width={size}
      height={size}
      alt={alt}
      className={className}
      aria-label={alt}
      role="img"
      style={{ color: 'currentColor' }}
    />
  );
}

export function XMarkSvg({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <img
      src="/svgs/x-mark.svg"
      width={size}
      height={size}
      alt=""
      aria-hidden="true"
      className={className}
    />
  );
}
