
"use client";

import React from 'react';
import { Gift, Zap, Truck, MessageCircle, Sparkles } from 'lucide-react';

const props = [
  {
    title: "Productos diferentes",
    desc: "Seleccionamos gadgets que no encontrarás en tiendas comunes.",
    icon: Sparkles,
  },
  {
    title: "Ideales para regalar",
    desc: "Sorprende con innovación y tecnología para el mejor amigo.",
    icon: Gift,
  },
  {
    title: "Despacho en todo Chile",
    desc: "Envíos rápidos y seguros a todas las regiones del país.",
    icon: Truck,
  },
  {
    title: "Atención personalizada",
    desc: "Resolvemos tus dudas directamente por WhatsApp.",
    icon: MessageCircle,
  },
];

export function ValueProps() {
  return (
    <section className="py-24 px-4 bg-white/50 border-y border-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">¿Por qué comprar en PawSense?</h2>
          <p className="text-muted-foreground text-lg">Más que una tienda, somos expertos en tecnología y diversión para mascotas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {props.map((p) => (
            <div key={p.title} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white text-primary">
                <p.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
