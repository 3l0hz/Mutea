
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const GALLERIES = {
  'Blanco': [
    "https://exntfmqdonkpbzrlsbww.supabase.co/storage/v1/object/sign/HeroSection/mutea%20white/atras%20costado%20white.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY4MzQ3Ni1lYjFiLTQ0YjUtYmNmZC0zZGZkODM3ZmFmMjAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIZXJvU2VjdGlvbi9tdXRlYSB3aGl0ZS9hdHJhcyBjb3N0YWRvIHdoaXRlLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODU0MzYzNDksImV4cCI6MTgxNjk3MjM4ND0.WfsKLMEvQnBdyOp5KB1H6kvWoteivzCChcABsy5NwYU",
    "https://exntfmqdonkpbzrlsbww.supabase.co/storage/v1/object/sign/HeroSection/mutea%20white/frente%20costado%20white.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY4MzQ3Ni1lYjFiLTQ0YjUtYmNmZC0zZGZkODM3ZmFmMjAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIZXJvU2VjdGlvbi9tdXRlYSB3aGl0ZS9mcmVudGUgY29zdGFkbyB3aGl0ZS5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg1NDM2MzY2LCJleHAiOjE4MTY5NzIzNjZ9.SRJS-W21OinRPEOZ-c8i8jPg-QvcxrEupRKGq7sUg2c",
    "https://exntfmqdonkpbzrlsbww.supabase.co/storage/v1/object/sign/HeroSection/mutea%20white/Frente%20white%20(2).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY4MzQ3Ni1lYjFiLTQ0YjUtYmNmZC0zZGZkODM3ZmFmMjAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIZXJvU2VjdGlvbi9tdXRlYSB3aGl0ZS9GcmVudGUgd2hpdGUgKDIpLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODU0MzYzODQsImV4cCI6MTgxNjk3MjM4NH0.kEPbkSViLgZymmQ0PVb6r2ES3zCftdQq788wwYC1BPo",
    "https://exntfmqdonkpbzrlsbww.supabase.co/storage/v1/object/sign/HeroSection/mutea%20white/atras%20white.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY4MzQ3Ni1lYjFiLTQ0YjUtYmNmZC0zZGZkODM3ZmFmMjAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIZXJvU2VjdGlvbi9tdXRlYSB3aGl0ZS9hdHJhcyB3aGl0ZS5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg1NDM2MzkxLCJleHAiOjE4MTY5NzIzOTEf.gnkikBzW7fJKCyCaa5n0bxlMQtiByUf3Zy-dSV0xV14"
  ],
  'Negro': [
    "https://exntfmqdonkpbzrlsbww.supabase.co/storage/v1/object/sign/HeroSection/mutea%20black/Costado%20atras.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY4MzQ3Ni1lYjFiLTQ0YjUtYmNmZC0zZGZkODM3ZmFmMjAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIZXJvU2VjdGlvbi9tdXRlYSBibGFjay9Db3N0YWRvIGF0cmFzLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODU0MzY0MTMsImV4cCI6MTgxNjk3MjQxM30.lreJtTnoy26UMFj2MrgO39GGNqjtM4DTNczpdNXE4q0",
    "https://exntfmqdonkpbzrlsbww.supabase.co/storage/v1/object/sign/HeroSection/mutea%20black/Costado%20adelante.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY4MzQ3Ni1lYjFiLTQ0YjUtYmNmZC0zZGZkODM3ZmFmMjAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIZXJvU2VjdGlvbi9tdXRlYSBibGFjay9Db3N0YWRvIGFkZWxhbnRlLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODU0MzY0MjEsImV4cCI6MTgxNjk3MjQyMX0.PhjyXcNIGnpBt2DYo_EcWt_RYTwuup0OVltElYLnlho",
    "https://exntfmqdonkpbzrlsbww.supabase.co/storage/v1/object/sign/HeroSection/mutea%20black/frente.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY4MzQ3Ni1lYjFiLTQ0YjUtYmNmZC0zZGZkODM3ZmFmMjAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIZXJvU2VjdGlvbi9tdXRlYSBibGFjay9mcmVudGUucG5nIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NTQzNjQzMCwiZXhwIjoxODE2OTcyNDMwfQ.Is5C732xf0c_sCklPTA1f5A0BWj35HByN9VbJpyJ-2Q",
    "https://exntfmqdonkpbzrlsbww.supabase.co/storage/v1/object/sign/HeroSection/mutea%20black/atras.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY4MzQ3Ni1lYjFiLTQ0YjUtYmNmZC0zZGZkODM3ZmFmMjAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIZXJvU2VjdGlvbi9tdXRlYSBibGFjay9hdHJhcy5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg1NDM2NDM4LCJleHAiOjE4MTY5NzI0Mzh9.xRsXOL0vBqVV0LnPUqQIhstgthV70CreQq7xHhzkYhs"
  ]
};

