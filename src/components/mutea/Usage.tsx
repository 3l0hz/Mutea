
"use client";

import React from 'react';

export function Usage() {
  return (
    <section className="py-40 bg-background text-center px-6">
      <div className="max-w-3xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic italic">
          Así de <span className="text-primary">Simple.</span>
        </h2>
        <div className="h-px w-20 bg-primary mx-auto" />
        <p className="text-2xl md:text-3xl font-light text-foreground/80 leading-relaxed">
          Conéctalo a un powerbank. Activa el switch. <br />
          Recupera el <span className="font-bold italic">silencio</span> al instante.
        </p>
      </div>
    </section>
  );
}
