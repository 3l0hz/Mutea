"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Smartphone, Power, CheckCircle2, ChevronDown, Zap } from 'lucide-react';

const PRODUCT_IMAGE_URL = "https://exntfmqdonkpbzrlsbww.supabase.co/storage/v1/object/sign/HeroSection/mutea/signal-2026-07-29-13-00-30-661_004.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY4MzQ3Ni1lYjFiLTQ0YjUtYmNmZC0zZGZkODM3ZmFmMjAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIZXJvU2VjdGlvbi9tdXRlYS9zaWduYWwtMjAyNi0wNy0yOS0xMy0wMC0zMC02NjFfMDA0LnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODUzNjQxNDEsImV4cCI6MTgxNjkwMDE0MX0.nPOhL26lQWxP8V65zGA0_yUb5zAREV87_cYypFl4dqY";

// Imágenes de referencia para miniaturas (basadas en los assets existentes)
const THUMB_USB = "https://exntfmqdonkpbzrlsbww.supabase.co/storage/v1/object/sign/HeroSection/mutea%20black/atras.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY4MzQ3Ni1lYjFiLTQ0YjUtYmNmZC0zZGZkODM3ZmFmMjAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIZXJvU2VjdGlvbi9tdXRlYSBibGFjay9hdHJhcy5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg1NDM3MDgzLCJleHAiOjE4MTY5NzMwODN9.a4UGP0d9si6EKLHK8nz_B4NmJ-dcqcIT12dES4Oy3o8";
const THUMB_SWITCH = "https://exntfmqdonkpbzrlsbww.supabase.co/storage/v1/object/sign/HeroSection/mutea%20black/Costado%20adelante.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY4MzQ3Ni1lYjFiLTQ0YjUtYmNmZC0zZGZkODM3ZmFmMjAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIZXJvU2VjdGlvbi9tdXRlYS BibGFjay9Db3N0YWRvIGFkZWxhbnRlLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODU0MzY0MjEsImV4cCI6MTgxNjk3MjQyMX0.PhjyXcNIGnpBt2DYo_EcWt_RYTwuup0OVltElYLnlho";
const THUMB_READY = PRODUCT_IMAGE_URL;

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  thumb: string;
}

