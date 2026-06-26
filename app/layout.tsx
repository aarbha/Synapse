import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono, Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const SITE_URL = 'https://synapse-ai.vercel.app';
const SITE_NAME = 'Synapse';
const TITLE = 'Synapse — Where workflows interact';
const DESCRIPTION =
  'Premium AI automation platform that orchestrates workflows across your stack. Intelligent agents, real-time analytics, enterprise-grade security.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    'AI automation',
    'workflow automation',
    'artificial intelligence',
    'SaaS platform',
    'AI agents',
    'orchestration',
    'Synapse',
  ],
  authors: [{ name: 'Synapse Team' }],
  creator: 'Synapse',
  publisher: 'Synapse',
  applicationName: SITE_NAME,
  category: 'Technology',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      { url: '/og-image.png', width: 1200, height: 630, alt: 'Synapse — Where workflows interact' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    creator: '@synapse_ai',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: SITE_URL },
  icons: { icon: [{ url: '/svgs/cube-16-solid.svg', type: 'image/svg+xml' }] },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#FFC801',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <body>
        {children}
        <Script id="below-fold-reveal" strategy="lazyOnload">
          {`
            (function () {
              if (typeof window === 'undefined') return;
              if (!('IntersectionObserver' in window)) {
                document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
                return;
              }
              var io = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                  if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    io.unobserve(entry.target);
                  }
                });
              }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
              document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
            })();
          `}
        </Script>
      </body>
    </html>
  );
}