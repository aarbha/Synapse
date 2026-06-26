import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Stats } from './components/Stats';
import { ShowcaseCards } from './components/ShowcaseCards';
import { CaseStudies } from './components/CaseStudies';
import { BuildLogic } from './components/BuildLogic';
import { TabsSection } from './components/TabsSection';
import { FAQSection } from './components/FAQSection';
import { PricingSection } from './components/PricingSection';
import { BackgroundVideo } from './components/BackgroundVideo';
import { Footer } from './components/Footer';
import { BongoCat } from './components/BongoCat';
import { Toast } from './components/Toast';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-[#FFC801]/30 selection:text-white flex flex-col relative">
      <BackgroundVideo />
      <div className="relative z-10 flex flex-col flex-1">
        <Header />
        <main className="flex-1">
          <Hero />
          <Features />
          <Stats />
          <ShowcaseCards />
          <CaseStudies />
          <BuildLogic />
          <TabsSection />
          <FAQSection />
          <PricingSection />
          <BongoCat />
        </main>
        <Footer />
        <Toast />
      </div>
    </div>
  );
}
