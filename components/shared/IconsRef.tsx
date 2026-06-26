interface PkgIconProps {
  src: string;
  size?: number;
  className?: string;
  alt: string;
}

export function PkgIcon({ src, size = 24, className, alt }: PkgIconProps) {
  return (
    <img
      src={src}
      width={size}
      height={size}
      alt={alt}
      aria-label={alt}
      role="img"
      className={className}
      style={{ color: 'currentColor' }}
    />
  );
}