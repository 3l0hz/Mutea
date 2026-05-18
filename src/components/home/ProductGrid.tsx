
"use client";

import React from 'react';
import Image from 'next/image';
import { MessageCircle, ShoppingBag, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    id: 1,
    name: "Pelota Inteligente Wicked Ball",
    price: "$34.990",
    category: "Juguetes",
    tag: "Popular",
    image: "https://picsum.photos/seed/p1/500/500",
  },
  {
    id: 2,
    name: "Fuente de Agua Cerámica Ultra",
    price: "$45.990",
    category: "Hidratación",
    image: "https://picsum.photos/seed/p2/500/500",
  },
  {
    id: 3,
    name: "Cámara para Mascotas 360°",
    price: "$89.990",
    category: "Gadgets",
    tag: "Nuevo",
    image: "https://picsum.photos/seed/p3/500/500",
  },
  {
    id: 4,
    name: "Arnés Aventura LED",
    price: "$28.990",
    category: "Paseo",
    image: "https://picsum.photos/seed/p4/500/500",
  },
];

export function ProductGrid() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-4xl font-bold tracking-tight mb-2">Destacados de la semana</h2>
          <p className="text-muted-foreground">Nuestra selección curada de lo mejor para tu mascota.</p>
        </div>
        <Button variant="outline" className="rounded-full font-bold">Ver catálogo completo</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group flex flex-col bg-white rounded-[2rem] p-4 border border-white/50 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="relative aspect-square rounded-[1.5rem] overflow-hidden mb-6 bg-background">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {product.tag && (
                <Badge className="absolute top-4 left-4 bg-accent text-white border-none font-bold rounded-full px-3 py-1">
                  {product.tag}
                </Badge>
              )}
              <Button size="icon" className="absolute bottom-4 right-4 rounded-full w-12 h-12 shadow-lg opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <Plus className="w-6 h-6" />
              </Button>
            </div>
            
            <div className="flex flex-col gap-1 mb-4 flex-grow">
              <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">{product.category}</span>
              <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">{product.name}</h3>
              <p className="text-xl font-bold text-primary mt-1">{product.price}</p>
            </div>

            <div className="flex flex-col gap-2 pt-4 border-t border-muted/50">
              <Button className="w-full rounded-full font-bold h-12 bg-primary hover:bg-primary/90">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Agregar al carro
              </Button>
              <Button variant="ghost" className="w-full rounded-full font-bold h-12 text-[#25D366] hover:bg-[#25D366]/10 hover:text-[#25D366]">
                <MessageCircle className="w-4 h-4 mr-2" />
                Consultar WhatsApp
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
