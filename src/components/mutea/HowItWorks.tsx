
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
    indicatorPos: { x: 42, y: 88 }
  },
  {
    id: 2,
    title: "ACTIVA",
    description: "Enciende Mutea con el switch.",
    indicatorText: "ACTIVA",
    indicatorSubtext: "Enciende Mutea aquí.",
    indicatorPos: { x: 50, y: 70 }
  },
  {
    id: 3,
    title: "ESTÁS LISTO",
    description: "Mutea está preparado para utilizarse.",
  }
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);
  const [showClosing, setShowClosing] = useState(false);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const closingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0% -40% 0%',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === closingRef.current) {
            setShowClosing(true);
            setActiveStep(3); // Mantener el estado final del producto
          } else {
            const stepId = Number(entry.target.getAttribute('data-step'));
            if (!isNaN(stepId)) {
              setActiveStep(stepId);
              setShowClosing(false);
            }
          }
        }
      });
    }, observerOptions);

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    if (closingRef.current) observer.observe(closingRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="como-funciona" className="relative py-24 md:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Encabezado Inicial */}
        <div className="text-center space-y-4 mb-20 md:mb-32">
          <span className="text-[10px] font-display font-black text-primary uppercase tracking-[0.3em] block animate-in fade-in slide-in-from-bottom-2 duration-500">
            CÓMO FUNCIONA
          </span>
          <div className="h-1 w-12 bg-primary/20 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start relative">
          
          {/* Lado del Producto (Sticky) - Elemento Constante */}
          <div className="lg:sticky lg:top-40 flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[320px] md:max-w-[480px] aspect-square flex items-center justify-center">
              
              {/* Glow Dinámico */}
              <div className={cn(
                "absolute w-[80%] h-[80%] bg-primary/10 rounded-full blur-[60px] md:blur-[100px] transition-all duration-1000",
                activeStep === 3 ? "opacity-50 scale-110" : "opacity-20 scale-100"
              )} />
              
              <div className="relative z-10 w-full h-full animate-float">
                <Image
                  src={PRODUCT_IMAGE_URL}
                  alt="MUTEA Product"
                  fill
                  className="object-contain drop-shadow-2xl transition-transform duration-700"
                  unoptimized
                />

                {/* Indicadores UI Superpuestos (Sólo Pasos 1 y 2) */}
                {STEPS.map((step) => (
                  step.indicatorPos && (
                    <div 
                      key={step.id}
                      className={cn(
                        "absolute transition-all duration-700 flex flex-col items-start",
                        (activeStep === step.id && !showClosing) ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4 pointer-events-none"
                      )}
                      style={{ 
                        left: `${step.indicatorPos.x}%`, 
                        top: `${step.indicatorPos.y}%` 
                      }}
                    >
                      {/* Línea Conectora */}
                      <div className="absolute w-[60px] md:w-[100px] h-[0.5px] bg-primary/60 -left-[65px] md:-left-[105px] top-[8px] transform -rotate-12 origin-right" />
                      
                      {/* Punto de origen */}
                      <div className="absolute w-1.5 h-1.5 bg-primary rounded-full -left-[3px] top-[7px] animate-pulse" />
                      
                      {/* Etiqueta */}
                      <div className="relative -left-[140px] md:-left-[220px] -top-10 text-left space-y-1">
                        <span className="text-[9px] md:text-[10px] font-display font-black text-primary uppercase tracking-widest block bg-white/60 backdrop-blur-sm px-2 py-0.5 rounded border border-primary/10">
                          {step.indicatorText}
                        </span>
                        <p className="text-[8px] md:text-[9px] font-bold text-foreground/50 uppercase leading-tight max-w-[100px]">
                          {step.indicatorSubtext}
                        </p>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>

          {/* Lado Narrativo (Scrollable) */}
          <div className="relative space-y-[40vh] pb-[20vh] order-2 lg:order-1">
            
            {/* Pasos Narrativos */}
            {STEPS.map((step, idx) => (
              <div 
                key={step.id}
                ref={(el) => (stepRefs.current[idx] = el)}
                data-step={step.id}
                className={cn(
                  "relative pl-6 md:pl-20 transition-all duration-1000 ease-in-out",
                  activeStep === step.id && !showClosing ? "opacity-100 translate-y-0" : "opacity-10 translate-y-10"
                )}
              >
                {/* Indicador de número */}
                <div className={cn(
                  "absolute left-[-4px] md:left-4 top-0 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center transition-all duration-700",
                  activeStep === step.id && !showClosing ? "bg-primary text-white scale-110 shadow-xl shadow-primary/20" : "bg-slate-100 text-slate-300"
                )} style={{ borderRadius: '10px' }}>
                  <span className="text-xs font-display font-black tracking-tighter">0{step.id}</span>
                </div>

                <div className="space-y-4 pt-2">
                  <h3 className={cn(
                    "text-2xl md:text-5xl font-display font-black uppercase tracking-tight transition-colors duration-700",
                    activeStep === step.id && !showClosing ? "text-foreground" : "text-foreground/20"
                  )}>
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-xl font-medium text-foreground/50 max-w-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Cierre: ASÍ DE SIMPLE */}
            <div 
              ref={closingRef}
              className={cn(
                "relative text-center lg:text-left space-y-6 pt-20 transition-all duration-1000 ease-out pb-40",
                showClosing ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              )}
            >
              <div className="inline-block px-4 py-1 bg-primary/5 rounded-full mb-4">
                <span className="text-[10px] font-display font-black tracking-[0.3em] text-primary uppercase">Misión Cumplida</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-display font-black uppercase tracking-tight leading-none">
                ASÍ DE <br /><span className="text-primary text-glow">SIMPLE.</span>
              </h2>
              <p className="text-base md:text-2xl font-display font-bold text-foreground/40 uppercase tracking-widest">
                Tres pasos. Cero complicaciones.
              </p>
            </div>

          </div>

        </div>
      </div>
      
      {/* Línea de progreso lateral decorativa (Desktop) */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 h-[40%] w-[1px] bg-slate-100 hidden lg:block">
        <div 
          className="w-full bg-primary transition-all duration-1000 ease-in-out"
          style={{ height: showClosing ? '100%' : `${((activeStep - 1) / (STEPS.length - 1)) * 100}%` }}
        />
      </div>
    </section>
  );
}
