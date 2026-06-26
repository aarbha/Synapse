import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono, Inter } from 'next/font/google';
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
const TITLE = 'Synapse — Pricing';
const DESCRIPTION =
  'Simple, transparent pricing for Synapse. Choose Starter, Pro, or Enterprise — billed monthly or annually, in USD, EUR, or INR.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    'Synapse pricing',
    'AI automation pricing',
    'workflow automation cost',
    'SaaS pricing',
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
      { url: '/og-image.png', width: 1200, height: 630, alt: 'Synapse — Pricing' },
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
      <body>{children}</body>
    </html>
  );
}
