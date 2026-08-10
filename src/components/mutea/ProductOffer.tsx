"use client";

import * as React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ReservationModal } from './ReservationModal';

const GALLERIES = {
  'Blanco': [
    "https://exntfmqdonkpbzrlsbww.supabase.co/storage/v1/object/sign/HeroSection/mutea%20white/atras%20costado%20white.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY4MzQ3Ni1lYjFiLTQ0YjUtYmNmZC0zZGZkODM3ZmFmMjAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIZXJvU2VjdGlvbi9tdXRlYSB3aGl0ZS9hdHJhcyBjb3N0YWRvIHdoaXRlLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODU0MzYzNDksImV4cCI6MTgxNjk3MjM0OX0.WfsKLMEvQnBdyOp5KB1H6kvWoteivzCChcABsy5NwYU",
    "https://exntfmqdonkpbzrlsbww.supabase.co/storage/v1/object/sign/HeroSection/mutea%20white/frente%20costado%20white.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY4MzQ3Ni1lYjFiLTQ0YjUtYmNmZC0zZGZkODM3ZmFmMjAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIZXJvU2VjdGlvbi9tdXRlYSB3aGl0ZS9mcmVudGUgY29zdGFkbyB3aGl0ZS5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg1NDM2MzY2LCJleHAiOjE4MTY5NzIzNjZ9.SRJS-W21OinRPEOZ-c8i8jPg-QvcxrEupRKGq7sUg2c",
    "https://exntfmqdonkpbzrlsbww.supabase.co/storage/v1/object/sign/HeroSection/mutea%20white/Frente%20white%20(2).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY4MzQ3Ni1lYjFiLTQ0YjUtYmNmZC0zZGZkODM3ZmFmMjAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIZXJvU2VjdGlvbi9tdXRlYSB3aGl0ZS9GcmVudGUgd2hpdGUgKDIpLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODU0MzYzODQsImV4cCI6MTgxNjk3MjM4NH0.kEPbkSViLgZymmQ0PVb6r2ES3zCftdQq788wwYC1BPo",
    "https://exntfmqdonkpbzrlsbww.supabase.co/storage/v1/object/sign/HeroSection/mutea%20white/atras%20white.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY4MzQ3Ni1lYjFiLTQ0YjUtYmNmZC0zZGZkODM3ZmFmMjAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIZXJvU2VjdGlvbi9tdXRlYSB3aGl0ZS9hdHJhcyB3aGl0ZS5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg1NDM3MDY0LCJleHAiOjE4MTY5NzMwNjR9.Hi1OfLB7LvgqUZY81vrrXbRz8ReVJAzx0xq7JANdVis"
  ],
  'Negro': [
    "https://exntfmqdonkpbzrlsbww.supabase.co/storage/v1/object/sign/HeroSection/mutea%20black/Costado%20atras.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY4MzQ3Ni1lYjFiLTQ0YjUtYmNmZC0zZGZkODM3ZmFmMjAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIZXJvU2VjdGlvbi9tdXRlYSBibGFjay9Db3N0YWRvIGF0cmFzLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODU0MzY0MTMsImV4cCI6MTgxNjk3MjQxM30.lreJtTnoy26UMFj2MrgO39GGNqjtM4DTNczpdNXE4q0",
    "https://exntfmqdonkpbzrlsbww.supabase.co/storage/v1/object/sign/HeroSection/mutea%20black/Costado%20adelante.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY4MzQ3Ni1lYjFiLTQ0YjUtYmNmZC0zZGZkODM3ZmFmMjAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIZXJvU2VjdGlvbi9tdXRlYSBibGFjay9Db3N0YWRvIGFkZWxhbnRlLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODU0MzY0MjEsImV4cCI6MTgxNjk3MjQyMX0.PhjyXcNIGnpBt2DYo_EcWt_RYTwuup0OVltElYLnlho",
    "https://exntfmqdonkpbzrlsbww.supabase.co/storage/v1/object/sign/HeroSection/mutea%20black/frente.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY4MzQ3Ni1lYjFiLTQ0YjUtYmNmZC0zZGZkODM3ZmFmMjAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIZXJvU2VjdGlvbi9tdXRlYSBibGFjay9mcmVudGUucG5nIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NTQzNzE4OSwiZXhwIjoxODE2OTczMTg5fQ.QI9IsRLABdorR0lfhOWkf9kyiCzbBx9fo4kXP0YcCXQ",
    "https://exntfmqdonkpbzrlsbww.supabase.co/storage/v1/object/sign/HeroSection/mutea%20black/atras.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY4MzQ3Ni1lYjFiLTQ0YjUtYmNmZC0zZGZkODM3ZmFmMjAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIZXJvU2VjdGlvbi9tdXRlYSBibGFjay9hdHJhcy5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg1NDM3MDgzLCJleHAiOjE4MTY5NzMwODN9.a4UGP0d9si6EKLHK8nz_B4NmJ-dcqcIT12dES4Oy3o8"
  ]
};

