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
    <section id="casos" className="py-16 md:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap justify-center gap-8 md:gap-24">
        {cases.map((c, idx) => (
          <div key={idx} className="flex flex-col items-center gap-4 opacity-60 md:opacity-40 hover:opacity-100 transition-all hover:scale-110 cursor-default">
            <div className="p-5 md:p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
              <c.icon className="w-10 h-10 md:w-8 md:h-8 text-foreground" />
            </div>
            <span className="text-[10px] md:text-[10px] font-display font-black tracking-[0.2em] uppercase text-foreground">{c.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
