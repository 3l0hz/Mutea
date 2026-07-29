
"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-context');
  const productImg = PlaceHolderImages.find(img => img.id === 'mutea-product-black');

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg?.imageUrl || ''}
          alt="Peaceful context"
          fill
          className="object-cover opacity-40 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 max-w-xl">
          <h1 className="text-5xl md:text-8xl font-black leading-none tracking-tighter uppercase italic">
            El silencio también es un <span className="text-primary text-glow">Derecho.</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 font-light max-w-md">
            Recupera tu tranquilidad cuando otros no respetan. Sin complicaciones, solo paz.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-none h-16 px-12 text-lg font-bold tracking-[0.2em] uppercase">
            Comprar ahora
          </Button>
        </div>

        <div className="relative aspect-square md:scale-125">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
          <Image
            src={productImg?.imageUrl || ''}
            alt="MUTEA Device"
            width={600}
            height={600}
            className="relative z-10 drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]"
          />
        </div>
      </div>
    </section>
  );
}
