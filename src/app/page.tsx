import { Header } from '@/components/mutea/Header';
import { Hero } from '@/components/mutea/Hero';
import { InfoSection } from '@/components/mutea/InfoSection';
import { TechSpecs } from '@/components/mutea/TechSpecs';
import { Benefits } from '@/components/mutea/Benefits';
import { UseCases } from '@/components/mutea/UseCases';
import { ProductOffer } from '@/components/mutea/ProductOffer';
import { ContactForm } from '@/components/mutea/ContactForm';
import { Usage } from '@/components/mutea/Usage';
import { Footer } from '@/components/mutea/Footer';
import { WhatsAppButton } from '@/components/mutea/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30">
      <Header />
      <Hero />
      <InfoSection />
      <TechSpecs />
      <Benefits />
      <UseCases />
      <Usage />
      <ContactForm />
      <ProductOffer />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
