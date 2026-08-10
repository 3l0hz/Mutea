
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
import { MuteaVideoSection } from '@/components/mutea/MuteaVideoSection';

export default function Home() {
  const VIDEO_URL = "https://exntfmqdonkpbzrlsbww.supabase.co/storage/v1/object/sign/HeroSection/Video%20HEro/Man_holding_Mutea_device_202608042127.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY4MzQ3Ni1lYjFiLTQ0YjUtYmNmZC0zZGZkODM3ZmFmMjAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIZXJvU2VjdGlvbi9WaWRlbyBIRXJvL01hbl9ob2xkaW5nX011dGVhX2RldmljZV8yMDI2MDgwNDIxMjcubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NjM4MDM0NCwiZXhwIjo0OTM5OTgwMzQ0fQ.yupdkHlmYfi2q9WriONBrIutP-a6ElDBYN5CgMzVey0";
  
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30">
      <Header />
      <Hero />
      <MuteaVideoSection 
        videoUrl={VIDEO_URL} 
        startTime={0} 
      />
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
