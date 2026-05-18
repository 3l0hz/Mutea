
"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-dog');

  return (
    <section className="relative pt-32 pb-12 px-4 max-w-7xl mx-auto">
      <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-white/50 relative">
        <div className="grid md:grid-cols-2 min-h-[600px] items-center">
          <div className="p-10 md:p-16 flex flex-col items-start gap-6 z-10 bg-white/60 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none relative">
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Sparkles className="w-4 h-4" />
              <span>Nuevos lanzamientos inteligentes</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
              Juguetes y gadgets para <span className="text-primary">mascotas felices</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed">
              Productos entretenidos, útiles y especiales diseñados para mejorar la vida de perros y gatos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
              <Button className="h-16 px-10 rounded-full text-lg font-bold group">
                Explorar productos
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="h-16 px-10 rounded-full text-lg font-bold">
                Ver novedades
              </Button>
            </div>
          </div>
          
          <div className="absolute inset-0 md:relative md:h-full h-[600px]">
            <Image
              src={heroImage?.imageUrl || 'https://picsum.photos/seed/paw/800/800'}
              alt={heroImage?.description || 'Happy dog'}
              fill
              className="object-cover"
              priority
              data-ai-hint="dog lifestyle"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
