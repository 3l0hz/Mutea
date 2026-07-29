
"use client";

import React from 'react';

export function Footer() {
  return (
    <footer className="py-24 bg-white border-t border-slate-100 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
        <div className="space-y-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <span className="text-3xl font-display font-black tracking-[0.4em] uppercase">MUTEA</span>
          </div>
          <p className="text-[10px] font-display font-bold tracking-[0.3em] text-foreground/40 uppercase">Tranquilidad en cualquier lugar.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-16 text-center md:text-left">
          <div className="space-y-4">
            <h4 className="text-[10px] font-display font-black uppercase tracking-[0.3em] text-primary">Contacto</h4>
            <p className="text-sm font-display font-bold uppercase tracking-widest">hola@mutea.cl</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-[10px] font-display font-black uppercase tracking-[0.3em] text-primary">Pagos</h4>
            <div className="flex gap-4 opacity-40 grayscale">
              <div className="w-10 h-6 bg-slate-200 rounded-sm" />
              <div className="w-10 h-6 bg-slate-200 rounded-sm" />
              <div className="w-10 h-6 bg-slate-200 rounded-sm" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-slate-100 text-center">
        <p className="text-[10px] font-display font-bold text-foreground/20 uppercase tracking-[0.5em]">© 2024 MUTEA GLOBAL. TODOS LOS DERECHOS RESERVADOS.</p>
      </div>
    </footer>
  );
}
