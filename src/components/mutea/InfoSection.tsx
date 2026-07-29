
"use client";

import React from 'react';

export function InfoSection() {
  return (
    <section className="py-32 px-6 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-32">
        {/* Lado del Problema */}
        <div className="space-y-10">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight">
              😣 Adiós a los <span className="text-destructive">parlantes molestos</span>
            </h2>
            <p className="text-lg text-foreground/60 leading-relaxed max-w-lg font-medium">
              ¿Te ha pasado que intentas descansar y el ruido del vecino no te deja dormir? 
              Música fuerte de madrugada, parlantes encendidos desde temprano, fines de semana sin descanso...
            </p>
          </div>
          
          <ul className="space-y-6">
            {[
              "Afecta tu sueño",
              "Afecta tu salud",
              "Afecta tu productividad y a tu familia"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 text-sm font-display font-bold tracking-wider uppercase text-foreground/80">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center text-destructive">❌</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Lado de la Solución */}
        <div className="space-y-10">
          <div className="space-y-6">
            <h3 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight">
              🔇 Tranquilidad, <span className="text-primary">control y respeto</span>
            </h3>
            <p className="text-lg text-foreground/60 leading-relaxed max-w-lg font-medium">
              Ofrecemos soluciones tecnológicas y preventivas para reducir el impacto del ruido externo, 
              ayudando a recuperar la tranquilidad del hogar de forma responsable.
            </p>
          </div>

          <ul className="space-y-6">
            {[
              "Ideal para casas, departamentos y condominios",
              "Pensado para quienes trabajan, estudian o tienen niños",
              "Enfoque discreto, moderno y orientado al bienestar"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 text-sm font-display font-bold tracking-wider uppercase text-foreground/80">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="h-1 w-24 bg-primary" />
        </div>
      </div>
    </section>
  );
}
