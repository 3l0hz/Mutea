
"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const PRODUCT_IMAGE_URL = "https://exntfmqdonkpbzrlsbww.supabase.co/storage/v1/object/sign/HeroSection/mutea/signal-2026-07-29-13-00-30-661_004.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY4MzQ3Ni1lYjFiLTQ0YjUtYmNmZC0zZGZkODM3ZmFmMjAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIZXJvU2VjdGlvbi9tdXRlYS9zaWduYWwtMjAyNi0wNy0yOS0xMy0wMC0zMC02NjFfMDA0LnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODUzNjQxNDEsImV4cCI6MTgxNjkwMDE0MX0.nPOhL26lQWxP8V65zGA0_yUb5zAREV87_cYypFl4dqY";

interface Step {
  id: number;
  title: string;
  description: string;
  indicatorText?: string;
  indicatorSubtext?: string;
  indicatorPos?: { x: number; y: number };
}

const STEPS: Step[] = [
  {
    id: 1,
    title: "CONECTA",
    description: "Conecta Mutea a una batería externa mediante USB-C.",
    indicatorText: "USB-C",
    indicatorSubtext: "Conecta tu batería externa aquí.",
    indicatorPos: { x: 42, y: 88 } // Porcentaje relativo al puerto USB-C
  },
  {
    id: 2,
    title: "ACTIVA",
    description: "Enciende Mutea con el switch.",
    indicatorText: "SWITCH",
    indicatorSubtext: "Activa el dispositivo.",
    indicatorPos: { x: 50, y: 70 } // Porcentaje relativo al switch
  },
  {
    id: 3,
    title: "ESTÁS LISTO",
    description: "Mutea está preparado para utilizarse.",
  }
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0% -30% 0%',
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const stepId = Number(entry.target.getAttribute('data-step'));
          setActiveStep(stepId);
        }
      });
    }, observerOptions);

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="como-funciona" className="py-24 md:py-40 bg-white overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Encabezado */}
        <div className="text-center space-y-4 mb-16 md:mb-24">
          <span className="text-[10px] font-display font-black text-primary uppercase tracking-[0.3em] block animate-in fade-in slide-in-from-bottom-2 duration-500">
            CÓMO FUNCIONA
          </span>
          <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tight leading-none animate-in fade-in slide-in-from-bottom-4 duration-700">
            ASÍ DE <span className="text-primary">SIMPLE.</span>
          </h2>
          <p className="text-sm md:text-xl font-display font-bold text-foreground/40 uppercase tracking-widest animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Tres pasos. Cero complicaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start relative">
          
          {/* Lado del Producto (Sticky en Desktop) */}
          <div className="lg:sticky lg:top-40 flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[320px] md:max-w-[480px] aspect-square flex items-center justify-center group">
              {/* Glow Azul */}
              <div className={cn(
                "absolute w-[80%] h-[80%] bg-primary/10 rounded-full blur-[60px] md:blur-[100px] transition-all duration-1000",
                activeStep === 3 ? "opacity-40 scale-110" : "opacity-20 scale-100"
              )} />
              
              <div className="relative z-10 w-full h-full animate-float">
                <Image
                  src={PRODUCT_IMAGE_URL}
                  alt="MUTEA Product"
                  fill
                  className="object-contain drop-shadow-2xl"
                  unoptimized
                />

                {/* Indicadores UI Superpuestos */}
                {STEPS.map((step) => (
                  step.indicatorPos && (
                    <div 
                      key={step.id}
                      className={cn(
                        "absolute transition-all duration-500 flex flex-col items-start gap-2",
                        activeStep === step.id ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-4 pointer-events-none"
                      )}
                      style={{ 
                        left: `${step.indicatorPos.x}%`, 
                        top: `${step.indicatorPos.y}%` 
                      }}
                    >
                      {/* Línea Conectora */}
                      <div className="absolute w-[80px] md:w-[120px] h-[1px] bg-primary/40 -left-[85px] md:-left-[125px] top-[10px] transform -rotate-12 origin-right" />
                      
                      {/* Punto de origen en el producto */}
                      <div className="absolute w-2 h-2 bg-primary rounded-full -left-[5px] top-[8px] animate-pulse" />
                      
                      {/* Etiqueta del Indicador */}
                      <div className="relative -left-[160px] md:-left-[240px] -top-8 text-left space-y-1">
                        <span className="text-[10px] md:text-xs font-display font-black text-primary uppercase tracking-widest block bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded">
                          {step.indicatorText}
                        </span>
                        <p className="text-[9px] md:text-[10px] font-bold text-foreground/60 uppercase leading-tight max-w-[120px]">
                          {step.indicatorSubtext}
                        </p>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>

          {/* Lado de los Pasos (Scrollable) */}
          <div className="relative space-y-32 md:space-y-64 pb-32 order-2 lg:order-1">
            {/* Línea de Progreso Vertical */}
            <div className="absolute left-4 md:left-6 top-0 bottom-32 w-[2px] bg-slate-100 hidden md:block">
              <div 
                className="w-full bg-primary transition-all duration-1000 ease-out origin-top"
                style={{ height: `${((activeStep - 1) / (STEPS.length - 1)) * 100}%` }}
              />
            </div>

            {STEPS.map((step, idx) => (
              <div 
                key={step.id}
                ref={(el) => (stepRefs.current[idx] = el)}
                data-step={step.id}
                className={cn(
                  "relative pl-4 md:pl-20 transition-all duration-700",
                  activeStep === step.id ? "opacity-100 translate-y-0" : "opacity-20 translate-y-10"
                )}
              >
                {/* Punto de progreso en mobile/desktop */}
                <div className={cn(
                  "absolute left-[-2px] md:left-4 top-2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-500",
                  activeStep === step.id ? "bg-primary text-white scale-110 shadow-lg shadow-primary/20" : "bg-slate-100 text-slate-400"
                )} style={{ borderRadius: '12px' }}>
                  <span className="text-sm font-display font-black tracking-tighter">0{step.id}</span>
                </div>

                <div className="pt-12 md:pt-0 space-y-4">
                  <h3 className={cn(
                    "text-2xl md:text-4xl font-display font-black uppercase tracking-tight transition-colors duration-500",
                    activeStep === step.id ? "text-foreground" : "text-foreground/40"
                  )}>
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg font-medium text-foreground/50 max-w-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