const STEPS: Step[] = [
  {
    id: 1,
    title: "CONECTA",
    description: "Conecta Mutea a una batería externa mediante USB-C.",
    icon: Zap,
    thumb: THUMB_USB
  },
  {
    id: 2,
    title: "ACTIVA",
    description: "Enciende Mutea con el switch.",
    icon: Power,
    thumb: THUMB_SWITCH
  },
  {
    id: 3,
    title: "ESTÁS LISTO",
    description: "Mutea está preparado para utilizarse.",
    icon: CheckCircle2,
    thumb: THUMB_READY
  }
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
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
          if (!isNaN(stepId)) {
            setActiveStep(stepId);
          }
        }
      });
    }, observerOptions);

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="como-funciona" ref={sectionRef} className="relative py-24 md:py-40 bg-black text-white overflow-hidden z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Encabezado Principal */}
        <div className="text-center space-y-4 mb-16 md:mb-24">
          <span className="text-[10px] md:text-[11px] font-display font-black text-primary uppercase tracking-[0.4em] block animate-in fade-in duration-700">
            CÓMO FUNCIONA
          </span>
          <h2 className="text-4xl md:text-7xl font-display font-black uppercase tracking-tight leading-none animate-in fade-in slide-in-from-bottom-4 duration-700">
            ASÍ DE <span className="text-primary">SIMPLE.</span>
          </h2>
          <p className="text-sm md:text-xl font-medium text-white/40 max-w-lg mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Tres pasos. Cero complicaciones.
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-32 items-start relative">
          
          {/* Lado del Producto (Sticky en Desktop) */}
          <div className="lg:sticky lg:top-40 w-full flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[280px] md:max-w-[420px] aspect-square flex items-center justify-center">
              
              {/* Glow Dinámico Detrás del Producto */}
              <div className={cn(
                "absolute w-[70%] h-[70%] bg-primary/20 rounded-full blur-[80px] md:blur-[120px] transition-all duration-1000",
                activeStep === 3 ? "opacity-60 scale-110" : "opacity-30 scale-100"
              )} />
              
              {/* Pedestal */}
              <div className="absolute bottom-[10%] w-[80%] h-[20px] md:h-[30px] bg-black border border-primary/30 rounded-[50%] shadow-[0_0_40px_rgba(41,184,255,0.2)] flex items-center justify-center">
                <div className="w-[95%] h-[80%] rounded-[50%] border-t border-primary/50" />
              </div>

              {/* Imagen del Producto */}
              <div className="relative z-10 w-full h-full animate-float flex items-center justify-center">
                <Image
                  src={PRODUCT_IMAGE_URL}
                  alt="MUTEA Product"
                  width={600}
                  height={600}
                  className="object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)]"
                  unoptimized
                />

                {/* Indicador USB-C Dinámico */}
                <div className={cn(
                  "absolute left-[-15%] top-[60%] transition-all duration-700 flex items-center gap-3",
                  activeStep === 1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
                )}>
                  <div className="text-right">
                    <span className="text-[10px] md:text-[12px] font-display font-black text-primary uppercase tracking-widest block">USB-C</span>
                    <p className="text-[8px] md:text-[9px] font-medium text-white/50 uppercase leading-tight max-w-[80px]">Conecta tu batería externa aquí.</p>
                  </div>
                  <div className="relative flex items-center">
                    <div className="w-12 md:w-20 h-[1px] bg-primary/60" />
                    <div className="w-1.5 h-1.5 bg-primary rounded-full absolute right-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Narrativo (Scrollable) */}
          <div className="w-full space-y-12 md:space-y-32 order-2 lg:order-1 pt-10">
            
            {/* Línea de progreso vertical lateral (Mobile/Desktop) */}
            <div className="relative">
              {/* Línea Base */}
              <div className="absolute left-[34px] md:left-[39px] top-6 bottom-6 w-[1px] bg-white/10" />
              
              {/* Línea de Progreso Activa */}
              <div 
                className="absolute left-[34px] md:left-[39px] top-6 w-[1px] bg-primary transition-all duration-700 ease-out"
                style={{ height: `${((activeStep - 1) / (STEPS.length - 1)) * 80}%` }}
              />

              <div className="space-y-12 md:space-y-32">
                {STEPS.map((step, idx) => {
                  const Icon = step.icon;
                  const isActive = activeStep === step.id;
                  const isCompleted = activeStep > step.id;

                  return (
                    <div 
                      key={step.id}
                      ref={(el) => (stepRefs.current[idx] = el)}
                      data-step={step.id}
                      className={cn(
                        "flex gap-6 md:gap-10 transition-all duration-700 items-center",
                        isActive ? "opacity-100" : "opacity-30"
                      )}
                    >
                      {/* Número e Icono Circular */}
                      <div className="flex flex-col items-center gap-4 flex-shrink-0">
                        <span className={cn(
                          "text-[10px] md:text-xs font-display font-black tracking-tighter transition-colors duration-500",
                          isActive ? "text-primary" : "text-white/20"
                        )}>
                          0{step.id}
                        </span>
                        <div className={cn(
                          "w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-500",
                          isActive ? "border-primary bg-primary/10 shadow-[0_0_15px_rgba(41,184,255,0.3)] scale-110" : "border-white/10 bg-transparent"
                        )}>
                          <Icon className={cn("w-4 h-4 md:w-5 md:h-5", isActive ? "text-primary" : "text-white/20")} />
                        </div>
                      </div>

                      {/* Texto y Miniatura */}
                      <div className="flex-grow flex items-center justify-between gap-4 py-4 md:py-8 border-b border-white/5">
                        <div className="space-y-1 md:space-y-2">
                          <h3 className={cn(
                            "text-xl md:text-3xl font-display font-black uppercase tracking-tight transition-colors duration-500",
                            isActive ? "text-white" : "text-white/20"
                          )}>
                            {step.title}
                          </h3>
                          <p className="text-[10px] md:text-sm font-medium text-white/40 max-w-[180px] md:max-w-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>

                        {/* Miniatura de Referencia */}
                        <div className={cn(
                          "relative w-20 h-14 md:w-32 md:h-20 rounded-xl overflow-hidden border transition-all duration-500 flex-shrink-0",
                          isActive ? "border-primary/50 shadow-lg scale-105" : "border-white/5 opacity-40"
                        )}>
                          <Image
                            src={step.thumb}
                            alt={step.title}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Cierre Visual */}
            <div className="pt-20 pb-10 text-center lg:text-left space-y-6">
              <div className="h-1 w-12 bg-primary/20 mx-auto lg:mx-0" />
              <h4 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight">
                ASÍ DE <span className="text-primary">SIMPLE.</span>
              </h4>
              <p className="text-[10px] md:text-sm font-display font-bold text-white/30 uppercase tracking-[0.3em]">
                Tres pasos. Cero complicaciones.
              </p>
              <div className="pt-8 animate-bounce">
                <ChevronDown className="w-6 h-6 text-primary mx-auto lg:mx-0 opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
