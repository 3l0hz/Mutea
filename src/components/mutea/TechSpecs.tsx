"use client";

import React from 'react';
import { Radio, Box, Signal, Settings2, Laptop, ShieldCheck } from 'lucide-react';

export function TechSpecs() {
  const specs = [
    {
      title: "Alcance extendido",
      value: "HASTA 35 METROS",
      description: "Alcance extendido comprobado de hasta 35 metros. Capaz de atravesar muros de concreto sin perder eficacia.",
      icon: Radio
    },
    {
      title: "DISEÑO EXCLUSIVO",
      value: "MODELADO 3D",
      description: "Case diseñado y modelado a medida en 3D para una estructura compacta y ultra resistente.",
      icon: Laptop
    },
    {
      title: "Antena 2.4GHz",
      value: "Alto desempeño",
      description: "Análisis y atenuación sobre comunicaciones de corto y mediano alcance.",
      icon: Signal
    },
    {
      title: "USO INMEDIATO",
      value: "PLUG & PLAY",
      description: "Sin configuraciones complejas. Solo conéctalo y actívalo al instante con su switch.",
      icon: Settings2
    },
    {
      title: "Diseño",
      value: "Portátil",
      description: "Formato liviano y discreto fácil de transportar para uso en hogar o terreno.",
      icon: Box
    },
    {
      title: "Enfoque",
      value: "Controlado",
      description: "Pensado para investigación y solución de interferencias en entornos autorizados.",
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20 space-y-4 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight">
            Ficha <span className="text-primary">Técnica</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto md:mx-0" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {specs.map((spec, idx) => (
            <div 
              key={idx} 
              className="p-8 md:p-10 border border-slate-200 bg-white rounded-[1.5rem] md:rounded-[2rem] hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-100 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:bg-primary transition-colors">
                <spec.icon className="w-5 h-5 md:w-6 md:h-6 text-foreground/40 group-hover:text-white transition-colors" />
              </div>
              <div className="space-y-2 mb-4">
                <span className="text-[9px] md:text-[10px] font-display font-black text-primary uppercase tracking-[0.2em]">{spec.title}</span>
                <h3 className="text-lg md:text-xl font-display font-black uppercase tracking-tight">
                  {spec.value}
                </h3>
              </div>
              <p className="text-sm text-foreground/50 leading-relaxed font-medium">
                {spec.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
