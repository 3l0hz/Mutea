
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const categories = [
  { name: 'Juguetes interactivos', imageId: 'interactive-toy' },
  { name: 'Gadgets para mascotas', imageId: 'automatic-feeder' },
  { name: 'Paseo y aventura', imageId: 'walking-gadget' },
  { name: 'Descanso', imageId: 'orthopedic-bed' },
  { name: 'Hidratación y alimentación', imageId: 'cat-fountain' },
  { name: 'Rascadores', imageId: 'cat-scratcher' },
];

export function Categories() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl font-bold tracking-tight">Categorías populares</h2>
        <a href="#" className="text-primary font-bold hover:underline">Ver todas</a>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
        {categories.map((cat) => {
          const img = PlaceHolderImages.find(i => i.id === cat.imageId);
          return (
            <div key={cat.name} className="group cursor-pointer">
              <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-4 shadow-sm border border-white transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                <Image
                  src={img?.imageUrl || 'https://picsum.photos/seed/cat/400/400'}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <p className="text-center font-bold text-sm md:text-base text-foreground/80 leading-tight">
                {cat.name}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
