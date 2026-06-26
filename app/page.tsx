import { NavBar } from '@/components/shared/NavBar';
import { Footer } from '@/components/shared/Footer';
import { PricingSection } from '@/components/pricing/PricingSection';

export default function Home() {
  return (
    <>
      <header role="banner">
        <NavBar />
      </header>

      <main id="tiers" aria-label="Pricing plans and billing">
        <PricingSection />
      </main>

      <Footer />
    </>
  );
}
