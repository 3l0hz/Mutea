
"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function MuteaLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* M Shape */}
      <path
        d="M20 70V40L50 65L80 40V70"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Arcs (Wi-Fi style) */}
      <path
        d="M38 28A15 15 0 0 1 62 28"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M30 20A25 25 0 0 1 70 20"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M22 12A35 35 0 0 1 78 12"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
      {/* Center Dot */}
      <circle cx="50" cy="88" r="6" fill="currentColor" />
    </svg>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-6",
      isScrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent"
    )}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <MuteaLogo className="w-10 h-10 text-primary" />
          <span className="text-xl font-display font-black tracking-[0.5em] text-foreground">MUTEA</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <a href="#beneficios" className="text-[10px] font-display font-bold tracking-widest text-foreground/60 hover:text-primary transition-colors uppercase">Beneficios</a>
          <a href="#casos" className="text-[10px] font-display font-bold tracking-widest text-foreground/60 hover:text-primary transition-colors uppercase">Casos de Uso</a>
          <Button variant="default" className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-8 font-display font-bold tracking-widest uppercase text-[10px]">
            Comprar
          </Button>
        </div>
      </nav>
    </header>
  );
}