export function ProductOffer() {
  const [variant, setVariant] = useState<'Blanco' | 'Negro'>('Blanco');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [includeUpsell, setIncludeUpsell] = useState(false);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [variant]);

  const currentGallery = GALLERIES[variant];

  return (
    <section className="py-16 md:py-32 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto border border-slate-200 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/50">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Lado izquierdo con Galería Dinámica */}
          <div className="p-6 md:p-12 relative bg-slate-50 flex flex-col items-center justify-center min-h-[400px] md:min-h-[600px] gap-6 md:gap-8">
            <div className="relative w-full aspect-square flex items-center justify-center">
              <Image
                src={currentGallery[activeImageIndex]}
                alt={`MUTEA ${variant} vista ${activeImageIndex + 1}`}
                width={600}
                height={600}
                unoptimized
                className="object-contain drop-shadow-2xl transition-all duration-500 animate-in fade-in zoom-in-95"
              />
            </div>
            
            {/* Thumbnails de la galería */}
            <div className="grid grid-cols-4 gap-2 md:gap-3 w-full max-w-sm">
              {currentGallery.map((url, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={cn(
                    "relative aspect-square rounded-lg md:rounded-xl overflow-hidden border-2 transition-all",
                    activeImageIndex === idx ? "border-primary scale-105 shadow-md" : "border-transparent opacity-60 hover:opacity-100"
                  )}
                >
                  <Image
                    src={url}
                    alt={`Miniatura ${idx + 1}`}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="p-8 md:p-20 flex flex-col justify-center space-y-8 md:space-y-10">
            <div className="text-center md:text-left">
              <span className="text-primary font-display font-black tracking-[0.3em] uppercase text-[9px] md:text-[10px]">Edición Limitada</span>
              <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight mt-2">MUTEA</h2>
              <div className="flex items-baseline justify-center md:justify-start gap-4 mt-6 md:mt-8">
                <span className="text-5xl md:text-6xl font-display font-black tracking-tighter">$79.990</span>
                <span className="text-foreground font-display font-bold uppercase text-[8px] md:text-[9px] px-3 py-1 bg-slate-100 rounded-full">Oferta</span>
              </div>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div>
                <p className="text-[9px] md:text-[10px] font-display font-black uppercase tracking-widest text-foreground/40 mb-3 md:mb-4 text-center md:text-left">Color del Case</p>
                <div className="flex gap-3 md:gap-4">
                  {(['Blanco', 'Negro'] as const).map(v => (
                    <button
                      key={v}
                      onClick={() => setVariant(v)}
                      className={cn(
                        "flex-1 py-3 md:py-4 border-2 font-display font-bold uppercase text-[9px] md:text-[10px] tracking-widest transition-all rounded-none",
                        variant === v ? "border-foreground text-foreground bg-slate-50" : "border-slate-100 text-foreground/30 hover:border-slate-300"
                      )}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              <div 
                onClick={() => setIncludeUpsell(!includeUpsell)}
                className={cn(
                  "p-4 md:p-6 border-2 cursor-pointer transition-all flex items-center justify-between group rounded-none",
                  includeUpsell ? "border-primary bg-primary/5" : "border-slate-100 hover:border-slate-200"
                )}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className={cn("w-5 h-5 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center transition-all", includeUpsell ? "bg-primary border-primary" : "border-slate-200 group-hover:border-slate-300")}>
                    {includeUpsell && <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />}
                  </div>
                  <div>
                    <p className="font-display font-black uppercase text-[9px] md:text-[10px] tracking-widest">+ Pack Energía</p>
                    <p className="text-[10px] md:text-xs text-foreground/50 font-medium line-clamp-1">Batería 20k mAh + Cable premium</p>
                  </div>
                </div>
                <span className="font-display font-black text-primary text-sm md:text-base">+$10.000</span>
              </div>
            </div>

            <ReservationModal 
              initialVariant={variant}
              initialUpsell={includeUpsell}
              trigger={
                <Button className="w-full h-20 md:h-24 bg-foreground hover:bg-foreground/90 text-background rounded-none text-lg md:text-xl font-display font-black uppercase tracking-[0.2em] md:tracking-[0.3em] shadow-xl shadow-foreground/20">
                  Reservar ahora
                </Button>
              }
            />
            
            <p className="text-center text-[9px] md:text-[10px] font-display font-bold text-foreground/30 uppercase tracking-[0.2em]">
              Sin contratos. Sin configuraciones. Solo paz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