export function ProductOffer() {
  const [variant, setVariant] = useState<'Blanco' | 'Negro'>('Blanco');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [includeUpsell, setIncludeUpsell] = useState(false);

  // Al cambiar la variante, reseteamos el índice de la imagen activa
  useEffect(() => {
    setActiveImageIndex(0);
  }, [variant]);

  const currentGallery = GALLERIES[variant];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto border border-slate-200 rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/50">
        <div className="grid md:grid-cols-2">
          {/* Lado izquierdo con Galería Dinámica */}
          <div className="p-8 md:p-12 relative bg-slate-50 flex flex-col items-center justify-center min-h-[600px] gap-8">
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
            <div className="grid grid-cols-4 gap-3 w-full max-w-sm">
              {currentGallery.map((url, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={cn(
                    "relative aspect-square rounded-xl overflow-hidden border-2 transition-all",
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

          <div className="p-12 md:p-20 flex flex-col justify-center space-y-10">
            <div>
              <span className="text-primary font-display font-black tracking-[0.3em] uppercase text-[10px]">Edición Limitada</span>
              <h2 className="text-5xl font-display font-black uppercase tracking-tight mt-2">MUTEA Pro</h2>
              <div className="flex items-baseline gap-4 mt-8">
                <span className="text-6xl font-display font-black tracking-tighter">$79.990</span>
                <span className="text-foreground font-display font-bold uppercase text-[9px] px-3 py-1 bg-slate-100 rounded-full">Oferta Lanzamiento</span>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-[10px] font-display font-black uppercase tracking-widest text-foreground/40 mb-4">Color del Case</p>
                <div className="flex gap-4">
                  {(['Blanco', 'Negro'] as const).map(v => (
                    <button
                      key={v}
                      onClick={() => setVariant(v)}
                      className={cn(
                        "flex-1 py-4 border-2 font-display font-bold uppercase text-[10px] tracking-widest transition-all rounded-none",
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
                  "p-6 border-2 cursor-pointer transition-all flex items-center justify-between group rounded-none",
                  includeUpsell ? "border-primary bg-primary/5" : "border-slate-100 hover:border-slate-200"
                )}
              >
                <div className="flex items-center gap-4">
                  <div className={cn("w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all", includeUpsell ? "bg-primary border-primary" : "border-slate-200 group-hover:border-slate-300")}>
                    {includeUpsell && <Check className="w-4 h-4 text-white" />}
                  </div>
                  <div>
                    <p className="font-display font-black uppercase text-[10px] tracking-widest">+ Pack Energía</p>
                    <p className="text-xs text-foreground/50 font-medium">Batería 20k mAh + Cable premium</p>
                  </div>
                </div>
                <span className="font-display font-black text-primary">+$10.000</span>
              </div>
            </div>

            <Button className="w-full h-24 bg-foreground hover:bg-foreground/90 text-background rounded-none text-xl font-display font-black uppercase tracking-[0.3em] shadow-xl shadow-foreground/20">
              Reservar ahora
            </Button>
            
            <p className="text-center text-[10px] font-display font-bold text-foreground/30 uppercase tracking-[0.2em]">
              Sin contratos. Sin configuraciones. Solo paz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
