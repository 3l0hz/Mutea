
"use client";

import React from 'react';
import Image from 'next/image';

const LOGO_OFFICIAL_URL = "https://exntfmqdonkpbzrlsbww.supabase.co/storage/v1/object/sign/HeroSection/Mutea%20Logo/mutea%20png.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY4MzQ3Ni1lYjFiLTQ0YjUtYmNmZC0zZGZkODM3ZmFmMjAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIZXJvU2VjdGlvbi9NdXRlYSBMb2dvL211dGVhIHBuZy5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg1NDM3NTU1LCJleHAiOjE4MTY5NzM1NTV9.JionC7C3f8CyKblQ7G-B45SgzPcn-YQWTqs4DltRqXg";

export function Footer() {
  return (
    <footer className="py-24 bg-white border-t border-slate-100 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
        <div className="space-y-6 text-center md:text-left">
          <Image 
            src={LOGO_OFFICIAL_URL}
            alt="MUTEA Logo"
            width={400}
            height={100}
            className="h-14 md:h-20 w-auto object-contain mx-auto md:mx-0"
            unoptimized
          />
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
