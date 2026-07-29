
"use client";

import React from 'react';
import { Wind, ShieldCheck, Zap } from 'lucide-react';

export function Benefits() {
  const benefits = [
    { title: "Menos ruido, más paz.", icon: Wind },
    { title: "Tecnología avanzada.", icon: ShieldCheck },
    { title: "Compacto y portátil.", icon: Zap },
  ];

  return (
    <section id="beneficios" className="py-32 border-b border-white/5 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {benefits.map((b, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-6 group">
              <div className="w-16 h-16 flex items-center justify-center border border-primary/30 rounded-full group-hover:bg-primary transition-all duration-500">
                <b.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold tracking-widest uppercase italic">{b.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
