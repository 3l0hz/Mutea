
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const LOGO_OFFICIAL_URL = "https://exntfmqdonkpbzrlsbww.supabase.co/storage/v1/object/sign/HeroSection/Mutea%20Logo/mutea%20png.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY4MzQ3Ni1lYjFiLTQ0YjUtYmNmZC0zZGZkODM3ZmFmMjAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIZXJvU2VjdGlvbi9NdXRlYSBMb2dvL211dGVhIHBuZy5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg1NDM3NTU1LCJleHAiOjE4MTY5NzM1NTV9.JionC7C3f8CyKblQ7G-B45SgzPcn-YQWTqs4DltRqXg";

export function Footer() {
  return (
    <footer className="bg-white pt-20 pb-12 px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start">
          
          {/* Columna 1: Marca y Redes Sociales */}
          <div className="space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <Image 
                  src={LOGO_OFFICIAL_URL}
                  alt="MUTEA Logo"
                  width={240}
                  height={60}
                  className="h-12 md:h-16 w-auto object-contain mx-auto md:mx-0"
                  unoptimized
                />
              </Link>
              <p className="text-[10px] font-display font-bold tracking-[0.3em] text-foreground/40 uppercase">
                Tranquilidad en cualquier lugar.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-display font-black uppercase tracking-[0.3em] text-primary">SÍGUENOS</h4>
              <div className="flex justify-center md:justify-start gap-8">
                <a href="#" className="text-foreground/60 hover:text-primary transition-all hover:scale-110">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-foreground/60 hover:text-primary transition-all hover:scale-110">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-foreground/60 hover:text-primary transition-all hover:scale-110">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Columna 2: MUTEA Enlaces */}
          <div className="space-y-6 text-center md:text-left">
            <h4 className="text-[10px] font-display font-black uppercase tracking-[0.3em] text-primary">Mutea</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-[10px] font-display font-bold uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors">Inicio</Link></li>
              <li><Link href="/#beneficios" className="text-[10px] font-display font-bold uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors">Beneficios</Link></li>
              <li><Link href="/#casos" className="text-[10px] font-display font-bold uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors">Casos de uso</Link></li>
              <li><Link href="/#comprar" className="text-[10px] font-display font-bold uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors">Comprar</Link></li>
            </ul>
          </div>

          {/* Columna 3: AYUDA Enlaces */}
          <div className="space-y-6 text-center md:text-left">
            <h4 className="text-[10px] font-display font-black uppercase tracking-[0.3em] text-primary">Ayuda</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-[10px] font-display font-bold uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors">Preguntas frecuentes</Link></li>
              <li><Link href="mailto:hola@mutea.cl" className="text-[10px] font-display font-bold uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors">Contacto</Link></li>
              <li><Link href="/terminos" className="text-[10px] font-display font-bold uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors">Términos y condiciones</Link></li>
              <li><Link href="/privacidad" className="text-[10px] font-display font-bold uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors">Política de privacidad</Link></li>
              <li><Link href="/garantia" className="text-[10px] font-display font-bold uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors">Cambios y garantía</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-20 pt-10 border-t border-slate-100 text-center">
          <p className="text-[9px] md:text-[10px] font-display font-bold text-foreground/20 uppercase tracking-[0.4em]">
            © 2026 MUTEA. TODOS LOS DERECHOS RESERVADOS.
          </p>
        </div>
      </div>
    </footer>
  );
}
