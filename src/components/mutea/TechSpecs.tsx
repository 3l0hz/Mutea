"use client";

import React from 'react';
import { Radio, Cpu, Signal, Settings2, Box, ShieldCheck } from 'lucide-react';

export function TechSpecs() {
  const specs = [
    {
      title: "Alcance extendido hasta 15-20 metros",
      description: "Afecta a parlantes en un radio de hasta 20 mts en línea de vista (considerar reducción por obstrucciones como paredes, ventanas o árboles).",
      icon: Radio
    },
    {
      title: "Arquitectura tecnológica de alta calidad",
      description: "Plataforma compacta y confiable que permite portabilidad, estabilidad y fácil integración.",
      icon: Cpu
    },
    {
      title: "Antena 2.4GHz de alto desempeño",
      description: "Diseñado para análisis y atenuación sobre comunicaciones de corto y mediano alcance.",
      icon: Signal
    },
    {
      title: "Configuración flexible y adaptable",
      description: "Permite ajustar el comportamiento operativo según distintos escenarios de prueba y análisis.",
      icon: Settings2
    },
    {
      title: "Diseño compacto y portátil",
      description: "Formato liviano, discreto y fácil de transportar para uso en hogar o terreno.",
      icon: Box
    },
    {
      title: "Enfoque profesional y controlado",
      description: "Pensado para investigación y solución de interferencias en entornos autorizados, priorizando un uso responsable.",
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic">
            Especificaciones <span className="text-primary text-glow">Técnicas</span>
          </h2>
          <div className="h-1 w-20 bg-primary/30" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specs.map((spec, idx) => (
            <div 
              key={idx} 
              className="p-8 border border-white/5 bg-white/[0.02] rounded-[2rem] hover:border-primary/30 transition-all group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <spec.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-tight mb-4 leading-tight">
                {spec.title}
              </h3>
              <p className="text-sm text-foreground/50 leading-relaxed">
                {spec.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
