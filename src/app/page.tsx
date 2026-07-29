import { Header } from '@/components/mutea/Header';
import { Hero } from '@/components/mutea/Hero';
import { InfoSection } from '@/components/mutea/InfoSection';
import { Benefits } from '@/components/mutea/Benefits';
import { UseCases } from '@/components/mutea/UseCases';
import { ProductOffer } from '@/components/mutea/ProductOffer';
import { Usage } from '@/components/mutea/Usage';
import { Footer } from '@/components/mutea/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30">
      <Header />
      <Hero />
      <InfoSection />
      <Benefits />
      <UseCases />
      <ProductOffer />
      <Usage />
      <Footer />
    </main>
  );
}
