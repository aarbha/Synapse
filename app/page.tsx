import { NavBar } from '@/components/shared/NavBar';
import { Footer } from '@/components/shared/Footer';
import { Hero } from '@/components/hero/Hero';
import { FeatureSection } from '@/components/features/FeatureSection';
import { Journal } from '@/components/journal/Journal';
import { Explorations } from '@/components/explorations/Explorations';
import { Stats } from '@/components/stats/Stats';
import { PricingSection } from '@/components/pricing/PricingSection';
import { Testimonials } from '@/components/social-proof/Testimonials';

export default function Home() {
  return (
    <>
      <header role="banner">
        <NavBar />
      </header>

      <main>
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
          id="journal"
          aria-label="Field notes and capability deep-dives"
          className="reveal"
        >
          <Journal />
        </section>

        <section
          id="explorations"
          aria-label="Visual exploration gallery"
          className="reveal"
        >
          <Explorations />
        </section>

        <section
          id="stats"
          aria-label="Synapse platform statistics"
          className="reveal"
        >
          <Stats />
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
      </main>

      <Footer />
    </>
  );
}
