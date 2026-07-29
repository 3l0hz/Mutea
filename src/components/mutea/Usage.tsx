
"use client";

import React from 'react';

export function Usage() {
  return (
    <section className="py-40 bg-white text-center px-6">
      <div className="max-w-3xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight">
          Así de <span className="text-primary">Simple.</span>
        </h2>
        <div className="h-1 w-20 bg-foreground mx-auto" />
        <p className="text-2xl md:text-3xl font-medium text-foreground/60 leading-relaxed max-w-2xl mx-auto">
          Conéctalo a un powerbank. Activa el switch. <br />
          Recupera el <span className="text-foreground font-black italic">silencio</span> al instante.
        </p>
      </div>
    </section>
  );
}
