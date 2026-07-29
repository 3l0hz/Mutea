
"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-context');
  const productImg = PlaceHolderImages.find(img => img.id === 'mutea-product-black');

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Image with Light Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg?.imageUrl || ''}
          alt="Peaceful context"
          fill
          className="object-cover opacity-10 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 max-w-xl">
          <div className="inline-block px-3 py-1 bg-primary/10 rounded-full">
            <span className="text-[10px] font-display font-black tracking-widest text-primary uppercase">Tecnología de Silencio</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black leading-tight tracking-tight uppercase">
            El silencio también es un <span className="text-primary text-glow">Derecho.</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/60 font-medium leading-relaxed max-w-md">
            Recupera tu tranquilidad cuando otros no respetan. Sin complicaciones, solo paz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-foreground hover:bg-foreground/90 text-background rounded-none h-16 px-12 text-sm font-display font-bold tracking-[0.2em] uppercase">
              Comprar ahora
            </Button>
          </div>
        </div>

        <div className="relative aspect-square md:scale-110 flex items-center justify-center">
          <div className="absolute w-[80%] h-[80%] bg-primary/10 rounded-full blur-[120px]" />
          <Image
            src={productImg?.imageUrl || ''}
            alt="MUTEA Device"
            width={600}
            height={600}
            className="relative z-10 drop-shadow-2xl grayscale-[0.2]"
          />
        </div>
      </div>
    </section>
  );
}
