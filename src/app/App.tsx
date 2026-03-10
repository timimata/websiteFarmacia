import { Suspense, lazy } from 'react';
import { TopInfoBar } from './components/TopInfoBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DeliverySection } from './components/DeliverySection';
import { PopularServices } from './components/PopularServices';
import { InstitutionalSection } from './components/InstitutionalSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

const PromotionsSection = lazy(() =>
  import('./components/PromotionsSection').then((module) => ({ default: module.PromotionsSection })),
);

const TeamSection = lazy(() =>
  import('./components/TeamSection').then((module) => ({ default: module.TeamSection })),
);

const Testimonials = lazy(() =>
  import('./components/Testimonials').then((module) => ({ default: module.Testimonials })),
);

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Skip to content link for keyboard/screen-reader users */}
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-emerald-600 focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
      >
        Ir para o conteúdo
      </a>
      <TopInfoBar />
      <Header />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <PromotionsSection />
        </Suspense>
        <DeliverySection />
        <PopularServices />
        <InstitutionalSection />
        <Suspense fallback={null}>
          <TeamSection />
        </Suspense>
        <ContactSection />
        <Suspense fallback={null}>
          <Testimonials />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}