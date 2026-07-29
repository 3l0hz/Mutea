
"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
      isScrolled ? "bg-background/80 backdrop-blur-md py-4 shadow-xl" : "bg-transparent"
    )}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MuteaLogo className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold tracking-[0.3em] text-foreground">MUTEA</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <a href="#beneficios" className="text-sm font-medium tracking-widest text-foreground/70 hover:text-primary transition-colors uppercase">Beneficios</a>
          <a href="#casos" className="text-sm font-medium tracking-widest text-foreground/70 hover:text-primary transition-colors uppercase">Casos de Uso</a>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none px-8 font-bold tracking-widest uppercase">
            Comprar
          </Button>
        </div>
      </nav>
    </header>
  );
}

function MuteaLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 80V40M20 40C20 30 35 20 50 20C65 20 80 30 80 40M80 40V80" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
      <path d="M40 80V50M40 50C40 45 45 42 50 42C55 42 60 45 60 50M60 50V80" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
      <circle cx="50" cy="90" r="6" fill="currentColor"/>
    </svg>
  );
}
