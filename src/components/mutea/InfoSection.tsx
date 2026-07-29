"use client";

import React from 'react';

export function InfoSection() {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24">
        {/* Lado del Problema */}
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic">
              😣 Adiós a los <span className="text-red-500">parlantes molestos</span>
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-lg">
              ¿Te ha pasado que intentas descansar y el ruido del vecino no te deja dormir? 
              Música fuerte de madrugada, parlantes encendidos desde temprano, fines de semana sin descanso...
            </p>
          </div>
          
          <ul className="space-y-4">
            {[
              "Afecta tu sueño",
              "Afecta tu salud",
              "Afecta tu productividad y a tu familia"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 text-lg font-bold tracking-tight uppercase">
                <span className="flex-shrink-0 text-red-500 text-2xl">❌</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Lado de la Solución */}
        <div className="space-y-8 animate-in fade-in slide-in-from-right duration-700 delay-200">
          <div className="space-y-4">
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic">
              🔇 Tranquilidad, <span className="text-primary text-glow">control y respeto</span>
            </h3>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-lg">
              Ofrecemos soluciones tecnológicas y preventivas para reducir el impacto del ruido externo, 
              ayudando a recuperar la tranquilidad del hogar de forma responsable.
            </p>
          </div>

          <ul className="space-y-4">
            {[
              "Ideal para casas, departamentos y condominios",
              "Pensado para quienes trabajan, estudian o tienen niños",
              "Enfoque discreto, moderno y orientado al bienestar"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 text-lg font-bold tracking-tight uppercase">
                <span className="flex-shrink-0 text-primary text-2xl">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="h-1 w-24 bg-primary/30" />
        </div>
      </div>
    </section>
  );
}
