"use client";

import React from 'react';
import { Building2, Palmtree, Tent, Laptop, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

export function UseCases() {
  const cases = [
    { 
      label: "Departamentos", 
      description: "Tranquilidad en casa.",
      icon: Building2 
    },
    { 
      label: "Playas", 
      description: "Disfruta tu espacio.",
      icon: Palmtree 
    },
    { 
      label: "Camping", 
      description: "Más tranquilidad al aire libre.",
      icon: Tent 
    },
    { 
      label: "Home Office", 
      description: "Concéntrate sin interrupciones.",
      icon: Laptop 
    },
    { 
      label: "Descanso", 
      description: "Dormirás mucho mejor.",
      icon: Moon 
    },
  ];

  return (
    <section id="casos" className="py-12 md:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título adaptable */}
        <div className="mb-10 md:mb-20 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight">
            Casos de <span className="text-primary">Uso</span>
          </h2>
          <div className="h-1 w-16 md:w-20 bg-primary mx-auto md:mx-0 mt-4" />
        </div>

        {/* Layout Desktop */}
        <div className="hidden md:flex flex-wrap justify-center gap-24">
          {cases.map((c, idx) => (
            <div key={idx} className="flex flex-col items-center gap-4 opacity-40 hover:opacity-100 transition-all hover:scale-110 cursor-default">
              <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                <c.icon className="w-8 h-8 text-foreground" />
              </div>
              <span className="text-[10px] font-display font-black tracking-[0.2em] uppercase text-foreground">{c.label}</span>
            </div>
          ))}
        </div>

        {/* Layout Mobile: Tarjetas Horizontales Compactas */}
        <div className="md:hidden flex flex-col gap-4">
          {cases.map((c, idx) => (
            <div 
              key={idx} 
              className={cn(
                "flex items-center gap-5 p-4 bg-white rounded-[20px] border border-slate-200 shadow-sm",
                "animate-in fade-in slide-in-from-bottom-2 duration-500 fill-mode-both"
              )}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                <c.icon className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-0.5">
                <h3 className="text-xs font-display font-black uppercase tracking-widest text-foreground">
                  {c.label}
                </h3>
                <p className="text-[11px] text-foreground/50 font-medium">
                  {c.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
