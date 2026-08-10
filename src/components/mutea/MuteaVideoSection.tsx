
"use client";

import React from 'react';

interface MuteaVideoSectionProps {
  videoUrl: string;
}

export function MuteaVideoSection({ videoUrl }: MuteaVideoSectionProps) {
  return (
    <section className="py-24 px-6 bg-slate-50/30 border-y border-slate-100/50">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Encabezado de la sección con animación de entrada */}
        <div className="text-center space-y-6 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
          <div className="inline-block">
            <span className="text-[10px] font-display font-black tracking-[0.3em] text-primary uppercase bg-primary/5 px-4 py-1 rounded-full">
              MUTEA EN ACCIÓN
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight leading-none">
            EL SILENCIO, <span className="text-primary">EN TUS MANOS.</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/50 max-w-2xl mx-auto font-medium">
            Conoce Mutea y descubre una nueva forma de recuperar tu tranquilidad en cualquier entorno.
          </p>
        </div>

        {/* Contenedor del Video */}
        <div className="w-full max-w-[1200px] relative group animate-in fade-in zoom-in-95 duration-1000 delay-200 fill-mode-both">
          {/* Decoración tecnológica sutil */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent rounded-[26px] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative aspect-video w-full bg-black rounded-[20px] md:rounded-[24px] overflow-hidden shadow-2xl shadow-slate-200/50 border border-white/50">
            <video
              className="w-full h-full object-cover"
              controls
              preload="metadata"
              playsInline
              poster="https://picsum.photos/seed/muteavideo/1200/675"
            >
              <source src={videoUrl} type="video/mp4" />
              Tu navegador no soporta la reproducción de videos.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
