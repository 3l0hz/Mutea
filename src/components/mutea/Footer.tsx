
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const LOGO_OFFICIAL_URL = "https://exntfmqdonkpbzrlsbww.supabase.co/storage/v1/object/sign/HeroSection/Mutea%20Logo/mutea%20png.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY4MzQ3Ni1lYjFiLTQ0YjUtYmNmZC0zZGZkODM3ZmFmMjAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIZXJvU2VjdGlvbi9NdXRlYSBMb2dvL211dGVhIHBuZy5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg1NDM3NTU1LCJleHAiOjE4MTY5NzM1NTV9.JionC7C3f8CyKblQ7G-B45SgzPcn-YQWTqs4DltRqXg";

export function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          
          {/* Logo y Eslogan */}
          <div className="md:col-span-4 space-y-6 text-center md:text-left">
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

          {/* Contacto y Redes */}
          <div className="md:col-span-4 flex flex-col items-center justify-center space-y-8">
            <div className="text-center space-y-3">
              <h4 className="text-[10px] font-display font-black uppercase tracking-[0.3em] text-primary">Contacto</h4>
              <a href="mailto:hola@mutea.cl" className="text-sm font-display font-bold uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2 justify-center">
                <Mail className="w-4 h-4" />
                hola@mutea.cl
              </a>
            </div>
            
            <div className="text-center space-y-4">
              <h4 className="text-[10px] font-display font-black uppercase tracking-[0.3em] text-primary">Seguinos</h4>
              <div className="flex justify-center gap-6">
                <a href="#" className="text-foreground/40 hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-foreground/40 hover:text-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-foreground/40 hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Enlaces de Navegación */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8 text-center md:text-left">
            <div className="space-y-6">
              <h4 className="text-[10px] font-display font-black uppercase tracking-[0.3em] text-primary">Mutea</h4>
              <ul className="space-y-4">
                <li><Link href="/" className="text-[10px] font-display font-bold uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors">Inicio</Link></li>
                <li><Link href="/#beneficios" className="text-[10px] font-display font-bold uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors">Beneficios</Link></li>
                <li><Link href="/#casos" className="text-[10px] font-display font-bold uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors">Casos de uso</Link></li>
                <li><Link href="/#comprar" className="text-[10px] font-display font-bold uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors">Comprar</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
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
        </div>

        {/* Copyright */}
        <div className="mt-24 pt-12 border-t border-slate-100 text-center">
          <p className="text-[9px] md:text-[10px] font-display font-bold text-foreground/20 uppercase tracking-[0.4em]">
            © 2026 MUTEA. TODOS LOS DERECHOS RESERVADOS.
          </p>
        </div>
      </div>
    </footer>
  );
}
