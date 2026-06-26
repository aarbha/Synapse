import { NavBar } from '@/components/shared/NavBar';
import { Footer } from '@/components/shared/Footer';
import { Hero } from '@/components/hero/Hero';
import { FeatureSection } from '@/components/features/FeatureSection';
import { PricingSection } from '@/components/pricing/PricingSection';
import { Testimonials } from '@/components/social-proof/Testimonials';

export default function Home() {
  return (
    <main>
      <header role="banner">
        <NavBar />
      </header>

      <section id="hero" aria-label="Synapse — AI Automation Platform">
        <Hero />
      </section>

      <section
        id="features"
        aria-label="Platform features and capabilities"
        className="reveal"
      >
        <FeatureSection />
      </section>

      <section
        id="pricing"
        aria-label="Pricing plans and billing"
        className="reveal"
      >
        <PricingSection />
      </section>

      <section
        id="testimonials"
        aria-label="Customer testimonials and social proof"
        className="reveal"
      >
        <Testimonials />
      </section>

      <footer role="contentinfo">
        <Footer />
      </footer>
    </main>
  );
}
