"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ReservationModal } from './ReservationModal';
import Radar from './Radar';

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-context');
  const productImageUrl = "https://exntfmqdonkpbzrlsbww.supabase.co/storage/v1/object/sign/HeroSection/mutea/signal-2026-07-29-13-00-30-661_004.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY4MzQ3Ni1lYjFiLTQ0YjUtYmNmZC0zZGZkODM3ZmFmMjAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIZXJvU2VjdGlvbi9tdXRlYS9zaWduYWwtMjAyNi0wNy0yOS0xMy0wMC0zMC02NjFfMDA0LnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODUzNjQxNDEsImV4cCI6MTgxNjkwMDE0MX0.nPOhL26lQWxP8V65zGA0_yUb5zAREV87_cYypFl4dqY";

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-24 md:pt-40 overflow-hidden bg-white">
      {/* Background Image with Light Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg?.imageUrl || ''}
          alt="Peaceful context"
          fill
          className="object-cover opacity-5 md:opacity-10 grayscale"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent" />
      </div>

      {/* Radar Animation Layer */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden flex items-center justify-center opacity-30 md:opacity-40">
        <Radar 
          color="#29b8ff" 
          backgroundColor="#ffffff" 
          scale={0.8} 
          sweepSpeed={0.8}
          brightness={1.2}
          falloff={1.8}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        <div className="space-y-6 md:space-y-8 text-center md:text-left order-1 md:order-1">
          <div className="inline-block px-3 py-1 bg-primary/10 rounded-full">
            <span className="text-[9px] md:text-[10px] font-display font-black tracking-widest text-primary uppercase">Tecnología de Silencio</span>
          </div>
          <h1 className="text-4xl xs:text-5xl md:text-7xl font-display font-black leading-[1.1] tracking-tight uppercase">
            El silencio <br className="hidden xs:block md:hidden" /> también es <br className="hidden xs:block md:hidden" /> un <span className="text-primary text-glow">Derecho.</span>
          </h1>
          <p className="text-base md:text-xl text-foreground/60 font-medium leading-relaxed max-w-md mx-auto md:mx-0">
            Recupera tu tranquilidad cuando otros no respetan. Sin complicaciones, solo paz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <ReservationModal 
              trigger={
                <Button variant="mutea" size="xl" className="w-full sm:w-auto">
                  Comprar ahora
                </Button>
              }
            />
          </div>
        </div>

        <div className="relative flex items-center justify-center order-2 md:order-2 mt-4 md:mt-0">
          <div className="absolute w-[90%] h-[90%] bg-primary/10 rounded-full blur-[80px] md:blur-[120px]" />
          <div className="relative z-10 max-w-[280px] xs:max-w-[320px] md:max-w-lg w-full">
            <Image
              src={productImageUrl}
              alt="MUTEA Device"
              width={800}
              height={800}
              unoptimized
              className="w-full h-auto drop-shadow-2xl rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
