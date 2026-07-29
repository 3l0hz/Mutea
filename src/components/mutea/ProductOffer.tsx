
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ProductOffer() {
  const [variant, setVariant] = useState('Negro');
  const [includeUpsell, setIncludeUpsell] = useState(false);
  const blackImg = PlaceHolderImages.find(img => img.id === 'mutea-product-black');
  const whiteImg = PlaceHolderImages.find(img => img.id === 'mutea-product-white');

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto bg-white/[0.03] border border-white/5 rounded-[3rem] overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="p-12 md:p-20 relative bg-black/20 flex items-center justify-center min-h-[500px]">
            <Image
              src={variant === 'Negro' ? blackImg?.imageUrl || '' : whiteImg?.imageUrl || ''}
              alt="Mutea product"
              width={500}
              height={500}
              className="object-contain drop-shadow-[0_0_50px_rgba(59,130,246,0.2)]"
            />
          </div>

          <div className="p-12 md:p-20 flex flex-col justify-center space-y-10">
            <div>
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm">Edición Limitada</span>
              <h2 className="text-5xl font-black uppercase tracking-tight mt-2">MUTEA Pro</h2>
              <div className="flex items-baseline gap-4 mt-6">
                <span className="text-5xl font-black tracking-tighter">$79.990</span>
                <span className="text-primary font-bold uppercase text-xs px-3 py-1 bg-primary/10 rounded-full">Oferta Lanzamiento</span>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-foreground/50 mb-4">Color del Case</p>
                <div className="flex gap-4">
                  {['Negro', 'Blanco/Beige'].map(v => (
                    <button
                      key={v}
                      onClick={() => setVariant(v)}
                      className={cn(
                        "flex-1 py-4 border font-bold uppercase text-xs tracking-widest transition-all",
                        variant === v ? "border-primary text-primary bg-primary/5" : "border-white/10 text-foreground/40 hover:border-white/30"
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
                  "p-6 border cursor-pointer transition-all flex items-center justify-between",
                  includeUpsell ? "border-primary bg-primary/5" : "border-white/10 hover:border-white/20"
                )}
              >
                <div className="flex items-center gap-4">
                  <div className={cn("w-6 h-6 rounded-full border flex items-center justify-center", includeUpsell ? "bg-primary border-primary" : "border-white/20")}>
                    {includeUpsell && <Check className="w-4 h-4 text-white" />}
                  </div>
                  <div>
                    <p className="font-bold uppercase text-sm">+ Pack Energía</p>
                    <p className="text-xs text-foreground/50">Batería 20.000 mAh + Cable premium</p>
                  </div>
                </div>
                <span className="font-bold text-primary">+$10.000</span>
              </div>
            </div>

            <Button className="w-full h-20 bg-primary hover:bg-primary/90 text-white rounded-none text-xl font-black uppercase tracking-[0.3em]">
              Reservar ahora
            </Button>
            
            <p className="text-center text-[10px] text-foreground/30 uppercase tracking-widest">
              Sin contratos. Sin configuraciones. Solo paz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
