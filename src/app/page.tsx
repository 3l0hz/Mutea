
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/home/Hero';
import { Categories } from '@/components/home/Categories';
import { ProductGrid } from '@/components/home/ProductGrid';
import { ValueProps } from '@/components/home/ValueProps';
import { PetDiscovery } from '@/components/ai/PetDiscovery';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Categories />
        <ValueProps />
        <ProductGrid />
        
        {/* Novedades Section (Simplified as an AI tool for discovery) */}
        <PetDiscovery />
        
        {/* Branding/Quote Section */}
        <section className="py-24 px-4 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground/20 leading-tight">
            Diseñamos experiencias modernas para dueños que aman ver a sus mascotas felices.
          </h2>
        </section>
      </main>

      <Footer />
    </div>
  );
}
