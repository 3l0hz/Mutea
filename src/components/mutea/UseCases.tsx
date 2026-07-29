
"use client";

import React from 'react';
import { Building2, Palmtree, Tent, Laptop, Moon } from 'lucide-react';

export function UseCases() {
  const cases = [
    { label: "Departamentos", icon: Building2 },
    { label: "Playas", icon: Palmtree },
    { label: "Camping", icon: Tent },
    { label: "Home Office", icon: Laptop },
    { label: "Descanso", icon: Moon },
  ];

  return (
    <section id="casos" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-20">
        {cases.map((c, idx) => (
          <div key={idx} className="flex flex-col items-center gap-4 opacity-50 hover:opacity-100 transition-opacity">
            <c.icon className="w-10 h-10 text-primary" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase">{c.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
