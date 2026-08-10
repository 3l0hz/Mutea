
"use client";

import React from 'react';
import { Radio, Box, Signal, Settings2, Laptop, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export function TechSpecs() {
  const specs = [
    {
      title: "Alcance extendido",
      mobileTitle: "35 METROS",
      value: "HASTA 35 METROS",
      mobileValue: "Alcance extendido",
      description: "Alcance extendido comprobado de hasta 35 metros. Capaz de atravesar muros de concreto sin perder eficacia.",
      icon: Radio
    },
    {
      title: "DISEÑO EXCLUSIVO",
      mobileTitle: "DISEÑO 3D",
      value: "MODELADO 3D",
      mobileValue: "Modelado exclusivo",
      description: "Case diseñado y modelado a medida en 3D para una estructura compacta y ultra resistente.",
      icon: Laptop
    },
    {
      title: "Antena 2.4GHz",
      mobileTitle: "2.4 GHz",
      value: "Alto desempeño",
      mobileValue: "Alto desempeño",
      description: "Análisis y atenuación sobre comunicaciones de corto y mediano alcance.",
      icon: Signal
    },
    {
      title: "USO INMEDIATO",
      mobileTitle: "PLUG & PLAY",
      value: "PLUG & PLAY",
      mobileValue: "Sin configuraciones",
      description: "Sin configuraciones complejas. Solo conéctalo y actívalo al instante con su switch.",
      icon: Settings2
    },
    {
      title: "Diseño",
      mobileTitle: "PORTÁTIL",
      value: "Portátil",
      mobileValue: "Diseño compacto",
      description: "Formato liviano y discreto fácil de transportar para uso en hogar o terreno.",
      icon: Box
    },
    {
      title: "Enfoque",
      mobileTitle: "CONTROLADO",
      value: "Controlado",
      mobileValue: "Uso autorizado",
      description: "Pensado para investigación y solución de interferencias en entornos autorizados.",
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-12 md:py-32 px-4 md:px-6 bg-slate-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Título de la sección */}
        <div className="mb-8 md:mb-20 space-y-2 md:space-y-4 text-center md:text-left animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight">
            Ficha <span className="text-primary">Técnica</span>
          </h2>
          <div className="h-1 w-16 md:w-20 bg-primary mx-auto md:mx-0" />
        </div>

        {/* Grid de Fichas */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {specs.map((spec, idx) => (
            <div 
              key={idx} 
              className={cn(
                "flex flex-col items-center md:items-start text-center md:text-left",
                "p-5 md:p-10 border border-slate-200 bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group",
                "animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
              )}
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              {/* Contenedor del Icono adaptable */}
              <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-50 md:bg-slate-100 rounded-2xl flex items-center justify-center mb-4 md:mb-8 group-hover:bg-primary transition-colors">
                <spec.icon className="w-5 h-5 md:w-6 md:h-6 text-primary md:text-foreground/40 group-hover:text-white transition-colors" />
              </div>
              
              <div className="space-y-1 md:space-y-2 mb-1 md:mb-4">
                {/* Etiquetas/Valores Mobile vs Desktop */}
                <div className="md:hidden space-y-1">
                  <h3 className="text-[12px] font-display font-black uppercase tracking-tight leading-tight">
                    {spec.mobileTitle}
                  </h3>
                  <div className="h-0.5 w-6 bg-primary/20 mx-auto" />
                  <p className="text-[9px] font-display font-bold text-foreground/40 uppercase tracking-widest">
                    {spec.mobileValue}
                  </p>
                </div>

                <div className="hidden md:block space-y-2">
                  <span className="text-[10px] font-display font-black text-primary uppercase tracking-[0.2em]">
                    {spec.title}
                  </span>
                  <h3 className="text-xl font-display font-black uppercase tracking-tight">
                    {spec.value}
                  </h3>
                </div>
              </div>

              {/* Descripción solo en Desktop */}
              <p className="hidden md:block text-sm text-foreground/50 leading-relaxed font-medium">
                {spec.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
