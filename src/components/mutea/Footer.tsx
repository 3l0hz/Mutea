
"use client";

import React from 'react';

export function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="space-y-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="text-2xl font-bold tracking-[0.4em] uppercase">MUTEA</span>
          </div>
          <p className="text-xs font-bold tracking-widest text-foreground/40 uppercase">Tranquilidad en cualquier lugar.</p>
        </div>

        <div className="flex gap-12 text-center md:text-left">
          <div className="space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-primary">Contacto</h4>
            <p className="text-sm font-medium">hola@mutea.cl</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-primary">Pagos</h4>
            <div className="flex gap-2 opacity-30 grayscale">
              <div className="w-8 h-5 bg-white rounded-sm" />
              <div className="w-8 h-5 bg-white rounded-sm" />
              <div className="w-8 h-5 bg-white rounded-sm" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center">
        <p className="text-[10px] text-foreground/20 uppercase tracking-[0.5em]">© 2024 MUTEA GLOBAL. TODOS LOS DERECHOS RESERVADOS.</p>
      </div>
    </footer>
  );
}
