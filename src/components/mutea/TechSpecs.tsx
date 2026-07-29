
"use client";

import React from 'react';
import { Radio, Cpu, Signal, Settings2, Box, ShieldCheck } from 'lucide-react';

export function TechSpecs() {
  const specs = [
    {
      title: "Alcance extendido",
      value: "15-20 metros",
      description: "Afecta a parlantes en un radio de hasta 20 mts en línea de vista directa.",
      icon: Radio
    },
    {
      title: "Arquitectura",
      value: "Alta calidad",
      description: "Plataforma compacta y confiable que permite portabilidad y estabilidad total.",
      icon: Cpu
    },
    {
      title: "Antena 2.4GHz",
      value: "Alto desempeño",
      description: "Análisis y atenuación sobre comunicaciones de corto y mediano alcance.",
      icon: Signal
    },
    {
      title: "Configuración",
      value: "Adaptable",
      description: "Permite ajustar el comportamiento operativo según distintos escenarios.",
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
    <section className="py-32 px-6 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 space-y-4 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight">
            Ficha <span className="text-primary">Técnica</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto md:mx-0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specs.map((spec, idx) => (
            <div 
              key={idx} 
              className="p-10 border border-slate-200 bg-white rounded-[2rem] hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                <spec.icon className="w-6 h-6 text-foreground/40 group-hover:text-white transition-colors" />
              </div>
              <div className="space-y-2 mb-4">
                <span className="text-[10px] font-display font-black text-primary uppercase tracking-[0.2em]">{spec.title}</span>
                <h3 className="text-xl font-display font-black uppercase tracking-tight">
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
