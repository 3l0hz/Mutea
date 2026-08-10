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
    <section id="beneficios" className="py-20 md:py-32 border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {benefits.map((b, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-6 md:space-y-8 group">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border-2 border-slate-100 rounded-full group-hover:border-primary group-hover:bg-primary transition-all duration-500">
                <b.icon className="w-8 h-8 md:w-10 md:h-10 text-foreground group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-base md:text-lg font-display font-black tracking-wider uppercase">{b.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
