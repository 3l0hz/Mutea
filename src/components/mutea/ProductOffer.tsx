
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ProductOffer() {
  const [variant, setVariant] = useState('Negro');
  const [includeUpsell, setIncludeUpsell] = useState(false);
  const blackImg = PlaceHolderImages.find(img => img.id === 'mutea-product-black');
  const whiteImg = PlaceHolderImages.find(img => img.id === 'mutea-product-white');

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto border border-slate-200 rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/50">
        <div className="grid md:grid-cols-2">
          <div className="p-12 md:p-20 relative bg-slate-50 flex items-center justify-center min-h-[500px]">
            <Image
              src={variant === 'Negro' ? blackImg?.imageUrl || '' : whiteImg?.imageUrl || ''}
              alt="Mutea product"
              width={500}
              height={500}
              className="object-contain drop-shadow-2xl grayscale-[0.1]"
            />
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
                  {['Negro', 'Blanco/Beige'].map(v => (
                    <button
                      key={v}
                      onClick={() => setVariant(v)}
                      className={cn(
                        "flex-1 py-4 border-2 font-display font-bold uppercase text-[10px] tracking-widest transition-all",
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
                  "p-6 border-2 cursor-pointer transition-all flex items-center justify-between",
                  includeUpsell ? "border-primary bg-primary/5" : "border-slate-100 hover:border-slate-200"
                )}
              >
                <div className="flex items-center gap-4">
                  <div className={cn("w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all", includeUpsell ? "bg-primary border-primary" : "border-slate-200")}>
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
