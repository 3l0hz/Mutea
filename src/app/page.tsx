import { Header } from '@/components/mutea/Header';
import { Hero } from '@/components/mutea/Hero';
import { HowItWorks } from '@/components/mutea/HowItWorks';
import { InfoSection } from '@/components/mutea/InfoSection';
import { TechSpecs } from '@/components/mutea/TechSpecs';
import { UseCases } from '@/components/mutea/UseCases';
import { ProductOffer } from '@/components/mutea/ProductOffer';
import { Footer } from '@/components/mutea/Footer';
import { WhatsAppButton } from '@/components/mutea/WhatsAppButton';
import { MuteaVideoSection } from '@/components/mutea/MuteaVideoSection';

export default function Home() {
  const VIDEO_URL = "https://exntfmqdonkpbzrlsbww.supabase.co/storage/v1/object/sign/HeroSection/Video%20HEro/Man_holding_Mutea_device_202608042127.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY4MzQ3Ni1lYjFiLTQ0YjUtYmNmZC0zZGZkODM3ZmFmMjAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIZXJvU2VjdGlvbi9WaWRlbyBIRXJvL01hbl9ob2xkaW5nX011dGVhX2RldmljZV8yMDI2MDgwNDIxMjcubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NjM4MDM0NCwiZXhwIjo0OTM5OTgwMzQ0fQ.yupdkHlmYfi2q9WriONBrIutP-a6ElDBYN5CgMzVey0";
  
  const PROMO_VIDEO_URL = "https://exntfmqdonkpbzrlsbww.supabase.co/storage/v1/object/sign/Video%20promo/VIDEO%20PROMO.mp4?token=eyJraWQiOiIyYTY4MzQ3Ni1lYjFiLTQ0YjUtYmNmZC0zZGZkODM3ZmFmMjAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWaWRlbyBwcm9tby9WSURFTyBQUk9NTy5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg3NzU5Mjk1LCJleHAiOjE4MTkyOTUyOTV9.Z56G2xRqB07hucZDfp8ti9-2_YhhBONhVZFsaOafG7E";

  return (
    <main className="min-h-screen bg-background selection:bg-primary/30">
      <Header />
      <Hero />
      <HowItWorks />
      <MuteaVideoSection 
        videoUrl={VIDEO_URL} 
        startTime={0} 
      />
      <InfoSection />
      <TechSpecs />
      <UseCases />
      <MuteaVideoSection 
        videoUrl={PROMO_VIDEO_URL} 
        startTime={0}
        label="MUTEA EN ACCIÓN"
        title={<>CONOCE <span className="text-primary">MUTEA</span> EN ACCIÓN.</>}
        description="Descubre Mutea en funcionamiento y conoce una nueva forma de recuperar tu tranquilidad."
      />
      <ProductOffer />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
